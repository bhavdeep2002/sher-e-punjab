import React from 'react'

export default function PhoneDetail() {
    return (
        <div className='row'>
            <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/image/catering2.jpeg')`, padding: "0px" }} className='col-md-12 services'>
                <div style={{ padding: "2% 14.455% 2% 14.455%" }} className='container-flex'>
                    <div style={{ fontSize: "20px" }} className='row'>
                        <div className='col-md-6 tablet'>
                            <h3>HOW TO AVAIL OUR CATERING SERVICES?</h3>
                            <p className='phone-para'>Our objective is to simplify everything and make things as flexible as possible for you. We are a welcome respite for people looking for Catering Services in Maharashtra and surrounding areas.</p>
                            <p style={{ display: "flex", margin: "-6px", marginBottom: "0px", alignItems: "center",placeItems:"flex-start" }} className='phone-para'>
                                <span className="phone-icon-circle">
                                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.4 11.4 0 003.58.57 1 1 0 011 1v3.59a1 1 0 01-1 1A19.92 19.92 0 012 4a1 1 0 011-1h3.59a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.23 1.11l-2.2 2.2z" />
                                    </svg>
                                </span>
                                <span style={{display:"flex",flexWrap:"wrap",gap:"5px"}}><span>Call us at <b>915295 1313</b></span><span><b> ,915299 1313</b> and state your requirement.</span></span>
                            </p>

                            <ul style={{marginTop:"2%",paddingLeft:"64px",listStyle:"circle"}} className='ordered-list'>
                                <li>House Party Catering.</li>
                                <li>Corporate Catering.</li>
                                <li>Religious Ceremony Catering.</li>
                                <li>Wedding Catering.</li>
                                <li>Institutional Catering.</li>
                            </ul>

                            <ol className='ordered-list'>
                                <li>Tell us your budget and your Preferred Menu for catering services</li>
                                <li>We will align one or many Home Chefs to cater to your individualized needs.</li>
                            </ol>
                            <p className='phone-para'>It is really important to select a good caterer as it is the deciding factor for making an event or an occasion successful. We have been voted among the best caterers for our food quality and customer service. Our catering services is one of our core competencies.</p>
                        </div>
                        <div className='col-md-6 tablet'><img style={{ width: "100%" }} src='/image/Catering-Services.jpg' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
