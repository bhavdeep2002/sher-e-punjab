import React, { createContext, useState } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import Services from '../Services/Services'
import PhoneDetail from '../PhoneDetail/PhoneDetail'


const Images =createContext(null)
export default function Main() {
    const images=[
        { img: "/image/photo1.png", text: "Service and Food at Its Best" },
        { img: "/image/photo2.png", text: "We Make Your Events Memorable" }
    ]
    return (
        <main style={{backgroundColor:"#eae8ed"}}>
            <div className='col-md-12'>
                <div className='container-flex'>
                    <Images.Provider value={images} >
                        <ImageSlider  />
                    </Images.Provider>
                    <Services />
                    <PhoneDetail />
                </div>
            </div>
        </main>
    )
}
export { Images};