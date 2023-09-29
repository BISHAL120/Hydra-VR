import React, { useState } from 'react';
import './Header.css'

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <section className='Header-section-1'>
                <div className=' container container-md '>
                    <div className='header'>
                        <div className='icon'>
                            <div className="icon-svg-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="119" viewBox="0 0 114 119" fill="none">
                                    <g clip-path="url(#clip0_1_5)" filter="url(#filter0_d_1_5)">
                                        <path d="M106.772 41.2578C108.108 48.9756 99.9123 46.9199 99.9123 46.9199C96.4822 37.2546 90.9941 38.1563 90.9941 38.1563C95.2907 41.2939 95.6157 43.9626 95.6157 43.9626C84.17 35.8481 68.6082 42.3758 62.6868 45.4413C59.365 40.7529 52.6493 30.2581 55.0323 25.4976C58.1735 19.2585 64.5643 22.8289 64.5643 22.8289C77.4904 22.6125 76.7682 17.9962 76.7682 17.9962C73.3382 20.665 63.2284 17.9962 63.2284 17.9962C72.0022 17.9962 75.7212 14.4259 75.7212 14.4259C69.1859 16.0488 61.8925 9.08833 61.8925 9.08833C59.2206 -4.58009 46.8723 1.22629 46.8723 1.22629C54.599 -0.108098 52.541 8.07853 52.541 8.07853C42.8645 11.5046 43.7672 16.9864 43.7672 16.9864C46.9084 12.6948 49.5803 12.3702 49.5803 12.3702C40.7343 24.8124 49.2553 42.1233 51.7828 46.6314C47.1612 49.8411 36.3293 56.9098 31.455 54.4574C25.2086 51.3198 28.7831 44.9364 28.7831 44.9364C28.6387 32.0253 24.0171 32.7466 24.0171 32.7466C26.6889 36.1727 24.0171 46.2708 24.0171 46.2708C24.0171 37.5071 20.4426 33.7925 20.4426 33.7925C22.0674 40.3201 15.0989 47.6051 15.0989 47.6051C1.41461 50.2739 7.2277 62.6079 7.2277 62.6079C5.89178 54.8901 14.0879 56.9458 14.0879 56.9458C17.518 66.6111 23.0061 65.7095 23.0061 65.7095C18.7095 62.5719 18.3845 59.9031 18.3845 59.9031C30.4801 68.4864 47.1973 60.6965 52.2521 57.9556C55.6461 62.8243 61.9647 72.8502 59.6178 77.5025C56.4766 83.7417 50.0858 80.1713 50.0858 80.1713C37.1597 80.3156 37.8819 84.9318 37.8819 84.9318C41.312 82.263 51.4217 84.9318 51.4217 84.9318C42.6479 84.9318 38.9289 88.5022 38.9289 88.5022C45.4642 86.8793 52.7576 93.8397 52.7576 93.8397C55.4295 107.508 67.7778 101.702 67.7778 101.702C60.0511 103.036 62.1091 94.8495 62.1091 94.8495C71.7856 91.4234 70.8829 85.9416 70.8829 85.9416C67.7417 90.2333 65.0698 90.5579 65.0698 90.5579C73.7353 78.4042 65.7558 61.5621 63.0479 56.6212C67.9583 53.1951 77.8875 47.0642 82.473 49.3723C88.7194 52.5099 85.1449 58.8933 85.1449 58.8933C85.2893 71.8044 89.9109 71.0831 89.9109 71.0831C87.239 67.657 89.9109 57.5589 89.9109 57.5589C89.9109 66.3226 93.4854 70.0372 93.4854 70.0372C91.8606 63.5095 98.8291 56.2245 98.8291 56.2245C112.586 53.5918 106.772 41.2578 106.772 41.2578Z" fill="url(#paint0_linear_1_5)" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_5" x="0" y="0" width="114" height="119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="10" />
                                            <feGaussianBlur stdDeviation="3" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1_5" x1="56.9966" y1="0.00115967" x2="56.9966" y2="102.927" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <clipPath id="clip0_1_5">
                                            <rect width="102" height="103" fill="white" transform="translate(6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon-svg-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="46" viewBox="0 0 76 46" fill="none">
                                    <g clip-path="url(#clip0_1_9)">
                                        <path d="M0 0H2.32086V27.4049H9.25075V0H11.5716V46H9.25075V29.7131H2.32086V46H0V0Z" fill="url(#paint0_linear_1_9)" />
                                        <path d="M28.7329 0L22.9798 29.7131V46H20.6589V29.7131L14.8731 0H16.9978L21.8357 24.7717L26.6408 0H28.7329Z" fill="url(#paint1_linear_1_9)" />
                                        <path d="M38.997 46H32.0344V0H38.9643C41.5467 0 43.5733 2.04806 43.5733 4.58375V41.3837C43.606 43.8869 41.5467 46 38.997 46ZM34.3553 2.30813V43.6919H38.9643C40.2065 43.6919 41.2852 42.6516 41.2852 41.3837V4.58375C41.2852 3.34841 40.2392 2.27562 38.9643 2.27562H34.3553V2.30813Z" fill="url(#paint2_linear_1_9)" />
                                        <path d="M58.806 46H56.4198L52.3338 29.7131H49.5553V46H47.2344V0H54.1643C56.7467 0 58.7733 2.04806 58.7733 4.58375V25.0968C58.7733 27.4049 56.9755 29.3555 54.6873 29.6155L58.806 46ZM49.5553 27.4049H54.1643C55.4064 27.4049 56.4852 26.3647 56.4852 25.0968V4.58375C56.4852 3.34841 55.4391 2.27562 54.1643 2.27562H49.5553V27.4049Z" fill="url(#paint3_linear_1_9)" />
                                        <path d="M65.8013 29.7131L64.1996 46H62.1075L66.7492 0H71.3583L75.9673 46H73.8753L72.2735 29.7131H65.8013ZM69.495 2.30813H68.5798L66.0628 27.4049H72.012L69.495 2.30813Z" fill="url(#paint4_linear_1_9)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1_9" x1="5.78581" y1="0" x2="5.78581" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_9" x1="21.803" y1="0" x2="21.803" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_9" x1="37.8041" y1="0" x2="37.8041" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1_9" x1="53.0202" y1="0" x2="53.0202" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_1_9" x1="69.0374" y1="0" x2="69.0374" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <clipPath id="clip0_1_9">
                                            <rect width="76" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='menu'>
                            <a href="home">HOME</a>
                            <a href="About">ABOUT</a>
                            <a href="service">SERVICE</a>
                            <a href="technologies">TECHNOLOGIES</a>
                            <a href="howto">HOW TO</a>
                        </div>
                        <div className='headrer-btn'>
                            <div className='header-btn-1'>
                                <button>CONTACT US</button>
                            </div>
                            <div className='header-btn-2'>
                                <button>JOIN HYDRA</button>
                            </div>
                        </div>
                    </div>







                    <div className='mobile-header-main'>

                        <div className='header mobile-header'>
                            <div className='icon'>
                                <div className="icon-svg-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="69" height="61" viewBox="0 0 69 61" fill="none">
                                        <path d="M68.1749 24.6688C69.0787 29.1592 63.5338 27.9631 63.5338 27.9631C61.2132 22.3397 57.5003 22.8642 57.5003 22.8642C60.4071 24.6898 60.627 26.2425 60.627 26.2425C52.8836 21.5213 42.3556 25.3193 38.3496 27.1028C36.1023 24.375 31.5589 18.2689 33.1711 15.4992C35.2962 11.8691 39.6198 13.9464 39.6198 13.9464C48.3647 13.8205 47.8761 11.1347 47.8761 11.1347C45.5556 12.6874 38.716 11.1347 38.716 11.1347C44.6518 11.1347 47.1677 9.05737 47.1677 9.05737C42.7465 10.0016 37.8122 5.95188 37.8122 5.95188C36.0046 -2.00071 27.6506 1.37757 27.6506 1.37757C32.878 0.601196 31.4856 5.36435 31.4856 5.36435C24.9392 7.35775 25.5499 10.5472 25.5499 10.5472C27.675 8.05019 29.4826 7.86134 29.4826 7.86134C23.498 15.1005 29.2628 25.1724 30.9727 27.7953C27.846 29.6628 20.5179 33.7754 17.2203 32.3486C12.9944 30.5231 15.4127 26.8091 15.4127 26.8091C15.315 19.2971 12.1883 19.7168 12.1883 19.7168C13.9959 21.7102 12.1883 27.5854 12.1883 27.5854C12.1883 22.4865 9.77006 20.3253 9.77006 20.3253C10.8693 24.1232 6.15487 28.3618 6.15487 28.3618C-3.10295 29.9146 0.829795 37.0908 0.829795 37.0908C-0.0740021 32.6004 5.47092 33.7964 5.47092 33.7964C7.79148 39.4199 11.5044 38.8953 11.5044 38.8953C8.59757 37.0698 8.37773 35.517 8.37773 35.517C16.5608 40.511 27.8704 35.9787 31.2902 34.3839C33.5863 37.2167 37.8611 43.05 36.2733 45.7568C34.1482 49.3868 29.8246 47.3095 29.8246 47.3095C21.0797 47.3935 21.5683 50.0793 21.5683 50.0793C23.8888 48.5265 30.7284 50.0793 30.7284 50.0793C24.7926 50.0793 22.2767 52.1566 22.2767 52.1566C26.6979 51.2124 31.6322 55.2621 31.6322 55.2621C33.4398 63.2147 41.7938 59.8364 41.7938 59.8364C36.5664 60.6128 37.9588 55.8496 37.9588 55.8496C44.5052 53.8562 43.8945 50.6668 43.8945 50.6668C41.7694 53.1638 39.9618 53.3526 39.9618 53.3526C45.8243 46.2814 40.4259 36.4823 38.5939 33.6076C41.9159 31.6142 48.6334 28.0471 51.7356 29.39C55.9614 31.2155 53.5432 34.9295 53.5432 34.9295C53.6409 42.4414 56.7675 42.0218 56.7675 42.0218C54.9599 40.0284 56.7675 34.1531 56.7675 34.1531C56.7675 39.252 59.1858 41.4133 59.1858 41.4133C58.0866 37.6153 62.801 33.3768 62.801 33.3768C72.1077 31.845 68.1749 24.6688 68.1749 24.6688Z" fill="url(#paint0_linear_13_79)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_13_79" x1="34.5" y1="0.664764" x2="34.5" y2="60.5492" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="icon-svg-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="28" viewBox="0 0 46 28" fill="none">
                                        <g clip-path="url(#clip0_13_84)">
                                            <path d="M0 0H1.40473V16.6813H5.59914V0H7.00387V28H5.59914V18.0862H1.40473V28H0V0Z" fill="url(#paint0_linear_13_84)" />
                                            <path d="M17.391 0L13.9089 18.0862V28H12.5041V18.0862L9.0022 0H10.2882L13.2164 15.0784L16.1248 0H17.391Z" fill="url(#paint1_linear_13_84)" />
                                            <path d="M23.6035 28H19.3893V0H23.5837C25.1467 0 26.3734 1.24664 26.3734 2.79011V25.1901C26.3932 26.7138 25.1467 28 23.6035 28ZM20.794 1.40495V26.5951H23.5837C24.3355 26.5951 24.9884 25.9618 24.9884 25.1901V2.79011C24.9884 2.03816 24.3553 1.38516 23.5837 1.38516H20.794V1.40495Z" fill="url(#paint2_linear_13_84)" />
                                            <path d="M35.5931 28H34.1488L31.6757 18.0862H29.994V28H28.5892V0H32.7836C34.3467 0 35.5733 1.24664 35.5733 2.79011V15.2763C35.5733 16.6813 34.4851 17.8686 33.1002 18.0269L35.5931 28ZM29.994 16.6813H32.7836C33.5355 16.6813 34.1884 16.0481 34.1884 15.2763V2.79011C34.1884 2.03816 33.5553 1.38516 32.7836 1.38516H29.994V16.6813Z" fill="url(#paint3_linear_13_84)" />
                                            <path d="M39.8271 18.0862L38.8577 28H37.5914L40.4009 0H43.1906L45.9802 28H44.714L43.7445 18.0862H39.8271ZM42.0628 1.40495H41.5089L39.9854 16.6813H43.5863L42.0628 1.40495Z" fill="url(#paint4_linear_13_84)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_13_84" x1="3.50194" y1="0" x2="3.50194" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_13_84" x1="13.1966" y1="0" x2="13.1966" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_13_84" x1="22.8814" y1="0" x2="22.8814" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_13_84" x1="32.0912" y1="0" x2="32.0912" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_13_84" x1="41.7858" y1="0" x2="41.7858" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C0B7E8" />
                                                <stop offset="1" stop-color="#8176AF" />
                                            </linearGradient>
                                            <clipPath id="clip0_13_84">
                                                <rect width="46" height="28" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className='icon-svg'>
                                <svg onClick={() => setOpen(!open)} width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_83)" />
                                    <rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear_13_83)" />
                                    <rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="url(#paint2_linear_13_83)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_13_83" x1="5.21062" y1="13" x2="33.0001" y2="13" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C0B7E8" />
                                            <stop offset="1" stop-color="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`menu ${open ? 'active' : ''}`}>
                            <a href="home">HOME</a>
                            <a href="About">ABOUT</a>
                            <a href="service">SERVICE</a>
                            <a href="technologies">TECHNOLOGIES</a>
                            <a href="howto">HOW TO</a>
                            <button className='header-btn-1'>CONTACT US</button>
                            <button className='header-btn-2'>JOIN HYDRA</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;