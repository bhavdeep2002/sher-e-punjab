import React from 'react'

export default function History({heading,para}) {
  return (
    <>   <h3>{heading}</h3>
    <p dangerouslySetInnerHTML={{ __html: para }}></p></>
  )
}
