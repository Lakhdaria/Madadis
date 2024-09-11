import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import axios from "axios";

const BlogDetails = () => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id }= useParams();
  
    // Récupérer les articles de l'API à la montée du composant
    useEffect(() => {
      const fetchArticle = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/posts/' + id);
          
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

          <Article
            id={article.id}
            title={article.title}
            body={article.body}
            tags={article.tags}
            reactions={article.reactions}
          />
        
      </div>
    );
};

export default BlogDetails;