import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import ProductCard from '../products/ProductCard'
import CategoryCard from './CategoryCard'

const Categories = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
        ]
    };

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    return (
        <section className="categories-area">
            <div className="container">
                <Slider {...settings} className='slider'>
                    {
                        categories.map(category => 
                            <CategoryCard title={category} />
                        )
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Categories