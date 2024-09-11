import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ProduitDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id != 1) {
            navigate('/error');
            return;
        }
    }, [id, navigate])
    return (
        <div>
            Détail du produit n°{id}
        </div>
    );
};

export default ProduitDetail;