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
              <img style={{ width: "100%" }} src='/image/text5.jpg' alt='logo' />
            </div>
            <div className='my-navlink-container'>
              <ul className='my-navlink'>
              {navlink.map((li,index)=>{
                return <li key={index}><a href='#'>{li}</a></li>
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
                return <><li key={index}><a href='#'>{li}</a></li><hr /></ >
              })}          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

