import React, { useContext } from 'react'
import History from '../History/History'
import { Historypara } from '../Context/Context'

export default function AboutUs() {
  const history =useContext(Historypara)
  return (
    <div className='col-md-12'>
      <div className='container-flex'>
        <div className='row'>
          <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/image/catering.jpg')`, padding: "0px" }} className='col-md-12 services'>
            <div className='container-flex about-us-container'>
              <div className='row'>
                <div className='col-md-12 about-us'>
                  <p>Ranjeet Singh Khaira  (Born 24th Sep 1992).
                  He is known as the Founder of Sher-E-Punjab restaurant and catering services (LAKESHORE LODHA, PHASE 2)</p>
                  {history.map((i,index)=>{
                    return<History key={index} heading={i.heading} para={i.para} />
                  })}
                  <p style={{marginTop:"3%"}}>Then in 2017, I opened my own small DHABA called as SHER- E- PUNJAB. I worked very hard with my father for that small business. From 2017 to 2025, we turn that small family dhaba into a big family dhaba, in the name of Sher e punjab 
                  We started a family dhaba and a catering service alongside it.
                  </p>
                  <p>And now with god grace we have launched our new restaurant catering service with same name as " SHER - E - PUNJAB " at Lakeshore green, Palava - 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
