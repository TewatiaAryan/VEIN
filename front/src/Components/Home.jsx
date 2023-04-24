import React from 'react';
import './Homeweb.css';
import one from '././india-gov.png';
import two from './logo_nhp_back.png';
import three from './MOHF.png';
import four from './logo-nrhm.png';
import five from './ONE_NATION_2500_600.webp';
import six from './updated_NewYear2022.webp';
import seven from './donationFact.jpg';
export default function Home() {
  return (
    <>
      <section>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="slide-pic" src={six} alt="PM" />
            </div>
            <div className="carousel-item">
              <img className="slide-pic" src={five} alt="lady is here" />
            </div>
          </div>
          <a className="carousel-control-prev caro-ka-a" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next caro-ka-a" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
      <section id="counter">
        <div className="back">
          <br /><br />
          <div className="counter-row row">
            <div className="counter-container">
              <div className="count-box">
                <span id="registeredDonors">1544895</span>
              </div>
              <div>
                <h3>Donors Registered
                  <sup title="Donors who volunatry registered for blood donation">&#9432;</sup>
                </h3>
              </div>
            </div>
            <div className="counter-container">
              <div className="count-box">
                <span id="donorsDonated">1398849</span>
              </div>
              <div>
                <h3>Blood Units Collected
                  <sup title="Blood Units collected from 01 Jan 2022 till date">&#9432;</sup>
                </h3>
              </div>
            </div>
          </div>
          <br /><br /><br />
        </div>
        <br /><br />
      </section>
      <section>
        <div className="row" style={{ paddingTop: '4px' }}>
          <div className="row text-center">
            <div className="col-md-12 typeHeading">
              {/* <h1>Learn About Donation</h1> */}
            </div>
            <br /><br />
            <div className="hlo">
              <div className="wow col-sm-6 rotateInDownRight text-center" data-wow-delay="0ms" data-wow-duration="1000ms">
                <div className="one">
                  <img id="donation-pic" src={seven} alt="One Donation Can save upto three lives"
                    height="300px" />
                </div>
                <blockquote>
                  <p style={{ fontFamily: 'oswald', fontSize: '25px', fontWeight: 'bold' }} >
                    After donating blood, the body works to replenish the blood
                    loss. This stimulates the production of new blood cells and in
                    turn, helps in maintaining good health.
                  </p>
                </blockquote>
                <button onClick="window.location='/BLDAHIMS/bloodbank/nearbyBBRed.cnt'"
                  className="btn btn-danger svcNearBy hvr-sweep-to-right">
                  <i className="fa fa-tint"></i>&nbsp; Donate Now
                </button>
                <br /><br />
              </div>
              <div className="col-sm-6 donors" style={{ fontSize: '1.5rem' }}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <th colSpan="3" style={{ color: 'white', backgroundColor: 'red' }}>
                        Compatible Blood Type Donors
                      </th>
                    </tr>
                    <tr>
                      <td><b>Blood Type</b></td>
                      <td><b>Donate Blood To</b></td>
                      <td><b>Receive Blood From</b></td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>A+</b></span>
                      </td>
                      <td>A+ AB+</td>
                      <td>A+ A- O+ O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>O+</b></span>
                      </td>
                      <td>O+ A+ B+ AB+</td>
                      <td>O+ O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>B+</b></span>
                      </td>
                      <td>B+ AB+</td>
                      <td>B+ B- O+ O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>AB+</b></span>
                      </td>
                      <td>AB+</td>
                      <td>Everyone</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>A-</b></span>
                      </td>
                      <td>A+ A- AB+ AB-</td>
                      <td>A- O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>O-</b></span>
                      </td>
                      <td>Everyone</td>
                      <td>O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>B-</b></span>
                      </td>
                      <td>B+ B- AB+ AB-</td>
                      <td>B- O-</td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ color: '#961e1b' }}><b>AB-</b></span>
                      </td>
                      <td>AB+ AB-</td>
                      <td>AB- A- B- O-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='row donationTypes' style={{ fontSize: '1.5rem' }}>
          <div className='col-md-12  donationTypeInfoWindow text-center'>
            <br />
            <br />
            <header className="typeHeading">
              <h1>TYPES OF DONATION</h1>
            </header>
            <br />
            <div className="content">
              <p style={{ textAlign: 'center' }}>The human body contains five liters of blood, which is made of several useful
                components i.e. <strong>Whole blood</strong>, <strong>Platelet</strong>, and <strong>Plasma</strong>.</p>
              <p style={{ textAlign: 'center' }}>Each type of component has several medical uses and can be used for different
                medical treatments. your blood donation determines the best donation for you to make.</p>
              <p style={{ textAlign: 'center' }}>For <strong>plasma</strong> and <strong>platelet</strong> donation you must
                have donated whole blood in past two years.</p>
            </div>
            <br />
            <ul className="nav nav-tabs" style={{ padding: '1% 42%' }}>
              <li style={{ color: 'red', fontSize: '35px', fontWeight: 'bold' }}>Whole Blood</li>
            </ul>
            <br />
            <div className='row tabInfo' id='wholeBlood'>
              <div className='col-md-4 '>
                <h3>What is it?</h3>
                <p>
                  Blood Collected straight from the donor after its donation usually separated into red blood cells,
                  platelets, and plasma.</p>
                <h3>Who can donate?</h3>
                <p>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
              </div>
              <div className='col-md-4 infoContent'>
                <h3>User For?</h3>
                <p>
                  Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases,
                  haemophilia, anemia, heart disease.</p>
                <h3>Lasts For?</h3>
                <p>Red cells can be stored for 42 days.</p>
              </div>
              <div className='col-md-4 '>
                <h3>How long does it take?</h3>
                <p>
                  15 minutes to donate.</p>
                <h3>How often can I donate?</h3>
                <p>Every 12 weeks</p>
              </div>
            </div>
            <div className='row tabInfo' style={{ display: 'none' }} id='plasma'>
              <div className='col-md-4 '>
                <h3>What is it?</h3>
                <p>
                  The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains
                  special nutrients which can be used to create 18 different type of medical products to treat many
                  different medical conditions.</p>
                <h3>Who can donate?</h3>
                <p>You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful
                  whole blood donation in last two years. </p>
              </div>
              <div className='col-md-4 infoContent'>
                <h3>User For?</h3>
                <p>
                  Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and
                  nerve conditions, haemophilia, immunisations.</p>
                <h3>Lasts For?</h3>
                <p>Plasma can last up to one year when frozen.</p>
              </div>
              <div className='col-md-4 '>
                <h3>How does it work?</h3>
                <p>
                  We collect your blood, keep plasma and return rest to you by apheresis donation.</p>
                <h3>How long does it take?</h3>
                <p>
                  15 minutes to donate.</p>
                <h3>How often can I donate?</h3>
                <p>Every 2-3 weeks.</p>
              </div>
            </div>
            <div className='row tabInfo' style={{ display: 'none' }} id='platelet'>
              <div className='col-md-4 '>
                <h3>What is it?</h3>
                <p>
                  The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand,
                  Vital for people with low platelet count, like malaria and cancer patients.</p>
                <h3>Who can donate?</h3>
                <p>You need to be 18-70 years old (men), weigh 50kg or more and have given a successful plasma donation in
                  the past 12 months</p>
              </div>
              <div className='col-md-4 infoContent'>
                <h3>User For?</h3>
                <p>
                  Cancer, blood diseases, haemophilia, anaemia, heart disease, stomach disease, kidney disease, childbirth,
                  operations, blood loss, trauma, burns.</p>
                <h3>Lasts For?</h3>
                <p>Just five days..</p>
              </div>
              <div className='col-md-4 '>
                <h3>How does it work?</h3>
                <p>
                  We collect your blood, keep platelet and return rest to you by apheresis donation.</p>
                <h3>How long does it take?</h3>
                <p>
                  45 minutes to donate.</p>
                <h3>How often can I donate?</h3>
                <p>Every 2 weeks</p>
              </div>
            </div>
            <br /><br />
            {/* <button type='button' onClick="window.location='/BLDAHIMS/bloodbank/nearbyBBRed.cnt'" style={{borderRadius:'0px'}}
              className='btn-lg btn btn-danger svcNearBy hvr-sweep-to-right '>Find Nearest Blood
              Bank To Donate</button> */}
            <br /><br />
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-lower">
          <div className="auto-container sitemap">
            <div className="row clearfix">
              <div className='col-md-3 col-sm-12 col-xs-12  wow bounceInLeft'>
                <h3 className='text-left'>Looking for Blood</h3>
                <ul style={{ lineHeight: '165%', color: 'white' }}>
                  <li><a href='#'>Blood Availability</a></li>
                  <li><a href='#'>Blood Bank Directory</a></li>
                  <li><a href='#'>Thalassemia Request</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 col-xs-12  wow bounceInLeft'>
                <h3 className='text-left'>Want to Donate Blood</h3>
                <ul style={{ lineHeight: '165%' }}>
                  <li><a href='#'>Blood Donation Camps</a></li>
                  <li><a href='#'>Donor Login</a></li>
                  <li style={{ display: 'none' }}><a href="#">Voluntary Donor Group</a></li>
                  <li><a href='#'>About Blood Donation</a></li>
                  <li><a href="#" title="Register VBD Camp" >Register VBD Camp</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 col-xs-12  wow bounceInLeft'>
                <h3 className='text-left'>Blood Bank Login</h3>
                <ul className="foot-ul" style={{ lineHeight: '165%' }}>
                  <li><a href='/eRaktKosh/hissso/loginLogin'>eRaktkosh Login</a></li>
                  <li><a href='#'>Add your Blood Bank</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 col-xs-12  wow bounceInLeft'>
                <h3 className='text-left'>About Us</h3>
                <ul style={{ lineHeight: '165%' }}>
                  <li><a href='#'>About eRaktkosh</a></li>
                  <li><a title="All Notifications" href="#">Notifications</a></li>
                  <li><a title="Eraktkosh FAQs" href="#">Eraktkosh FAQs</a></li>
                  <li><a href='#'>Gallery</a></li>
                  <li><a href="#" title="Video gallery">Video Gallery</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#" title="Mobile Apps">Mobile Apps</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="last-fluid">
            <div className="logos-box">
              <div className="row clearfix logos">
                <div className="col-md-3 col-sm-3 col-xs-12 footer-logo wow bounceInLeft text-center" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className='col-md-12 col-xs-12 '> <a rel="noopener" href="http://mohfw.nic.in/" > <img
                    className="mohf" src={three} style={{ float: 'left' }}
                    alt="Ministry of health and family welfare" /></a></div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 footer-logo wow bounceInRight text-center" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className='col-md-12 col-xs-12'> <a href='https://india.gov.in/' > <img
                    src={one} alt="National Portal of India" /></a></div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 footer-logo wow bounceInBottom text-center" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className='col-md-12 col-xs-12'>
                    <a href='https://web.umang.gov.in/' >
                      <img style={{ width: '60px', height: '80px' }} src="images\icons\umang.jpg"
                        alt="National Health Portal" /></a>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 footer-logo wow bounceInBottom text-center" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className='col-md-12 col-xs-12'>
                    <a href='https://www.nhp.gov.in/'>
                      <img src={two} alt="National Health Portal" /></a>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 footer-logo wow bounceInRight text-center" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <div className='col-md-12 col-xs-12'><a href='http://nhm.gov.in'></a> <img
                    src={four} alt="National Health Mission" /></div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 footer-logo text-center">
                <noscript>

                  <div className="statcounter"><a title="hits counter" href="http://statcounter.com/" ><img
                    className="statcounter" src="http://c.statcounter.com/10830880/0/81667bbc/1/" alt="hits counter" /></a>
                  </div>
                </noscript>
                <span>Visitor No.</span><img style={{ padding: '0px' }} src="http://c.statcounter.com/10830880/0/81667bbc/0/"
                  alt="web statistics" />
              </div>
              <br /><br /><br />
              <div className="col-md-12 col-sm-12 col-xs-12 footer-logo text-center ">
                <div>
                  <span>This Site is Created by our Team Members Aryan Gupta , Aryan Tewatia , Arpit Tyagi and
                    Sandeep</span>
                  <br />
                  <span><a id="mylink" href="/BLDAHIMS/bloodbank/termsAndConditions.cnt">Terms & Conditions</a></span> |
                  <span><a id="mylink" href="/BLDAHIMS/bloodbank/privacyPolicy.cnt">Privacy Policy</a></span> | <span><a
                    id="mylink" href="/BLDAHIMS/bloodbank/accessibilityStmt.cnt">Accessibility Statement</a></span> |
                  <span id='updatetime'></span> | <span><a id="mylink2"
                    href="/BLDAHIMS/bloodbank/eraktkoshSiteMap.cnt">Site
                    Map</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}