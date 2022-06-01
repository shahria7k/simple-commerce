import React from 'react'
import ProductImage from '../../assets/images/shoe.png'

function Product() {
  return (
    <section className="product-area mt-150 mb-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 text-center">
                    <img src={ProductImage} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-7">
                    <h1>Sniker GT22-01</h1>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem culpa saepe minima consectetur, natus fugiat veritatis quis voluptas nam sunt.

                        <br /><br />

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem doloribus similique nostrum quas animi minima voluptate laudantium libero ratione modi error ipsum tempore veniam nam quaerat nemo corporis facere quae ipsam architecto, aspernatur reprehenderit sint cupiditate qui? Necessitatibus sequi laborum vitae molestias, voluptas totam molestiae perspiciatis vel commodi, aut fuga?
                    </p>

                    <a href="" className="btn btn-primary btn-lg mx-1 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill mr-2" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product