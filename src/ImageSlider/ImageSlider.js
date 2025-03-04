import React, { useContext } from 'react';
import { Images } from '../Main/Main';  // Correct import

export default function ImageSlider() {
    const images = useContext(Images) || []; // Ensuring images is always an array

    return (
        <div className='row'>
            <div className='col-md-12'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <button key={index} type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide-to={index} className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}>
                            </button>
                        ))}
                    </div>

                    <div className="carousel-inner">
                        {images && images.map((item, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={item.img} className="d-block w-100" alt={item.text} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 style={{ fontSize: "3.25rem" }}>{item.text}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


