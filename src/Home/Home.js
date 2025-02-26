import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='container-flex'>
        <div className='row'>
            <Header />
        </div>
        <div className='row'>
          <Main />
        </div>
        <div className='row'>
          <Footer />
        </div>
    </div>
  )
}
