import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Article from '../components/Article';
import axios from "axios";

const BlogDetails = () => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();


    // Récupérer les articles de l'API à la montée du composant
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get('http://localhost:3000/articles/' + id);

                setArticle(response.data); // Stocker les articles récupérés dans l'état
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors de la récupération des articles:", error);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <p>Chargement de l'article...</p>;
    }

    return (
        <div className="article-list">
            <button onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg></button>

            <Article
                id={article.id}
                title={article.title}
                body={article.description}
            // tags={article.tags}
            // reactions={article.reactions}
            />

        </div>
    );
};

export default BlogDetails;