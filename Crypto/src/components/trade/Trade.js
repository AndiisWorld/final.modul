import React, { Component } from 'react'
import '../trade/Trade.css'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
export default class Trade extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='sorry'>
<h1 className='sorry-about'>This page is still under construction, we apologize!</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
