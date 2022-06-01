import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const AddToCart = () => {
  return (
    <section className="cart-area mt-150 mb-5">
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-12 text-center text-lg-start mb-3">
                            <button className="btn btn-warning mx-2">Empty cart</button>
                            <button className="btn btn-primary mx-2">Start shopping</button>
                        </div>
                        <div className="col-12">
                            <CartItem></CartItem>
                            <CartItem></CartItem>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="fw-bold mb-5">Cart Calculation</h3>

                            <div className="row align-items-center mb-3">
                                <div className="col fw-bold">Purchase Amount</div>
                                <div className="col text-end fw-bold">$00</div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col fw-bold">Tax Amount</div>
                                <div className="col text-end fw-bold">$00</div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col fw-bold">Delivery Charge</div>
                                <div className="col text-end fw-bold">$00</div>
                            </div>
                            <hr />
                            <div className="row align-items-center mb-3">
                                <div className="col fw-bold">Total Amount</div>
                                <div className="col text-end fw-bold">$00</div>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="" className="form-label fw-bold">Apply Coupon</label>
                                <input type="text" className="form-control" placeholder="Enter coupon code" />
                            </div>
                            <div className="btn btn-primary col-12 mt-2" id="coupon-btn">Apply coupon</div>

                            <Link to='/checkout' className="btn btn-primary col-12 mt-3" id="coupon-btn">Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddToCart