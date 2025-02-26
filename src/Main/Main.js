import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import Services from '../Services/Services'
import PhoneDetail from '../PhoneDetail/PhoneDetail'

export default function Main() {
    return (
        <main style={{backgroundColor:"#eae8ed"}}>
            <div className='col-md-12'>
                <div className='container-flex'>
                    <ImageSlider />
                    <Services />
                    <PhoneDetail />
                </div>
            </div>
        </main>
    )
}
