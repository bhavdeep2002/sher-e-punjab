import React from 'react'

export default function History({heading,para,className}) {
  return (
    <>   <h3>{heading}</h3>
    <p className={className} dangerouslySetInnerHTML={{ __html: para }}></p></>
  )
}
