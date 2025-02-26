import React, { useContext } from 'react'
import { ServiceData1, ServiceData2, USP } from '../Context/Context'
import Usp from '../Usp/Usp'

export default function Services() {
  const list1 = useContext(ServiceData1)
  const list2 = useContext(ServiceData2)
  const usp =useContext(USP)
  return (
    <div style={{ marginTop: "10%" }} className='row'>
      <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/image/catering.jpg')`, padding:"0px"}} className='col-md-12 services'>
        <div style={{padding:"2% 14.455% 2% 14.455%"}} className='container-flex'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>SHER - E - Punjab  CATERING SERVICES VERTICALS.</h2>
              <ul className="service-list">
                {list1.map((li, index) => {
                  return <li key={index}> <svg width="20" height="20" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
                  </svg>{li}</li>
                })}
              </ul>
            </div>

            <div className='col-md-6'>
              <h2>WHY SHOULD YOU CHOOSE US FOR PARTY CATERING SERVICES IN Maharashtra?</h2>
              <ul className="service-list">
                {list2.map((li, index) => {
                  return <li key={index}> <div style={{display:"flex"}}><svg className='tick' width="20" height="20" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
                </svg>{li}</div></li>
                })}
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='usp'>
              OUR KEY USP THAT MAKES US UNIQUE FROM OTHER CATERING SERVICES.
            </div>
          </div>
          {usp.map((i,index)=>{
            return<Usp key={index} head={i.head} para={i.para} img={i.img} />
          })}
        </div>
      </div>
    </div>
  )
}
