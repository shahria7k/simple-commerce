import React from 'react';
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
        slidesToShow: 6,
        slidesToScroll: 3,
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

    return (
        <section className="categories-area">
            <div className="container">
                <Slider {...settings} className='slider'>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                </Slider>
            </div>
        </section>
    )
}

export default Categories