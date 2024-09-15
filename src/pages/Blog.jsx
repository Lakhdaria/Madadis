import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Button, Col, Row } from 'reactstrap';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/articles');
      setArticles(response.data || []);
      setLoading(false);
    } catch (error) {
      setError('Erreur lors de la récupération des articles.');
      console.error('Erreur lors de la récupération des articles:', error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();

    const interval = setInterval(fetchArticles, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  return (
    <div className="container mt-4">
      <Link to="/blog/add">
        <Button color="primary" className="mb-4">Ajouter un article</Button>
      </Link>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Array.isArray(articles) && articles.length > 0 ? (
        <Row>
          {articles.map((article) => (
            <Col sm="12" md="6" lg="4" className="mb-4" key={article.id}>
              <Card className="h-100">
                <CardBody>
                  <CardTitle tag="h5">{article.title}</CardTitle>
                  <CardText>{article.content}</CardText>
                  <CardText>
                    <small className="text-muted">Publié le {new Date(article.date).toLocaleDateString()}</small>
                  </CardText>
                  <Link to={`/blog/${article.id}`}>
                    <Button color="primary">Lire la suite</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Aucun article trouvé.</p>
      )}
    </div>
  );
};

export default Blog;
