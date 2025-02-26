import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='col-md-12 footer-container'>
        <div className='my-footer'>
          <div className='my-logo'>
            <img style={{ width: "100%" }} src='/image/text5.jpg' alt='logo' />
            <div className='social-media'>
            {/*You-tube */}
              <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 12C23 12 23 7.5 22.37 5.62C22.02 4.59 21.26 3.83 20.23 3.47C18.35 2.84 12 2.84 12 2.84C12 2.84 5.65 2.84 3.77 3.47C2.74 3.83 1.98 4.59 1.63 5.62C1 7.5 1 12 1 12C1 12 1 16.5 1.63 18.38C1.98 19.41 2.74 20.17 3.77 20.53C5.65 21.16 12 21.16 12 21.16C12 21.16 18.35 21.16 20.23 20.53C21.26 20.17 22.02 19.41 22.37 18.38C23 16.5 23 12 23 12Z" fill="white" />
                <path d="M10 15L15.19 12L10 9V15Z" fill="black" />
              </svg>

              </a>
            {/*Insta Gram */}
              <a href="https://www.instagram.com/sher_epunjabrestaurant/?igsh=MWV0dTNydnV4YzMweA%3D%3D#"> <svg
                width="24"
                height="24"
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
              </svg></a>

              {/*Face-Book */}
              <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M14.5 6H12.5C11.67 6 11 6.67 11 7.5V10H9V12.5H11V18H13.5V12.5H15.5L16 10H13.5V7.75C13.5 7.34 13.84 7 14.25 7H16V6H14.5Z" fill="black" />
              </svg></a>
            </div>
          </div>
          <ul className='footer-links'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className='bottom-name'>Shop No. 1,2, Ragalia Building, Opp: ICICI Bank, Lakeshore Green, Palava Phase - 2</div>
      </div>
    </footer>
  )
}
