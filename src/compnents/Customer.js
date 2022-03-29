import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import SimilarProducts from './SimilarProducts';

function Customer() {
  return (
      <div className=''>
          
    <div className='customer_one'>
        <h4>Customer 1</h4>
        <div className='customer_star_icon'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <BsStarHalf />
                        <FiStar /> <span>2h ago</span>
                    </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta quaerat optio odio iste voluptas. </p>
    </div>
    <div className='customer_two'>
        <h4>Customer 2</h4>
        <div className='customer_star_icon'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <BsStarHalf />
                        <FiStar /> <span>2h ago</span>
                    </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta quaerat optio odio iste voluptas. </p>
    </div>
    <SimilarProducts/>
      </div>
  )
}

export default Customer