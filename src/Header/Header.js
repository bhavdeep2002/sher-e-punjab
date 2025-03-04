import React, { useContext, useEffect, useState } from 'react';
import { Navlink } from '../Context/Context';

export default function Header() {

  const [vertheight, setVertical] = useState(0)
  const [windowwidth, setWindow] = useState(window.innerWidth)
  const navlink =useContext(Navlink)
  useEffect(() => {
    if (windowwidth > 1024) {
      setVertical(0)
    }
  }, [windowwidth])

  useEffect(() => {
    const handleResize = () => {
      setWindow(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  const collapse = () => {
    // z fold 5
    if(window.innerWidth=== 344 && window.innerHeight===882){
      setVertical((prev) => prev === 20 ? 0 : 20)
    }
    // iphone 5/5s
    else if(window.innerWidth===320 && window.innerHeight===568){
      setVertical((prev) => prev === 30 ? 0 : 30)
    }
    // next hub
    else if(window.innerWidth===1024 && window.innerHeight===600){
      setVertical((prev) => prev === 65 ? 0 : 65)
    }
    // surface duo
    else if(window.innerWidth===540 && window.innerHeight===720){
      setVertical((prev) => prev === 35 ? 0 : 35)
    }
    // tablets
    else if(window.innerWidth/window.innerHeight>=0.694 && window.innerWidth/window.innerHeight<=0.75){
      setVertical((prev) => prev === 30 ? 0 : 30)
    }
    // smart phones
    else{
    setVertical((prev) => prev === 25 ? 0 : 25)
    }
  }
  return (
    <header>
      <nav>
        <div className='col-md-12'>
          <div className='my-navbar'>
            <div className='my-logo'>
              <a href='/'><img style={{ width: "100%" }} src='/image/logotext2.jpg' alt='logo' /></a>
            </div>
            <div className='my-navlink-container'>
              <ul className='my-navlink'>
              {navlink.map((li,index)=>{
                return <><li key={index}><a href={li.link}>{li.text}</a></li><hr /></ >
              })} 
              </ul>
            </div>
            <div onClick={collapse} className='icon'>
              <img style={{ width: "100%" }} src="/image/icon.png" />
            </div>
          </div>
          <div style={{ height: vertheight + "vh" }} className='vertical-my-navlink-container'>
            <ul  className='vertical-my-navlink'>
              {navlink.map((li,index)=>{
                return <><li key={index}>{li.text==='EMAIL US'?<a href={li.link2}>{li.text}</a>:<a href={li.link}>{li.text}</a>}</li><hr /></ >
              })}          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}