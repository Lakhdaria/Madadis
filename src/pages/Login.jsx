import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const { token } = response.data;

            // Stocker le token dans le stockage local
            localStorage.setItem('authToken', token);

            toast.success('Connexion réussie !');
            navigate('/dashboard'); // Redirige vers une page protégée
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Erreur lors de la connexion.');
            toast.error('Erreur de connexion.');
            console.error('Erreur de connexion:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="mb-4 text-center">Connexion</h2>
                
                {error && <Alert color="danger">{error}</Alert>}
                
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="password">Mot de passe</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormGroup>
                
                <Button color="primary" className="w-100 mt-3">Se connecter</Button>
                
                <div className="text-center mt-3">
                    <p>Vous n'avez pas de compte? <a href="/register">Inscription</a></p>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
