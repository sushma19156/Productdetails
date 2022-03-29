import React from 'react'
import Customer from './Customer'
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';




function Reviews() {
  return (
    <div className='mt-5'>
<h4>Reviews and Ratings</h4>
<div className='container-fluid'>
  <div className='row'>
    <div className='col-6'>

      <span className='me-3'>Summary</span>
      <span>3.5</span><AiFillStar className='text-primary me-3'/> 
<span>reviews(16)</span>
<p >5 star <AiFillStar className='text-primary'/><AiFillStar className='text-primary'/><AiFillStar className='text-primary'/></p>                     
<p>4 star <AiFillStar className='text-primary'/><AiFillStar className='text-primary'/><AiFillStar className='text-primary'/></p>
<p>3 star <AiFillStar className='text-primary'/><AiFillStar className='text-primary'/><BsStarHalf className='text-primary'/></p>
<p>2 star <AiFillStar className='text-primary'/><AiFillStar className='text-primary'/><BsStarHalf className='text-primary'/></p>
<p>1 star <AiFillStar className='text-primary'/><FiStar className='text-primary'/> </p>


    </div>



<div className='col-lg-6'>
      <span>Question & Answer</span>
     <p className='para'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing?</p>
     <p className='para'>Ans: consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas. 
       
       </p>
       <p className='para'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing?</p>
     <p className='para'>Ans: consectetur adipisicing elit. Soluta quaerat optio odio iste voluptas. 
  
       </p>
<button className='btn btn-primary'>Show More</button>

      
    </div>
    </div>
    </div>
<Customer/>
    </div>
  )
}

export default Reviews