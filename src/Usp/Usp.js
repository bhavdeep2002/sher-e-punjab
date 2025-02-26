import React from 'react'

export default function Usp({head,para,img}) {
  return (
    <div style={{marginTop:"2%"}} className='row'>
        <div className='usp-container'>
            <img style={{width:"100px"}} src={img} />
            <span className='text'>
                <b>{head}</b>
                <p>{para}</p>
            </span>
        </div>
    </div>
  )
}
