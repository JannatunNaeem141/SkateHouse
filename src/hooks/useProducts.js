import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-tundra-73200.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return [products, setProducts];
};

export default useProducts;