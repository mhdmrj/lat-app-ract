//import React, { Component } from 'react'

//class Produk extends Component {
  //constructor(props) {
    //super(props)

    //this.state = {

    //}
  //}
  //render() {
    //return (
      //<div>
        
      //</div>
    //)
  //}
//}

//export default Produk;

//-----------------------------------------------------------------------------------------//

import React, { Component } from 'react'
import './css/Produk.css';

class Produk extends Component {
  constructor(props) {
    super(props)

    this.state = {
        stock: this.props.stock,
        sub: 'Beli',
        status: 'Tersedia',
        disable: false
    }
  }

  ButtonBeli = () => {
    this.setState({
      stock: this.state.stock -1
    })

    if(this.state.stock===1) {
      this.setState({
        status: 'Habis',
        disabled: true
      })
    }
  }

  render() {
    return (
      <div className='box-stock'>
        <h2>{this.props.nama}</h2>
        <img src="https://images.samsung.com/is/image/samsung/id-galaxy-note-4-n910h-sm-n910hzwexse-000264781-front-black?$330_330" alt="" />
        <p>{this.props.harga}</p>
        <p>{this.state.stock}</p>
        <button className='btn-click' onClick={this.ButtonBeli} disabled = {this.state.disabled}>Beli</button>
        <p>{this.state.status}</p>

      </div>
    )
  }
}

export default Produk;
