import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../../assets/images/shoe.png'

const CategoryCard = () => {
  return (
    <div className="product-card">
        <Link to="/category">
        <div className="product-image">
            <img src={ProductImage} alt="Product Image" className='img-fluid rounded' />
        </div>
        <div className="product-data text-center">
            <h5>Fashion</h5>
        </div>
        </Link>
    </div>
  )
}

export default CategoryCard