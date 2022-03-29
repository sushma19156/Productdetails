import React from 'react'
import Reviews from './Reviews'

function Heighlights() {
    return (
        <div>
            <h4>Heighlights</h4>
            <div className='container-fluid mt-4'>
                <div className='row'>
                    <div className='col-lg-3 h_img'>
                        <img src="assests/hl1.png" alt="" width='60px' height="60px" />
                    </div>
                    <div className='col-lg-3 d-flex justify-content-evenly'>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas.
                        </span>
                    </div>

                    <div className='col-lg-3 '>
                        <img src="assests/hl2.png" alt="" width='60px' height="60px" />
                    </div>
                    <div className='col-lg-3 '>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas.
                        </span>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-lg-3'>
                        <img src="assests/hl3.png" alt="" width='60px' height="60px" />
                    </div>
                    <div className='col-lg-3'>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas.
                        </span>
                    </div>

                    <div className='col-lg-3 '>
                        <img src="assests/hl4.png" alt="" width='60px' height="60px" />
                    </div>
                    <div className='col-lg-3 '>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas. </span>
                    </div>
                </div>
            </div>
            <Reviews />
        </div>


    )
}

export default Heighlights