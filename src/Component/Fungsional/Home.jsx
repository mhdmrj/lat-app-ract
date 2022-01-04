import React from 'react'
import Blog from './Blog';

const Home = () => {
  return <div>
    <Blog tanggal='20 Juni 2021'
          judul = 'Teknologi Blockchain'
          summary = 'Dapatkasn diskon 20 % di Aplikasiku'
    />

    <Blog tanggal='21 Juni 2021'
          judul = 'Teknologi Multimedia'
          summary = 'Dapatkasn diskon 20 % di Aplikasiku'
    />

    <Blog tanggal='22 Juni 2021'
          judul = 'Teknologi Pelayaran'
          summary = 'Dapatkasn diskon 20 % di Aplikasiku'
    />

    <Blog tanggal='23 Juni 2021'
          judul = 'Teknologi Udara'
          summary = 'Dapatkasn diskon 20 % di Aplikasiku'
    />
    
  </div>
  
}

export default Home;
