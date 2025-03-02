import React from 'react'

export default function ImageSlider() {
    return (
        <div className='row'>
            <div className='col-md-12'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/image/photo1.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:"3.25rem"}}>Service and Food at It's Best</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/image/photo2.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:"3.25rem"}}>We Make Your Events Memorable</h5>
                            </div>
                        </div>
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
    )
}


