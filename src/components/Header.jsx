import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>
                    <Link to="/blog">Blogs</Link>
                </li>
                <li>
                    <Link to="/produits">Products</Link>
                </li>
                <li>
                    <Link to="/panier">Panier</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;