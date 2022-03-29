import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import {TiSocialLinkedin  } from 'react-icons/ti';
import { CgTwitter } from 'react-icons/cg';
import {  BsTelephone} from 'react-icons/bs';
import {  FiAtSign} from 'react-icons/fi';
import {  VscLocation} from 'react-icons/vsc';
import {  BiCopyright} from 'react-icons/bi';

function Footer() {
  return (
    <div>
        <div className='row justify-content-center text-align-center bg-dark text-white mt-3'>
        <div className='col-lg-3 mt-3'>
          <b>COMPANY</b>
          <p>About us</p>
          <p>sell with us</p>
          <p>Our Seller</p>
        </div>
        <div className='col-lg-3 mt-3 '>
          <b>CUSTOMER SERVICE</b>
          <p>Help and FAQs </p>
          <p>Exchange and return Policy </p>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
        <div className='col-lg-3 mt-3'>
          <b>OUR STORES</b>
          <p>Stores and Service</p>
          <p>Location and Hours</p>
          <p>Catalogs</p>
        </div>
        <div className='col-lg-3 mt-3'>
          <p>Subscribe Newsletter</p>
        <input type="text" name="" value="" className=''/>
        <button className='btn btn-danger active ms-3'>Submit</button>
        </div>
        <hr/>
        <div className='row  justify-content-around  bg-dark text-white'>
            <div className='col-lg-4 mt-3 '>
            <BsTelephone/> <span>1800 420 0707</span>
            <br/>
            <FiAtSign/> <span>customercare@company.com</span>
            </div>
            <div className=' col-lg-4 location'>
            <VscLocation/> <span>Address line 1</span><br/>
            <span>Address line 2</span>
            </div>
            <div className='col-lg-4'>
            <p>< BsFacebook /> <AiOutlineYoutube/><TiSocialLinkedin/><CgTwitter /> </p>
            </div>
        </div>
      <div className='row  justify-content-center text-align-center bg-dark text-white'>

            <div className='col-lg-12 copy'>
            <p>Copyrights <BiCopyright/> 2021 CompanyLtd. All rights reserved.</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer