import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ title, body, tags, reactions, id }) => {
  if (body && reactions) {
    return (
      <div className="article">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag} </span>
          ))}
        </div>
        <p><strong>Like:</strong> {reactions?.likes}</p>
        <p><strong>Dislike:</strong> {reactions?.dislikes}</p>
        <hr />
      </div>
    );
  } else {
    return (
      <div className="article">
        <h2>{title}</h2>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag} </span>
          ))}
        </div>
        <Link to={`/blog/${id}`} className="btn">Lire la suite</Link>

        <hr />
      </div>
    );
  }

};

export default Article;