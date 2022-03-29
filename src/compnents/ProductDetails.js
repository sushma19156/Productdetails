import { Button } from 'bootstrap';
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import {  FaShoppingCart} from 'react-icons/fa';







function ProductDetails() {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='small_img'>
                        <img src="assests/pdp1.png" alt="pdp1" /><br />
                        <img src="assests/pdp2.png" alt="pdp1" /><br />
                        <img src="assests/pdp3.png" alt="pdp1" /><br />
                        <img src="assests/pdp4.png" alt="pdp1" />
                    </div>
                </div>
                <div className='col-lg-3 product_img'>
                    <img src="assests/perfume.png" alt="" width='300px' height='300px' />
                </div>

                <div className='col-lg-3'>
                    <h4>Lancome La Vie Est Belle</h4>
                    <div className='star_icon'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <BsStarHalf />
                        <FiStar />
                        <span className="text-dark ps-3">Review (16)</span>
                    </div>
                    <h4>$299.00</h4>
                    <p>Quality</p>
                    <img src="assests/rect.png" alt="" width='60px' height='30px' /><br />
                    <img src="assests/drive1.png" alt="" width='60px' height='30px' /><span className="ps-3">Free Shipping (standard)</span>
                    <p>Arrvies: Oct 25-29</p>
                    <img src="assests/drive2.png" alt="" width='60px' height='30px' /><span className="ps-3">Before october 25 -$5.99 <a href="">select express</a></span>
                    <br />
                    <button className='btn btn-primary mt-2'>Add to cart</button>
                    <button className='btn btn-primary active ms-3 mt-2'>Buy Now</button>


                </div>
                <div className='col-lg-3'>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>More Sellers</ListGroupItem>
                            <ListGroupItem>
                                <div className='seller_two text-align-left'>
                                    
                                <h4>$301.00</h4>
                                <a href="">Seller Two</a><span className='ps-3'><FaShoppingCart className='text-primary'/></span>
                                <div className='star_icon'>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <FiStar /> 
                             
                                </div>
                            
                                <p>Free shopping (standard)</p>
                                </div>

                                <div className='seller_three'>
                                <h4>$298.00</h4>
                                <a href="">Seller three</a>   <span><FaShoppingCart className='text-primary'/></span>
                                <div className='star_icon'>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <FiStar /> 
                             
                                </div>
                             
                                <p>shopping $3.99(Express)</p>
                                </div>
                                
                            </ListGroupItem>
                            <ListGroupItem><a href="">Other offers staring at $298.00</a></ListGroupItem>
                        </ListGroup>

                    </Card>
                </div>


            </div>
           
        </div>
    
    )
}

export default ProductDetails