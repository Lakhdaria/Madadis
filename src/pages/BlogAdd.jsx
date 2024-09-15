import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const BlogAdd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newArticle = {
            title,
            description,
            date
        };

        try {
            await axios.post('http://localhost:3000/articles', newArticle);
            toast.success('Article ajouté avec succès !');
            navigate('/blog');
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Erreur lors de l\'ajout de l\'article.');
            toast.error('Erreur lors de l\'ajout de l\'article.');
            console.error('Erreur lors de l\'ajout de l\'article:', error.response ? error.response.data : error.message);
        }

        setTitle('');
        setDescription('');
        setDate('');
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Ajouter un article</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Titre :</Label>
                    <Input
                        type="text"
                        id="title"
                        placeholder="Entrez le titre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Contenu :</Label>
                    <Input
                        type="textarea"
                        id="description"
                        placeholder="Entrez le contenu"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date :</Label>
                    <Input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </FormGroup>
                {error && <p className="text-danger">{error}</p>}
                <Button type="submit" color="primary" className="mt-3">
                    Ajouter l'article
                </Button>
            </Form>
        </Container>
    );
};

export default BlogAdd;
