import React, { useEffect, useState } from 'react';
import Article from '../components/Article'
import axios from "axios"


const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les articles de l'API à la montée du composant
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        
        setArticles(response.data.posts); // Stocker les articles récupérés dans l'état
setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article
          id={article.id}
          title={article.title}
          tags={article.tags}
        />
      ))}
    </div>
  );
};

export default Blog;