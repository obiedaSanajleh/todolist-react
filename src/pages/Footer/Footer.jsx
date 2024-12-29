import React from 'react'
import './../.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Details from './../Details/Details';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>
<div className="card text-center">
  <div className="card-header">
  I hope you are happy
  </div>
  <div className="card-body">
    <h5 className="card-title">Time is the most valuable resource; once lost, it can never be regained</h5>
    <p className="card-text">"Design by Obieda Senjlawi, © 2024"</p>
    <Link to="/details" className="btn btn-primary">Go To Details </Link>
  </div>

</div>

   </>
  )
}

export default Footer