import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState()

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setEmail("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Sherepunjabrestaurant616@gmail.com")
    }
    else {
      setEmail("mailto:Sherepunjabrestaurant616@gmail.com")
    }
  }, [email])
  return (
    <footer>
      <div className='col-md-12 footer-container'>
        <div className='my-footer'>
          <div className='my-logo'>
            <a href='/'><img style={{ width: "100%" }} src='/image/logotext2.jpg' alt='logo' /></a>
          </div>
          <ul className='footer-links'>
            <li><a href='/'>HOME</a></li>
            <li> <a href='/about-us'>ABOUT US</a></li>
            <li><a href={email}>EMAIL US</a></li>
            <li> <a href="https://www.instagram.com/shere_punjab_catering/?igsh=MWNkb2JpdDlhbmFhcw%3D%3D#"> <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* White Background */}
              <rect width="24" height="24" rx="6" fill="white" />
              {/* Black Instagram Outline */}
              <path
                d="M16 3H8C5.24 3 3 5.24 3 8V16C3 18.76 5.24 21 8 21H16C18.76 21 21 18.76 21 16V8C21 5.24 18.76 3 16 3ZM19 16C19 17.66 17.66 19 16 19H8C6.34 19 5 17.66 5 16V8C5 6.34 6.34 5 8 5H16C17.66 5 19 6.34 19 8V16Z"
                fill="black"
              />
              {/* Black Inner Circle */}
              <path
                d="M12 8.5C9.51 8.5 7.5 10.51 7.5 13C7.5 15.49 9.51 17.5 12 17.5C14.49 17.5 16.5 15.49 16.5 13C16.5 10.51 14.49 8.5 12 8.5ZM12 15.5C10.62 15.5 9.5 14.38 9.5 13C9.5 11.62 10.62 10.5 12 10.5C13.38 10.5 14.5 11.62 14.5 13C14.5 14.38 13.38 15.5 12 15.5Z"
                fill="black"
              />
              {/* Black Small Camera Circle */}
              <circle cx="16.5" cy="7.5" r="1" fill="black" />
            </svg></a></li>
          </ul>
        </div>
        <div className='address'>
          <div className='location-container'>
            <a href='https://www.google.co.in/maps/place/Sher+-+E+-+Punjab+Restaurant+%26+Catering+Services/@19.1717955,73.1107026,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7950059ce3f6b:0x4946eff80820fe77!8m2!3d19.1717955!4d73.1132775!16s%2Fg%2F11m5d188mh?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'> <svg className='location-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#f5f5f5" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></a>
          </div>
          <div style={{width:"max-content"}}>Shop No. 1,2, Ragalia Building, Opp: ICICI Bank, Lakeshore Green, Palava Phase - 2 Dombivli, Maharashtra 421204</div></div>
      </div>
    </footer>
  )
}
