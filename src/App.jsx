import { useState } from 'react'
import './index.css'
import car from './assets/images/select-form/car.png'
import van from './assets/images/select-form/van.png'
import minibus from './assets/images/select-form/minibus.png'
import sportscar from './assets/images/select-form/sportscar.png'
import car1 from './assets/images/misc/car.png'
import bg2 from './assets/images/background/2.jpg'
import jeeprenegade from './assets/images/cars/jeep-renegade.jpg'
import bmwm5 from './assets/images/cars/bmw-m5.jpg'
import ferrarienzo from './assets/images/cars/ferrari-enzo.jpg'
import fordraptor from './assets/images/cars/ford-raptor.jpg'
import minicooper from './assets/images/cars/mini-cooper.jpg'
import vwpolo from './assets/images/cars/vw-polo.jpg'
import bg3 from './assets/images/background/3.jpg'
import picblog1 from './assets/images/news/pic-blog-1.jpg'
import picblog2 from './assets/images/news/pic-blog-2.jpg'
import picblog3 from './assets/images/news/pic-blog-3.jpg'
import t1 from './assets/images/testimonial/1.jpg'
import t2 from './assets/images/testimonial/2.jpg'
import t3 from './assets/images/testimonial/3.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div id="wrapper">
  {/* page preloader begin */}
  <div id="de-preloader" />
  {/* page preloader close */}
  {/* header begin */}
  <header className="transparent scroll-light has-topbar">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="de-flex sm-pt10">
            <div className="de-flex-col">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <a href="index.html">
                    <img className="logo-1" src="src/assets/images/logo-light.png" alt />
                    <img className="logo-2" src="src/assets/images/logo.png" alt />
                  </a>
                </div>
                {/* logo close */}
              </div>
            </div>
            <div className="de-flex-col header-col-mid">
              <ul id="mainmenu">
                <li><a className="menu-item" href="#">For Enterprise</a></li>
                <li><a className="menu-item" href="#">Delivery Partners</a>
                </li>
              </ul>
            </div>
            <div className="de-flex-col">
              <div className="menu_side_area">
                <a href="#" className="btn-main">Support</a>
                <span id="menu-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header close */}
  {/* content begin */}
  <div className="no-bottom no-top" id="content">
    <div id="top" />
    <section id="section-hero" aria-label="section" className="jarallax">
      <img src="src/assets/img/bg1.gif" className="jarallax-img" alt />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-light">
            <div className="spacer-double" />
            <div className="spacer-double" />
            <h1 className="mb-2">Looking for a <span className="id-color">vehicle</span>? You're at the right place.</h1>
            <div className="spacer-single" />
          </div>
          <div className="col-lg-12">
            <div className="spacer-single sm-hide" />
            <div className="p-4 rounded-3 shadow-soft" data-bgcolor="#ffffff">
              <form name="contactForm" id="contact_form" method="post">
                <div id="step-1" className="row">
                  <div className="col-lg-6 mb30">
                    <h5>What is your vehicle type?</h5>
                    <div className="de_form de_radio row g-3">
                      <div className="radio-img col-lg-3 col-sm-3 col-6">
                        <input id="radio-1a" name="Car_Type" type="radio" defaultValue="Residential" defaultChecked="checked" />
                        <label htmlFor="radio-1a"><img src={car} alt />Car</label>
                      </div>
                      <div className="radio-img col-lg-3 col-sm-3 col-6">
                        <input id="radio-1b" name="Car_Type" type="radio" defaultValue="Office" />
                        <label htmlFor="radio-1b"><img src={van} alt />Van</label>
                      </div>
                      <div className="radio-img col-lg-3 col-sm-3 col-6">
                        <input id="radio-1c" name="Car_Type" type="radio" defaultValue="Commercial" />
                        <label htmlFor="radio-1c"><img src={minibus} alt />Minibus</label>
                      </div>
                      <div className="radio-img col-lg-3 col-sm-3 col-6">
                        <input id="radio-1d" name="Car_Type" type="radio" defaultValue="Retail" />
                        <label htmlFor="radio-1d"><img src={sportscar} alt />Prestige</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6 mb20">
                        <h5>Pick Up Location</h5>
                        <input type="text" name="PickupLocation" onfocus="geolocate()" placeholder="Enter your pickup location" id="autocomplete" autoComplete="off" className="form-control" />
                        <div className="jls-address-preview jls-address-preview--hidden">
                          <div className="jls-address-preview__header">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb20">
                        <h5>Drop Off Location</h5>
                        <input type="text" name="DropoffLocation" onfocus="geolocate()" placeholder="Enter your dropoff location" id="autocomplete2" autoComplete="off" className="form-control" />
                        <div className="jls-address-preview jls-address-preview--hidden">
                          <div className="jls-address-preview__header">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb20">
                        <h5>Pick Up Date &amp; Time</h5>
                        <div className="date-time-field">
                          <input type="text" id="date-picker" name="Pick Up Date" defaultValue />
                          <select name="Pick Up Time" id="pickup-time">
                            <option selected disabled value="Select time">Time</option>
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb20">
                        <h5>Return Date &amp; Time</h5>
                        <div className="date-time-field">
                          <input type="text" id="date-picker-2" name="Collection Date" defaultValue />
                          <select name="Collection Time" id="collection-time">
                            <option selected disabled value="Select time">Time</option>
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="submit" id="send_message" defaultValue="Find a Vehicle" className="btn-main pull-right" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="spacer-double" />
          <div className="row">
            <div className="col-lg-12 text-light">
              <div className="container-timeline">
                <ul>
                  <li>
                    <h4>Choose a vehicle</h4>
                    <p>Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.</p>
                  </li>
                  <li>
                    <h4>Pick location &amp; date</h4>
                    <p>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                  </li>
                  <li>
                    <h4>Make a booking</h4>
                    <p>Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.</p>
                  </li>
                  <li>
                    <h4>Sit back &amp; relax</h4>
                    <p>Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section aria-label="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 text-center">
            <span className="subtitle">Why Choose Us</span>
            <h2>OUR SERVICES</h2>
            <div className="spacer-20" />
          </div>
          <div className="clearfix" />
          <div className="col-lg-3">
            <div className="box-icon s2 p-small mb20 wow fadeInRight" data-wow-delay=".5s">
              <i className="fa bg-color fa-trophy" />
              <div className="d-inner">
                <h4>Api-Integrations</h4>
                Automate your deliveries by Integrating our APIs
              </div>
            </div>
            <div className="box-icon s2 p-small mb20 wow fadeInL fadeInRight" data-wow-delay=".75s">
              <i className="fa bg-color fa-road" />
              <div className="d-inner">
                <h4>2 Wheelers</h4>
                Instant delivery for up to 20 kgs.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={car1} alt className="img-fluid wow fadeInUp" />
          </div>
          <div className="col-lg-3">
            <div className="box-icon s2 d-invert p-small mb20 wow fadeInL fadeInLeft" data-wow-delay="1s">
              <i className="fa bg-color fa-tag" />
              <div className="d-inner">
                <h4>Trucks</h4>
                Hassle-free goods delivery up to 2500 kgs.
              </div>
            </div>
            <div className="box-icon s2 d-invert p-small mb20 wow fadeInL fadeInLeft" data-wow-delay="1.25s">
              <i className="fa bg-color fa-map-pin" />
              <div className="d-inner">
                <h4>Packers &amp; Movers</h4>
                House shifting hai? Ho Jayega
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-light jarallax">
      <img src={bg2} className="jarallax-img" alt />
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInRight">
            <h2>And thanks to you,  <span className="id-color"> we are growing</span> each &amp; <span className="id-color">every</span> day!</h2>
          </div>
          <div className="col-lg-6 wow fadeInLeft">
            "As we continue to expand and enhance our delivery services, we're excited to share that each package we send out represents not just a transaction, but a step forward in our growth journey. Your trust and support are pivotal in driving our progress and innovation. We are committed to improving our processes, ensuring timely deliveries, and providing exceptional service. With every delivery, we’re not just reaching more locations—we’re growing stronger and better, thanks to valued customers like you. Thank you for being an essential part of our success!"
          </div>
        </div>
        <div className="spacer-double" />
        <div className="row text-center">
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count bg-dark text-light wow fadeInUp">
              <h3 className="timer" data-to={20} data-speed={100}>20+</h3>
              Cities
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count bg-dark text-light wow fadeInUp">
              <h3 className="timer" data-to={500000} data-speed={100000}>5 Lakh+</h3>
              Driver Partners
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count bg-dark text-light wow fadeInUp">
              <h3 className="timer" data-to={100000} data-speed={100000}>1 Crore+</h3>
              Customers
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count bg-dark text-light wow fadeInUp">
              <h3 className="timer" data-to={10000} data-speed={1000000}>10 Crore+</h3>
              Trips
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-cars">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 text-center">
            <span className="subtitle">Enjoy Your Ride</span>
            <h2>Our Vehicle Fleet</h2>
            <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
            <div className="spacer-20" />
          </div>
          <div id="items-carousel" className="owl-carousel wow fadeIn">
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={jeeprenegade} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Car</h4>
                    <div className="d-price">
                      Daily rate from <span>$265</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={bmwm5} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Van</h4>
                    <div className="d-price">
                      Daily rate from <span>$244</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={ferrarienzo} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Truck</h4>
                    <div className="d-price">
                      Daily rate from <span>$167</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={fordraptor} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Mini Van</h4>
                    <div className="d-price">
                      Daily rate from <span>$147</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={minicooper} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Mini Cooper</h4>
                    <div className="d-price">
                      Daily rate from <span>$238</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="de-item mb30">
                <div className="d-img">
                  <img src={vwpolo} className="img-fluid" alt />
                </div>
                <div className="d-info">
                  <div className="d-text">
                    <h4>Bus</h4>
                    <div className="d-price">
                      Daily rate from <span>$106</span>
                      <a className="btn-main" href="car-single.html">Rent Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-light jarallax" aria-label="section">
      <img src={bg3} alt className="jarallax-img" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1>Let's Your Adventure Begin</h1>
            <div className="spacer-20" />
          </div>
          <div className="col-md-3">
            <i className="fa fa-trophy de-icon mb20" />
            <h4>First Class Services</h4>
            <p>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
          </div>
          <div className="col-md-3">
            <i className="fa fa-road de-icon mb20" />
            <h4>24/7 road assistance</h4>
            <p>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
          </div>
          <div className="col-md-3">
            <i className="fa fa-map-pin de-icon mb20" />
            <h4>Free Pick-Up &amp; Drop-Off</h4>
            <p>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="section-news">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 text-center">
            <span className="subtitle">Latest From Us</span>
            <h2>News &amp; Promo</h2>
            <p>Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis.</p>
            <div className="spacer-20" />
          </div>
          <div className="col-lg-4 mb10">
            <div className="bloglist s2 item">
              <div className="post-content">
                <div className="post-image">
                  <div className="date-box">
                    <div className="m">10</div>
                    <div className="d">MAR</div>
                  </div>
                  <img alt src={picblog1} className="lazy" />
                </div>
                <div className="post-text">                         
                  <h4><a href="news-single.html">Enjoy Best Travel Experience<span /></a></h4>
                  <p>Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.</p>
                  <a className="btn-main" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb10">
            <div className="bloglist s2 item">
              <div className="post-content">
                <div className="post-image">
                  <div className="date-box">
                    <div className="m">12</div>
                    <div className="d">MAR</div>
                  </div>
                  <img alt src={picblog2} className="lazy" />
                </div>
                <div className="post-text">                           
                  <h4><a href="news-single.html">The Future of Car Rent<span /></a></h4>
                  <p>As technology continues to advance at a rapid pace, the car rental industry is poised for a transformative shift. The future of car rental promises..</p>
                  <a className="btn-main" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb10">
            <div className="bloglist s2 item">
              <div className="post-content">
                <div className="post-image">
                  <div className="date-box">
                    <div className="m">14</div>
                    <div className="d">MAR</div>
                  </div>
                  <img alt src={picblog3} className="lazy" />
                </div>
                <div className="post-text">                            
                  <h4><a href="news-single.html">Holiday Tips For Backpacker<span /></a></h4>
                  <p>For adventure seekers and budget-conscious travelers, backpacking offers a thrilling and immersive way to explore the world. Whether you're embarking..</p>
                  <a className="btn-main" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-testimonials" className="no-top no-bottom">
      <div className="container-fluid">
        <div className="row g-2 p-2 align-items-center">
          <div className="col-md-4">
            <div className="de-image-text">
              <div className="d-text">
                <div className="d-quote id-color"><i className="fa fa-quote-right" /></div>
                <h4>Excellent Service!</h4>
                <blockquote>
                  “Way better than naaka waalas. Have shifted all my logistics needs to this and I can now safely focus on my business growth. Amazing service!”
                  <span className="by">Vinay</span>
                </blockquote>
              </div> 
              <img src={t1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-md-4">
            <div className="de-image-text">
              <div className="d-text">
                <div className="d-quote id-color"><i className="fa fa-quote-right" /></div>
                <h4>Excellent Service! </h4>
                <blockquote>
                  “Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time, I use this which fulfils all my need. Thanks a lot!”
                  <span className="by">Jovan Reels</span>
                </blockquote>
              </div>
              <img src={t2} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-md-4">
            <div className="de-image-text">
              <div className="d-text">
                <div className="d-quote id-color"><i className="fa fa-quote-right" /></div>
                <h4>Excellent Service! Car Rent Service!</h4>
                <blockquote>
                  “Have had an amazing experience. Had three successful deliveries where it’s a struggle to arrange a tempo service for your desired pickup and drop off. Must try this app!”
                  <span className="by">Kanesha Keyton</span>
                </blockquote>
              </div>
              <img src={t3} className="img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-faq">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <span className="subtitle">Do You Have</span>
            <h2>Any Questions?</h2>
            <div className="spacer-20" />
          </div>
        </div>
        <div className="row g-custom-x">
          <div className="col-md-6 wow fadeInUp">
            <div className="accordion secondary">
              <div className="accordion-section">
                <div className="accordion-section-title" data-tab="#accordion-1">
                  What is App?
                </div>
                <div className="accordion-section-content" id="accordion-1">
                  <p>This is a tech-enabled logistics company offering a variety of intracity and intercity delivery services. Just download and register yourself on the app, choose the service that best fits yours logistic needs and make your booking! With this, you will get a verified driver and vehicle right at your doorstep.</p>
                </div>
                <div className="accordion-section-title" data-tab="#accordion-2">
                  How do I use App?
                </div>
                <div className="accordion-section-content" id="accordion-2">
                  <p>Follow these simple steps to start leveraging hassle-free logistics from this:
                    1.Download the this app 2.Choose the service you want to use 3.Select your pick up and delivery locations 4.Add any extra stops, if applicable 5.Choose the most appropriate vehicle type as per your requirements (2wheeler, three-wheelers or trucks) 6.Select the type of goods you’re sending 7.Choose your payment method 8.Click on “Book Now” and your vehicle is on its way!</p>
                </div>
                <div className="accordion-section-title" data-tab="#accordion-3">
                  How do I book a tempo/mini truck/bike or intercity courier services online from the this app?
                </div>
                <div className="accordion-section-content" id="accordion-3">
                  <p>Get reliable and affordable logistics services from the this app by following these steps:
                    Sign in to the this app
                    Choose the service you want - trucks, 2wheeler or intercity courier services
                    Set your pick up and drop off location
                    Browse through the list of available vehicles (Tata Ace, Pickup 8ft, 2wheeler etc) and pick the one that suits your moving needs
                    Enter a few additional details, apply coupons to get exciting discounts, and confirm your booking.
                    Sit back and relax - our verified driver partners will do the rest.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp">
            <div className="accordion secondary">
              <div className="accordion-section">
                <div className="accordion-section-title" data-tab="#accordion-b-4">
                  Does this provide intercity or interstate service?
                </div>
                <div className="accordion-section-content" id="accordion-b-4">
                  <p>this provides intracity &amp; intercity services. For instant goods delivery within the city, you can choose this 2-wheelers and trucks. We also have intercity outstation services within a 300km radius of the city center. You can also send goods across India with this intercity courier services at economical rates. this also provides intercity and intracity house shifting services.</p>
                </div>
                <div className="accordion-section-title" data-tab="#accordion-b-5">
                  What are the charges for a this truck and this bike delivery service?
                </div>
                <div className="accordion-section-content" id="accordion-b-5">
                  <p>The charges for hiring a this truck or bike are based on the number of kilometres travelled and the type of vehicle chosen and this differs from locality to locality. You can also check the estimate tab on the this website to get an exact idea of your final trip amount. Alternatively, the final trip amount can be determined when making the booking on the app.</p>
                </div>
                <div className="accordion-section-title" data-tab="#accordion-b-6">
                  Does this provide Packers and Movers services?
                </div>
                <div className="accordion-section-content" id="accordion-b-6">
                  <p>Yes, this caters to all kinds of house shifting needs through this Packers &amp; Movers. If you have an immediate moving requirement, we also have the option to hire a mini truck with labour. Intracity shifting services through this Packers and Movers is available in Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Surat, Coimbatore, Indore, Jaipur, Lucknow and Nagpur. Intercity Packers and Movers services can be availed between any of the following cities - Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata and Ahmedabad. If you don’t see your city in the above list, don’t worry; the service will be launching soon in other cities. To enquire about this Packers and Movers or avail the service, call 4410 4410 (add your city code).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-call-to-action" className="bg-color-2 pt60 pb60 text-light">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <span className="subtitle text-white">Call us for further information</span>
              <h2 className="s2">Rentaly customer care is here to help you anytime.</h2>
            </div>
            <div className="col-lg-4 text-lg-center text-sm-center">
              <div className="phone-num-big">
                <i className="fa fa-phone" />
                <span className="pnb-text">
                  Call Us Now
                </span>
                <span className="pnb-num">
                  555 555 5555
                </span>
              </div>
              <a href="#" className="btn-main">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* content close */}
  <a href="#" id="back-to-top" />
  {/* footer begin */}
  <footer className="text-light">
    <div className="container">
      <div className="row g-custom-x">
        <div className="col-lg-3">
          <div className="widget">
            <h5>About Rentaly</h5>
            <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget">
            <h5>Contact Info</h5>
            <address className="s1">
              <span><i className="id-color fa fa-map-marker fa-lg" />08 W 36th St, United Arab Emirates</span>
              <span><i className="id-color fa fa-phone fa-lg" />+976 555 555 5555</span>
              <span><i className="id-color fa fa-envelope-o fa-lg" /><a href="mailto:contact@example.com">contact@example.com</a></span>
              <span><i className="id-color fa fa-file-pdf-o fa-lg" /><a href="#">Download Brochure</a></span>
            </address>
          </div>
        </div>
        <div className="col-lg-3">
          <h5>Quick Links</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="widget">
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Partners</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget">
            <h5>Social Network</h5>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook fa-lg" /></a>
              <a href="#"><i className="fa fa-twitter fa-lg" /></a>
              <a href="#"><i className="fa fa-linkedin fa-lg" /></a>
              <a href="#"><i className="fa fa-pinterest fa-lg" /></a>
              <a href="#"><i className="fa fa-rss fa-lg" /></a>
            </div>
          </div>    
        </div>
      </div>
    </div>
    <div className="subfooter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              <div className="de-flex-col">
                <a href="index.html">
                  Copyright 2024 - Rental
                </a>
              </div>
              <ul className="menu-simple">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer close */}
</div>


  )
}

export default App
