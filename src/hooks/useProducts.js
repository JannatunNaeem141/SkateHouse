import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return [products, setProducts];
};

export default useProducts;