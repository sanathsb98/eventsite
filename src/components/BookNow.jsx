import React from 'react';
import '../styles/BookNow.css'

function BookNow() {
  return (
        <div className='booknow-container'>
            <div className='booknow-left-content'>
                <div className='booknow-date-venue'>
                    <div className='booknow-date'>
                        <div className='booknow-date-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" fill="#D9D9D9" />
                                <path d="M7 4V2.5" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M17 4V2.5" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2.5 9H21.5" stroke="#1D2939" stroke-linecap="round" />
                                <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#1D2939" />
                                <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#1D2939" />
                                <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#1D2939" />
                                <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#1D2939" />
                                <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#1D2939" />
                                <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#1D2939" />
                            </svg>
                        </div>
                        <div className='booknow-date-text'>Saturday 11th of November 2023</div>
                    </div>
                  <div className='booknow-venue'>
                      <div className='booknow-venue-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" fill="#D9D9D9" />
                          <circle cx="12" cy="10" r="3" stroke="#1D2939" stroke-width="1.5" />
                      </svg></div>
                      <div className='booknow-venue-text'>Greenfield Stadium, Texas</div>
                      <div className='booknow-venue-map'>View Map</div>
                  </div>
              </div>

              <div className='booknow-pricing-section'>
                  <div className='booknow-pricing-logo'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.0137 17L14.0079 19.0029C14.0065 19.4731 14.0058 19.7081 13.8595 19.8541C13.7131 20 13.478 20 13.0079 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4H13.5052C13.7814 4 14.0056 4.22298 14.0064 4.49855L14.0137 7C14.0137 7.55228 14.4625 8 15.0162 8C15.5698 8 16.0187 7.55228 16.0187 7V4.51618C16.0187 4.23718 16.2482 4.01169 16.5278 4.0189C18.6952 4.0748 19.9727 4.29604 20.8504 5.17157C21.6591 5.97823 21.911 7.12339 21.9894 8.98947C22.005 9.35954 22.0128 9.54458 21.9437 9.66803C21.8745 9.79147 21.5987 9.94554 21.0469 10.2537C20.4341 10.5959 20.0199 11.2497 20.0199 12C20.0199 12.7503 20.4341 13.4041 21.0469 13.7463C21.5987 14.0545 21.8745 14.2085 21.9437 14.332C22.0128 14.4554 22.005 14.6405 21.9894 15.0105C21.911 16.8766 21.6591 18.0218 20.8504 18.8284C20.0433 19.6336 18.8981 19.8854 17.0336 19.9642C16.5623 19.9841 16.3267 19.994 16.1727 19.8464C16.0187 19.6988 16.0187 19.458 16.0187 18.9765V17C16.0187 16.4477 15.5698 16 15.0162 16C14.4625 16 14.0137 16.4477 14.0137 17Z" fill="#D9D9D9" />
                      <path d="M14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11V13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13V11Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg></div>
                  <div className='booknow-pricing-price'><span className='booknow-price-highlight'>€ 25</span> onwards</div>
                  <div className='booknow-pricing-status'>Filling fast</div>
              </div>
          </div>


            <div className='booknow-right-content'>
                <div className='booknow-btn'>Book now</div>
                <div className='booknow-support-button'>
                    <div className='booknow-support-icon'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M8.1123 6.60164L7.67051 7.2077L8.1123 6.60164ZM9.5 2.32962L8.99245 2.88179C9.27941 3.14556 9.72059 3.14556 10.0075 2.88179L9.5 2.32962ZM10.8877 6.60165L11.3295 7.20771H11.3295L10.8877 6.60165ZM9.5 7.25698L9.5 8.00698H9.5L9.5 7.25698ZM8.5541 5.99558C8.04186 5.62217 7.50252 5.17295 7.0986 4.70473C6.67664 4.21561 6.5 3.818 6.5 3.53607H5C5 4.36797 5.47058 5.11393 5.96282 5.68453C6.47309 6.27603 7.11489 6.80268 7.67051 7.2077L8.5541 5.99558ZM6.5 3.53607C6.5 2.81208 6.84814 2.43806 7.23143 2.30907C7.64128 2.17114 8.30111 2.24632 8.99245 2.88179L10.0075 1.77744C9.01145 0.861849 7.79628 0.536316 6.753 0.887413C5.68314 1.24745 5 2.25219 5 3.53607H6.5ZM11.3295 7.20771C11.8851 6.80269 12.5269 6.27604 13.0372 5.68454C13.5294 5.11393 14 4.36796 14 3.53606H12.5C12.5 3.81801 12.3234 4.21562 11.9014 4.70474C11.4975 5.17296 10.9581 5.62218 10.4459 5.99558L11.3295 7.20771ZM14 3.53606C14 2.25218 13.3169 1.24745 12.247 0.887411C11.2037 0.536317 9.98855 0.861849 8.99245 1.77744L10.0075 2.88179C10.6989 2.24632 11.3587 2.17114 11.7686 2.30907C12.1519 2.43805 12.5 2.81208 12.5 3.53606H14ZM7.67051 7.2077C8.22583 7.61251 8.7247 8.00698 9.5 8.00698L9.5 6.50698C9.29792 6.50698 9.19746 6.46456 8.5541 5.99558L7.67051 7.2077ZM10.4459 5.99558C9.80255 6.46456 9.70209 6.50699 9.5 6.50698L9.5 8.00698C10.2753 8.00699 10.7742 7.61252 11.3295 7.20771L10.4459 5.99558Z" fill="#1C274C" />
                        <path d="M4.25 15.2913H5.94495C6.7031 15.2913 7.4694 15.3703 8.20725 15.5223C9.51243 15.7912 10.8866 15.8238 12.2052 15.6103C12.8553 15.5051 13.4945 15.3442 14.0731 15.0649C14.5954 14.8128 15.2352 14.4575 15.6649 14.0594C16.0941 13.662 16.541 13.0115 16.8582 12.5031C17.1302 12.0671 16.9986 11.5321 16.5684 11.2073C16.0905 10.8464 15.3813 10.8465 14.9035 11.2074L13.5481 12.2313C13.0228 12.6281 12.449 12.9934 11.7654 13.1024C11.6833 13.1155 11.5971 13.1275 11.5073 13.1379M11.5073 13.1379C11.4802 13.141 11.4528 13.144 11.4251 13.1469M11.5073 13.1379C11.6166 13.1145 11.7252 13.047 11.8271 12.9581C12.3095 12.5371 12.34 11.8275 11.9214 11.3573C11.8243 11.2483 11.7107 11.1573 11.5843 11.0819C9.4863 9.83058 6.22206 10.7837 4.25 12.1822M11.5073 13.1379C11.4799 13.1438 11.4525 13.1469 11.4251 13.1469M11.4251 13.1469C11.0326 13.1872 10.5734 13.1976 10.0638 13.1495" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <rect x="2" y="10.5" width="2.25" height="6" rx="1.125" stroke="#1C274C" stroke-width="1.5" />
                    </svg></div>
                    <div className='booknow-support-text'>Support</div>
                </div>
            </div>
        </div>
    )
}

export default BookNow