import React from 'react';
import './Hero.css'
import hero_img from '../../Images/hero-img.png'
import hero_img2 from '../../Images/hero-img2.png'
import card_img1 from '../../Images/card-img1.png'
import card_img2 from '../../Images/card-img2.png'
import card_img3 from '../../Images/card-img3.png'
import card_img4 from '../../Images/card-img4.png'
import company1 from '../../Images/company1.png'
import company2 from '../../Images/company2.png'
import company3 from '../../Images/company3.png'
import company4 from '../../Images/company4.png'

const Hero = () => {
    return (
        <div>
            <section className='hero-section-1'>
                <div className=' container container-md'>
                    <div className='content'>
                        <div className='hero-detail'>
                            <div>
                                <h1>
                                    <span className='color-h1'>Dive</span> <span className='white-h1'>Into The Depths
                                        Of</span><span className='color-h1'> Virtual Reality</span>
                                </h1>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    nisl tincidunt eget. Lectus mauris eros in vitae .
                                </p>
                            </div>
                            <div>
                                <button className='build-btn'>BUILD YOUR WORLD</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='hero-img'>
                            <img src={hero_img} alt="" />
                        </div>
                    </div>
                </div>
                <svg className='section1-svg1' xmlns="http://www.w3.org/2000/svg" width="243" height="565" viewBox="0 0 243 565" fill="none">
                    <path d="M1.5 3C104.5 41.1667 293.4 206.8 225 564" stroke="url(#paint0_linear_2_34)" stroke-opacity="0.06" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_2_34" x1="-23.5" y1="-37.5" x2="333" y2="602.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#343045" />
                            <stop offset="0.151042" stop-color="#C0B7E8" />
                            <stop offset="0.760417" stop-color="#8176AF" />
                            <stop offset="0.973958" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='section1-svg2' xmlns="http://www.w3.org/2000/svg" width="736" height="423" viewBox="0 0 736 423" fill="none">
                    <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_2_33)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_2_33" x1="700.5" y1="-3.99998" x2="14.5" y2="361" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#343045" />
                            <stop offset="0.213542" stop-color="#C0B7E8" />
                            <stop offset="0.71875" stop-color="#8176AF" />
                            <stop offset="1" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='section1-svg3' xmlns="http://www.w3.org/2000/svg" width="416" height="675" viewBox="0 0 416 675" fill="none">
                    <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672" stroke="url(#paint0_linear_1_23)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_1_23" x1="365.5" y1="28" x2="110" y2="594" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#343045" />
                            <stop offset="0.276042" stop-color="#8176AF" />
                            <stop offset="0.739583" stop-color="#C0B7E8" />
                            <stop offset="1" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='section1-svg4' xmlns="http://www.w3.org/2000/svg" width="383" height="846" viewBox="0 0 383 846" fill="none">
                    <path d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845" stroke="url(#paint0_linear_1_24)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_1_24" x1="16.5" y1="39.5" x2="363" y2="814" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0104167" stop-color="#343045" />
                            <stop offset="0.229167" stop-color="#C0B7E8" />
                            <stop offset="0.776042" stop-color="#8176AF" />
                            <stop offset="1" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
            </section>
            <section className='hero-section-2'>
                <div className=' container container-md'>
                    <div className='Cpasole'>
                        <div className='capsole'>
                            <div className='capsole-item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 5.83334C46.2758 5.83334 55.4166 14.9742 55.4166 26.25C55.4166 29.6593 54.5834 32.8717 53.1039 35.6983L35 67.0833L17.3154 36.4595C15.575 33.4542 14.5833 29.9693 14.5833 26.25C14.5833 14.9742 23.7242 5.83334 35 5.83334ZM35 11.6667C26.9458 11.6667 20.4166 18.1959 20.4166 26.25C20.4166 28.566 20.9509 30.7882 21.962 32.7943L22.452 33.6893L35 55.4167L47.6366 33.5362C48.9071 31.3423 49.5833 28.8555 49.5833 26.25C49.5833 18.1959 43.0541 11.6667 35 11.6667ZM35 17.5C39.8325 17.5 43.75 21.4175 43.75 26.25C43.75 31.0825 39.8325 35 35 35C30.1675 35 26.25 31.0825 26.25 26.25C26.25 21.4175 30.1675 17.5 35 17.5ZM35 23.3333C33.3891 23.3333 32.0833 24.6392 32.0833 26.25C32.0833 27.8608 33.3891 29.1667 35 29.1667C36.6108 29.1667 37.9166 27.8608 37.9166 26.25C37.9166 24.6392 36.6108 23.3333 35 23.3333Z" fill="#C0B7E8" />
                                    </svg>
                                </div>
                                <div>
                                    <p>Pay Us a Visit</p>
                                    <p>Union St, Seattle, WA 98101, United States</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="117" viewBox="0 0 1 117" fill="none">
                                <path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
                            </svg>
                            <div className='capsole-item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                        <path d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p>Give Us a Call</p>
                                    <p>(110) 1111-1010</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="117" viewBox="0 0 1 117" fill="none">
                                <path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
                            </svg>
                            <div className='capsole-item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                                        <path d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p>Send Us a Message</p>
                                    <p>Contact@HydraVTech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-3'>
                <div className=' container container-md '>
                    <div className='introduction'>
                        <div className='intro-1'>
                            <p>INTRODUCTION</p>
                            <p>TO HYDRA VR <svg width="255" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3" />
                            </svg>
                            </p>
                        </div>
                        <div className='intro-2'>
                            <p>
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-4'>
                <div className=' container container-md'>
                    <div className='about-svg'>
                        <div className='About'>
                            <div className='about-img'>
                                <img src={hero_img2} alt="" />
                            </div>
                            <div className='about-detail'>
                                <p>ABOUT</p>
                                <p>HYDRA VR</p>
                                <p>
                                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                                    n tempor.
                                </p>
                                <button>LET’S GET IN TOUCH</button>
                            </div>
                        </div>
                        <svg className='about-svg-1' xmlns="http://www.w3.org/2000/svg" width="1440" height="262" viewBox="0 0 1440 262" fill="none">
                            <path d="M1442.5 215C1387.5 104.333 1242.8 -83.7999 1104 49.0001C930.5 215 761.5 331.5 554.5 203.5C347.5 75.5001 34.5 175.5 -6.5 260" stroke="url(#paint0_linear_3_53)" stroke-opacity="0.13" stroke-width="6" />
                            <defs>
                                <linearGradient id="paint0_linear_3_53" x1="-7" y1="105.5" x2="1443" y2="89.0001" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#211E2E" />
                                    <stop offset="0.3125" stop-color="#C0B7E8" />
                                    <stop offset="0.765625" stop-color="#8176AF" />
                                    <stop offset="0.994792" stop-color="#211E2E" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg className='about-svg-2' xmlns="http://www.w3.org/2000/svg" width="1440" height="219" viewBox="0 0 1440 219" fill="none">
                            <path d="M-4.5 74.5C153.667 21.1667 504.6 -53.5 643 74.5C816 234.5 1071.5 258.5 1186.5 146C1278.5 56 1394.17 70.8333 1440.5 89.5" stroke="url(#paint0_linear_3_54)" stroke-opacity="0.13" stroke-width="6" />
                            <defs>
                                <linearGradient id="paint0_linear_3_54" x1="-5" y1="63" x2="1462" y2="62.9999" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#343045" />
                                    <stop offset="0.224242" stop-color="#C0B7E8" />
                                    <stop offset="0.786458" stop-color="#8176AF" />
                                    <stop offset="0.96875" stop-color="#343045" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>

            <section className='hero-section-5'>
                <div className=' container container-md'>
                    <div className='why-build'>
                        <div className='build1'>
                            <p>WHY BUILD</p>
                            <p>WITH HYDRA? <svg width="255" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3" />
                            </svg></p>
                        </div>
                        <div className='build2'>
                            <p>
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-6'>
                <div className=' container container-md'>
                    <div className='Cards'>
                        <div className='card'>
                            <img src={card_img1} alt="" />
                            <p>SIMULATION</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
                                    <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33" />
                                </svg>
                            </p>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div className='card'>
                            <img src={card_img2} alt="" />
                            <p>EDUCATION</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
                                    <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33" />
                                </svg>
                            </p>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div className='card'>
                            <img src={card_img3} alt="" />
                            <p>SELF-CARE</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
                                    <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33" />
                                </svg>
                            </p>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div className='card'>
                            <img src={card_img4} alt="" />
                            <p>OUTDOOR</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
                                    <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33" />
                                </svg>
                            </p>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </div>
                <svg className='section6-svg1' xmlns="http://www.w3.org/2000/svg" width="2011.8" height="1148" viewBox="0 0 1437 820" fill="none">
                    <path d="M1 231.214C100.569 254.827 304.21 358.641 322.223 584.988C340.235 811.336 684.641 830.311 854.592 811.505C963 791.003 1143.69 689.084 999.192 445.43C854.692 201.775 1234.86 48.9539 1443 3" stroke="url(#paint0_linear_11_14)" stroke-opacity="0.13" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_11_14" x1="722" y1="3" x2="722" y2="817" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0260417" stop-color="#C0B7E8" />
                            <stop offset="0.265625" stop-color="#C0B7E8" />
                            <stop offset="0.71875" stop-color="#8176AF" />
                            <stop offset="1" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>



            </section>
            <section className='hero-section-7'>
                <div className=' container container-md'>
                    <div className='back-img'>
                        <div className='hardware'>
                            <div>
                                <h1>TECHNOLOGIES & HARDWARE</h1>
                                <p>USED BY HYDRA VR.</p>
                                <div className='back-icon'>
                                    <div className=' position-relative'>
                                        <svg className=' position-absolute top-50 start-50 translate-middle' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50" r="50" fill="#0E0E0E" fill-opacity="0.32" />
                                        </svg>
                                        <svg className=' position-absolute top-50 start-50 translate-middle' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_11_114)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_11_114" x1="72" y1="37.5" x2="1.62848e-06" y2="40.5" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#C0B7E8" />
                                                    <stop offset="1" stop-color="#8176AF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg className=' position-absolute top-50 start-50 translate-middle' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5 25L30 37.5L42.5 25" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-8'>
                <div className=' container container-md'>
                    <div className='companys'>
                        <div className='company'>
                            <img src={company1} alt="" />
                        </div>
                        <div className='company'>
                            <img src={company2} alt="" />
                        </div>
                        <div className='company'>
                            <img src={company3} alt="" />
                        </div>
                        <div className='company'>
                            <img src={company4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-9'>
                <div className=' container container-md'>
                    <div className='why-build'>
                        <div className='build1'>
                            <p>HOW WE BUILD</p>
                            <p>WITH HYDRA VR? <svg width="255" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3" />
                            </svg></p>
                        </div>
                        <div className='build2'>
                            <p>
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-10'>
                <div className=' container container-md'>
                    <div className='number-icon'>
                        <div>
                            <div className='number1'>
                                <svg className='number1-svg' xmlns="http://www.w3.org/2000/svg" width="198" height="198" viewBox="0 0 198 198" fill="none">
                                    <circle cx="99" cy="99" r="99" fill="#0D0D0D" fill-opacity="0.32" />
                                </svg>
                                <svg className='number1-svg' xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none">
                                    <circle cx="79.5" cy="79.5" r="79.5" fill="url(#paint0_linear_11_129)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_11_129" x1="146" y1="42.5" x2="-3.89567e-06" y2="92" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className='number1-svg' width="61" height="47" viewBox="0 0 61 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.696 46.768C15.984 46.768 12.6773 45.8507 9.776 44.016C6.87467 42.1813 4.592 39.536 2.928 36.08C1.30667 32.5813 0.496 28.4213 0.496 23.6C0.496 18.7787 1.30667 14.64 2.928 11.184C4.592 7.68533 6.87467 5.01866 9.776 3.184C12.6773 1.34933 15.984 0.431999 19.696 0.431999C23.408 0.431999 26.7147 1.34933 29.616 3.184C32.5173 5.01866 34.7787 7.68533 36.4 11.184C38.064 14.64 38.896 18.7787 38.896 23.6C38.896 28.4213 38.064 32.5813 36.4 36.08C34.7787 39.536 32.5173 42.1813 29.616 44.016C26.7147 45.8507 23.408 46.768 19.696 46.768ZM19.696 38C22.4267 38 24.56 36.8267 26.096 34.48C27.6747 32.1333 28.464 28.5067 28.464 23.6C28.464 18.6933 27.6747 15.0667 26.096 12.72C24.56 10.3733 22.4267 9.2 19.696 9.2C17.008 9.2 14.8747 10.3733 13.296 12.72C11.76 15.0667 10.992 18.6933 10.992 23.6C10.992 28.5067 11.76 32.1333 13.296 34.48C14.8747 36.8267 17.008 38 19.696 38ZM60.8385 1.2V46H50.4705V9.52H41.5105V1.2H60.8385Z" fill="#343045" />
                                </svg>
                            </div>
                            <div className='number-p d-flex align-items-start '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                                    <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> 3D Conception<br /> & Design</p>
                            </div>
                        </div>

                        <div>
                            <div className='number2'>
                                <svg className='number2-svg' xmlns="http://www.w3.org/2000/svg" width="198" height="198" viewBox="0 0 198 198" fill="none">
                                    <circle cx="99" cy="99" r="99" fill="#0D0D0D" fill-opacity="0.32" />
                                </svg>
                                <svg className='number2-svg' xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none">
                                    <circle cx="79.5" cy="79.5" r="79.5" fill="url(#paint0_linear_11_129)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_11_129" x1="146" y1="42.5" x2="-3.89567e-06" y2="92" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className='number2-svg' width="78" height="47" viewBox="0 0 78 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.696 46.768C15.984 46.768 12.6773 45.8507 9.776 44.016C6.87467 42.1813 4.592 39.536 2.928 36.08C1.30667 32.5813 0.496 28.4213 0.496 23.6C0.496 18.7787 1.30667 14.64 2.928 11.184C4.592 7.68533 6.87467 5.01866 9.776 3.184C12.6773 1.34933 15.984 0.431999 19.696 0.431999C23.408 0.431999 26.7147 1.34933 29.616 3.184C32.5173 5.01866 34.7787 7.68533 36.4 11.184C38.064 14.64 38.896 18.7787 38.896 23.6C38.896 28.4213 38.064 32.5813 36.4 36.08C34.7787 39.536 32.5173 42.1813 29.616 44.016C26.7147 45.8507 23.408 46.768 19.696 46.768ZM19.696 38C22.4267 38 24.56 36.8267 26.096 34.48C27.6747 32.1333 28.464 28.5067 28.464 23.6C28.464 18.6933 27.6747 15.0667 26.096 12.72C24.56 10.3733 22.4267 9.2 19.696 9.2C17.008 9.2 14.8747 10.3733 13.296 12.72C11.76 15.0667 10.992 18.6933 10.992 23.6C10.992 28.5067 11.76 32.1333 13.296 34.48C14.8747 36.8267 17.008 38 19.696 38ZM77.0305 37.552V46H43.1745V39.28L60.4545 22.96C62.2892 21.2107 63.5265 19.7173 64.1665 18.48C64.8065 17.2 65.1265 15.9413 65.1265 14.704C65.1265 12.912 64.5078 11.5467 63.2705 10.608C62.0758 9.62666 60.3052 9.136 57.9585 9.136C55.9958 9.136 54.2252 9.52 52.6465 10.288C51.0678 11.0133 49.7452 12.1227 48.6785 13.616L41.1265 8.752C42.8758 6.14933 45.2865 4.12267 48.3585 2.672C51.4305 1.17867 54.9505 0.431999 58.9185 0.431999C62.2465 0.431999 65.1478 0.986665 67.6225 2.096C70.1398 3.16267 72.0812 4.69867 73.4465 6.704C74.8545 8.66667 75.5585 10.992 75.5585 13.68C75.5585 16.112 75.0465 18.3947 74.0225 20.528C72.9985 22.6613 71.0145 25.0933 68.0705 27.824L57.7665 37.552H77.0305Z" fill="#343045" />
                                </svg>
                            </div>
                            <div className='number-p d-flex align-items-start '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                                    <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> Interaction<br /> Design</p>
                            </div>
                        </div>

                        <div>
                            <div className='number3'>
                                <svg className='number3-svg' xmlns="http://www.w3.org/2000/svg" width="198" height="198" viewBox="0 0 198 198" fill="none">
                                    <circle cx="99" cy="99" r="99" fill="#0D0D0D" fill-opacity="0.32" />
                                </svg>
                                <svg className='number3-svg' xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none">
                                    <circle cx="79.5" cy="79.5" r="79.5" fill="url(#paint0_linear_11_129)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_11_129" x1="146" y1="42.5" x2="-3.89567e-06" y2="92" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className='number3-svg' width="77" height="47" viewBox="0 0 77 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.696 46.768C15.984 46.768 12.6773 45.8507 9.776 44.016C6.87467 42.1813 4.592 39.536 2.928 36.08C1.30667 32.5813 0.496 28.4213 0.496 23.6C0.496 18.7787 1.30667 14.64 2.928 11.184C4.592 7.68533 6.87467 5.01866 9.776 3.184C12.6773 1.34933 15.984 0.431999 19.696 0.431999C23.408 0.431999 26.7147 1.34933 29.616 3.184C32.5173 5.01866 34.7787 7.68533 36.4 11.184C38.064 14.64 38.896 18.7787 38.896 23.6C38.896 28.4213 38.064 32.5813 36.4 36.08C34.7787 39.536 32.5173 42.1813 29.616 44.016C26.7147 45.8507 23.408 46.768 19.696 46.768ZM19.696 38C22.4267 38 24.56 36.8267 26.096 34.48C27.6747 32.1333 28.464 28.5067 28.464 23.6C28.464 18.6933 27.6747 15.0667 26.096 12.72C24.56 10.3733 22.4267 9.2 19.696 9.2C17.008 9.2 14.8747 10.3733 13.296 12.72C11.76 15.0667 10.992 18.6933 10.992 23.6C10.992 28.5067 11.76 32.1333 13.296 34.48C14.8747 36.8267 17.008 38 19.696 38ZM64.2365 19.44C68.1618 20.08 71.1698 21.552 73.2605 23.856C75.3512 26.1173 76.3965 28.9333 76.3965 32.304C76.3965 34.9067 75.7138 37.3173 74.3485 39.536C72.9832 41.712 70.8925 43.4613 68.0765 44.784C65.3032 46.1067 61.8898 46.768 57.8365 46.768C54.6792 46.768 51.5645 46.3627 48.4925 45.552C45.4632 44.6987 42.8818 43.504 40.7485 41.968L44.7805 34.032C46.4872 35.312 48.4498 36.3147 50.6685 37.04C52.9298 37.7227 55.2338 38.064 57.5805 38.064C60.1832 38.064 62.2312 37.5733 63.7245 36.592C65.2178 35.568 65.9645 34.1387 65.9645 32.304C65.9645 28.6347 63.1698 26.8 57.5805 26.8H52.8445V19.952L62.0605 9.52H42.9885V1.2H74.3485V7.92L64.2365 19.44Z" fill="#343045" />
                                </svg>
                            </div>
                            <div className='number-p d-flex align-items-start '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                                    <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> VR World<br /> User Testing</p>
                            </div>
                        </div>

                        <div>
                            <div className='number4'>
                                <svg className='number4-svg' xmlns="http://www.w3.org/2000/svg" width="198" height="198" viewBox="0 0 198 198" fill="none">
                                    <circle cx="99" cy="99" r="99" fill="#0D0D0D" fill-opacity="0.32" />
                                </svg>
                                <svg className='number4-svg' xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none">
                                    <circle cx="79.5" cy="79.5" r="79.5" fill="url(#paint0_linear_11_129)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_11_129" x1="146" y1="42.5" x2="-3.89567e-06" y2="92" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className='number4-svg' width="85" height="47" viewBox="0 0 85 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.696 46.768C15.984 46.768 12.6773 45.8507 9.776 44.016C6.87467 42.1813 4.592 39.536 2.928 36.08C1.30667 32.5813 0.496 28.4213 0.496 23.6C0.496 18.7787 1.30667 14.64 2.928 11.184C4.592 7.68533 6.87467 5.01866 9.776 3.184C12.6773 1.34933 15.984 0.431999 19.696 0.431999C23.408 0.431999 26.7147 1.34933 29.616 3.184C32.5173 5.01866 34.7787 7.68533 36.4 11.184C38.064 14.64 38.896 18.7787 38.896 23.6C38.896 28.4213 38.064 32.5813 36.4 36.08C34.7787 39.536 32.5173 42.1813 29.616 44.016C26.7147 45.8507 23.408 46.768 19.696 46.768ZM19.696 38C22.4267 38 24.56 36.8267 26.096 34.48C27.6747 32.1333 28.464 28.5067 28.464 23.6C28.464 18.6933 27.6747 15.0667 26.096 12.72C24.56 10.3733 22.4267 9.2 19.696 9.2C17.008 9.2 14.8747 10.3733 13.296 12.72C11.76 15.0667 10.992 18.6933 10.992 23.6C10.992 28.5067 11.76 32.1333 13.296 34.48C14.8747 36.8267 17.008 38 19.696 38ZM84.9575 36.592H77.6615V46H67.5495V36.592H43.4215V29.616L64.5415 1.2H75.4215L55.8375 28.144H67.8695V19.76H77.6615V28.144H84.9575V36.592Z" fill="#343045" />
                                </svg>
                            </div>
                            <div className='number-p d-flex align-items-start '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                                    <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> Hydra VR<br /> Deploy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className='section10-svg' xmlns="http://www.w3.org/2000/svg" width="1440" height="169" viewBox="0 0 1440 169" fill="none">
                    <path d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768" stroke="url(#paint0_linear_11_136)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_11_136" x1="0.49999" y1="84.9999" x2="1440" y2="84.9998" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#343045" />
                            <stop offset="0.302083" stop-color="#C0B7E8" />
                            <stop offset="0.739583" stop-color="#8176AF" />
                            <stop offset="1" stop-color="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
            </section>
            <section className='hero-section-11'>
                <div className='container container-md'>
                    <div className='From'>
                        <div>
                            <h1>JOIN HYDRA</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
                                <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#343045" />
                                        <stop offset="0.348958" stop-color="#C0B7E8" />
                                        <stop offset="0.6875" stop-color="#8176AF" />
                                        <stop offset="1" stop-color="#343045" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p>Let’s Build Your VR Experience</p>
                        </div>
                        <form className='hydra-form'>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                            <input type="email" name="" id="" placeholder='Email' />
                            <input type="tel" name="" id="" placeholder='Phone Number' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="" id="" cols="30" rows="6" placeholder='Tell Us Something...' />
                        </form>
                        <div className='from-btn'>
                            <button>SEND TO HYDRA</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section-12'>
                <div className=' container container-md'>
                    <div className='Footer'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="197" height="203" viewBox="0 0 197 203" fill="none">
                                <g clip-path="url(#clip0_13_47)" filter="url(#filter0_d_13_47)">
                                    <path d="M188.774 74.9048C191.197 88.9167 176.331 85.1845 176.331 85.1845C170.11 67.6369 160.156 69.2738 160.156 69.2738C167.949 74.9703 168.538 79.8155 168.538 79.8155C147.779 65.0834 119.554 76.9345 108.814 82.5C102.789 73.9881 90.6089 54.9345 94.9311 46.2917C100.628 34.9643 112.22 41.4464 112.22 41.4464C135.664 41.0536 134.354 32.6726 134.354 32.6726C128.133 37.5179 109.797 32.6726 109.797 32.6726C125.71 32.6726 132.455 26.1905 132.455 26.1905C120.602 29.1369 107.374 16.5 107.374 16.5C102.528 -8.31546 80.1311 2.22621 80.1311 2.22621C94.1452 -0.196409 90.4125 14.6667 90.4125 14.6667C72.862 20.8869 74.4992 30.8393 74.4992 30.8393C80.1965 23.0476 85.0426 22.4584 85.0426 22.4584C68.9983 45.0476 84.4532 76.4762 89.0373 84.6607C80.655 90.4881 61.0089 103.321 52.1682 98.8691C40.839 93.1726 47.3222 81.5834 47.3222 81.5834C47.0603 58.1429 38.678 59.4524 38.678 59.4524C43.524 65.6726 38.678 84.006 38.678 84.006C38.678 68.0953 32.1948 61.3512 32.1948 61.3512C35.1417 73.2024 22.5027 86.4286 22.5027 86.4286C-2.31674 91.2738 8.22663 113.667 8.22663 113.667C5.80362 99.6548 20.6691 103.387 20.6691 103.387C26.8903 120.935 36.8443 119.298 36.8443 119.298C29.0514 113.601 28.462 108.756 28.462 108.756C50.4001 124.339 80.7204 110.196 89.8886 105.22C96.0443 114.06 107.505 132.262 103.248 140.708C97.5505 152.036 85.9594 145.554 85.9594 145.554C62.5151 145.815 63.8249 154.196 63.8249 154.196C70.0461 149.351 88.3824 154.196 88.3824 154.196C72.4691 154.196 65.724 160.679 65.724 160.679C77.5771 157.732 90.8054 170.369 90.8054 170.369C95.6514 195.185 118.048 184.643 118.048 184.643C104.034 187.065 107.766 172.202 107.766 172.202C125.317 165.982 123.68 156.03 123.68 156.03C117.982 163.821 113.136 164.411 113.136 164.411C128.853 142.345 114.381 111.768 109.469 102.798C118.375 96.5774 136.384 85.4464 144.701 89.6369C156.03 95.3333 149.547 106.923 149.547 106.923C149.809 130.363 158.191 129.054 158.191 129.054C153.345 122.833 158.191 104.5 158.191 104.5C158.191 120.411 164.674 127.155 164.674 127.155C161.728 115.304 174.366 102.077 174.366 102.077C199.317 97.2976 188.774 74.9048 188.774 74.9048Z" fill="url(#paint0_linear_13_47)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_13_47" x="0" y="0" width="197" height="203" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="10" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_47" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_47" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_13_47" x1="98.4938" y1="0.00195312" x2="98.4938" y2="186.867" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C0B7E8" />
                                        <stop offset="1" stop-color="#8176AF" />
                                    </linearGradient>
                                    <clipPath id="clip0_13_47">
                                        <rect width="185" height="187" fill="white" transform="translate(6)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="197" viewBox="0 0 6 197" fill="none">
                                <path d="M3 196.5V0.5" stroke="url(#paint0_linear_13_75)" stroke-width="6" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_75" x1="2.99526" y1="1.42982" x2="77.322" y2="162.759" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#343045" />
                                        <stop stop-color="#343045" />
                                        <stop offset="0.348958" stop-color="#C0B7E8" />
                                        <stop offset="0.6875" stop-color="#8176AF" />
                                        <stop offset="0.994792" stop-color="#343045" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='footer-ancor'>
                            <a href="about">ABOUT</a>
                            <a href="service">SERVICE</a>
                            <a href="technologies">TECHNOLOGIES</a>
                            <a href="howto">HOW TO</a>
                            <a href="join">JOIN HYDRA</a>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="196" viewBox="0 0 6 196" fill="none">
                                <path d="M3 196V0" stroke="url(#paint0_linear_13_76)" stroke-width="6" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_76" x1="2.99526" y1="0.929815" x2="77.322" y2="162.259" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#343045" />
                                        <stop stop-color="#343045" />
                                        <stop offset="0.348958" stop-color="#C0B7E8" />
                                        <stop offset="0.6875" stop-color="#8176AF" />
                                        <stop offset="0.994792" stop-color="#343045" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='footer-ancor'>
                            <a href="faq">F.A.Q</a>
                            <a href="sitemap">SITEMAP</a>
                            <a href="conditions">CONDITIONS</a>
                            <a href="lisenses">LICENSES</a>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="196" viewBox="0 0 6 196" fill="none">
                                <path d="M3 196V0" stroke="url(#paint0_linear_13_77)" stroke-width="6" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_77" x1="2.99526" y1="0.929815" x2="77.322" y2="162.259" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#343045" />
                                        <stop stop-color="#343045" />
                                        <stop offset="0.348958" stop-color="#C0B7E8" />
                                        <stop offset="0.6875" stop-color="#8176AF" />
                                        <stop offset="0.994792" stop-color="#343045" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='footer-last-part'>
                            <div>
                                <p>SOCIALIZE WITH HYDRA</p>
                            </div>
                            <div className='footer-icon'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="#C0B7E8" />
                                </svg></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z" fill="#C0B7E8" />
                                </svg></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="#C0B7E8" />
                                </svg></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#C0B7E8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z" fill="#C0B7E8" />
                                </svg></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="#C0B7E8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z" fill="#C0B7E8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z" fill="#C0B7E8" />
                                </svg></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8 16C8 11.6 11.6 8 16 8C20.4 8 24 11.6 23.9 15.6C23.9 20 20.3 23.6 15.9 23.6C15.1 23.6 14.3 23.5 13.6 23.3C13.9 22.8 14.2 22.2 14.4 21.6C14.5 21.2 15 19.4 15 19.4C15.3 19.9 16.1 20.4 17 20.4C19.6 20.4 21.3 18 21.3 14.9C21.3 12.5 19.3 10.3 16.2 10.3C12.4 10.3 10.5 13 10.5 15.3C10.5 16.7 11 17.9 12.1 18.4C12.3 18.5 12.4 18.4 12.5 18.2C12.6 18.1 12.7 17.7 12.7 17.6C12.7707 17.4586 12.7414 17.4172 12.6828 17.3343C12.6586 17.3 12.6293 17.2586 12.6 17.2C12.3 16.8 12.1 16.3 12.1 15.6C12.1 13.6 13.6 11.8 16 11.8C18.1 11.8 19.3 13.1 19.3 14.9C19.3 17.3 18.3 19.2 16.8 19.2C15.9 19.2 15.3 18.5 15.5 17.7C15.5835 17.2826 15.7192 16.8477 15.8491 16.4318C16.0303 15.8514 16.2 15.3078 16.2 14.9C16.2 14.2 15.8 13.7 15.1 13.7C14.3 13.7 13.6 14.6 13.6 15.8C13.6 16.6 13.9 17.1 13.9 17.1C13.9 17.1 13.1 20.8 12.9 21.5C12.8 22.1 12.8 22.6999 12.8 23.2999C10 22.0999 8 19.3 8 16Z" fill="#C0B7E8" />
                                </svg></p>
                            </div>
                            <div className='footer-btn'>
                                <button>BUILD YOUR WORLD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=' container container-md'>
                    <div className='copyright'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1269" height="2" viewBox="0 0 1269 2" fill="none">
                                <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_63" x1="1269" y1="1.00238" x2="3.52735e-07" y2="0.980001" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#343045" />
                                        <stop offset="0.348958" stop-color="#C0B7E8" />
                                        <stop offset="0.6875" stop-color="#8176AF" />
                                        <stop offset="1" stop-color="#343045" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;