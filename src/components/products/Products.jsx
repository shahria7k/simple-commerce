import React from 'react'
import ProductCard from './ProductCard'

function Products() {
    return (
        <section className="products-area my-5">
            <div className="container">
                <div className="row">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </section>
    )
}

export default Products