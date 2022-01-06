import React from 'react'
import Blog from './Blog';
import Produk from '../Class/Produk';

const Home = () => {
  return <div>
    {
          <div>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2014' stock='10' harga ='Rp 9.000.000'/>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2015' stock='15' harga ='Rp 8.000.000'/>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2016' stock='20' harga ='Rp 7.000.000'/>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2017' stock='30' harga ='Rp 6.000.000'/>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2018' stock='60' harga ='Rp 4.000.000'/>
          <Produk nama ='Samsung Galaxy Note 4 Tahun 2019' stock='100' harga ='Rp 3.000.000'/>
          </div>
          
          }
    
  </div>
  
}

export default Home;
