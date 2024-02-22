import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import carousel1 from '../assets/images/banner-1-1.jpg'
import carousel2 from '../assets/images/banner-1-2.jpg'
import carousel3 from '../assets/images/banner-1-3.jpg'
import con1 from '../assets/images/con-bg.png'
import hr from '../assets/images/HR-02.png'
import visa from '../assets/images/Visa Support.png'
import benefit from '../assets/images/Benefits.png'
import compliant from '../assets/images/Compliant Contracts.png'
import wework from '../assets/images/Coworking WeWork.png'
import equipment from '../assets/images/Equipment.png'
import inter from '../assets/images/Integrations.png'
import oneplatform from '../assets/images/one-platform.png'
import payroll from '../assets/images/payroll-cost.png'
import solution1 from '../assets/images/solution-1-1.png'
import solution2 from '../assets/images/solution-1-2.png'
import solution3 from '../assets/images/solution-1-3.png'
import solution4 from '../assets/images/solution-1-4.png'
import track from '../assets/images/mockup-1-7.png'
import usergroups from '../assets/images/user-groups.png'
import solution from '../assets/images/check.png'
import sysyem from '../assets/images/system.png'
import plus from '../assets/images/plus.png'
import equal from '../assets/images/equal.png'
import map from '../assets/images/mapp.png'
import global1 from '../assets/images/global1.webp'
import global2 from '../assets/images/global2.webp'
import global3 from '../assets/images/Global3.webp'
import fb from '../assets/images/fb.png'
import insta from '../assets/images/insta.png'
import twitter from '../assets/images/twitter.png'
import whatsapp from '../assets/images/whatsapp.png'
import youtube from '../assets/images/youtube.png'

function Home() {
    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });
        }
    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    gotoTop();

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='overflow-hidden'>
            {/* navbar sec */}
            <section className='nav-banner'>
                <nav class="navbar navbar-expand-lg" id=''>
                    <div class="container-fluid">
                        <a class="navbar-brand fs-1 text-danger" href="#"><span className='text-light'>Payroll</span></a>
                        <button class="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-4 mb-lg-0 text-center ">

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('benefits')}>Benefits</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('works')}>How We Works</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('global')}>Global Payroll</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3"> <button className='nav-sign-bt'>Sign Up</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
                <a href="https://axesstechnology.in/contact" target='_blank'>
                    <button className='buy-now-bt'>BuyNow</button></a>
            </div>

            {/* carousel sec */}
            <section id='home'>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade pt-5" data-bs-ride="carousel">
                <div class="carousel-indicators" >
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src={carousel1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>PayRoll <br /> HR Solutions</h1>
                            <p>to take your business further</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={carousel2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>PayRoll <br /> HR Solutions</h1>
                            <p>to take your business further</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>PayRoll <br /> HR Solutions</h1>
                            <p>to take your business further</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </section>
           

            {/* consolidate hr */}
            <section id='about'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-7 d-flex justify-content-center align-items-center py-3'>
                            <div className='' data-aos="fade-up-right"  data-aos-duration="800">
                                <h1 className='con-h1'>Consolidate all things HR with features created for your global team</h1>
                                <p className='con-p pt-3'>See you later 16 different HR tools. We’re simplifying every aspect of managing a global team, from benefits and equity to working visas and equipment. It’s one platform made to get you set up compliantly in just 5 minutes.</p>
                            </div>
                        </div>
                        <div className='col-md-5 pt-3' data-aos="fade-up-left"  data-aos-duration="800">
                            <div>
                                <img src={con1} alt="" className='img-fluid con-img' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'lightgreen' }}>
                                <div className='text-center pt-2'>
                                    <img src={hr} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>Use HR Core free to manage your entire team in one place</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 pt-4'  data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'pink' }}>
                                <div className='text-center pt-2'>
                                    <img src={visa} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Hire or relocate team members with in-house visa support
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800" >
                            <div className='cards' style={{ backgroundColor: 'yellow' }}>
                                <div className='text-center pt-2'>
                                    <img src={compliant} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Create compliant contracts with a single click
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'rgb(81, 154, 244)' }}>
                                <div className='text-center pt-2'>
                                    <img src={equipment} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Send equipment worldwide, without the hassle
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row d-flex justify-content-center '>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'rgb(0, 172, 107)' }}>
                                <div className='text-center pt-2'>
                                    <img src={benefit} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Send equipment worldwide, without the hassle
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'rgb(247, 132, 0)' }}>
                                <div className='text-center pt-2'>
                                    <img src={wework} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Provide your team with co-working access via WeWork
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 pt-4' data-aos="zoom-in" data-aos-duration="800">
                            <div className='cards' style={{ backgroundColor: 'rgb(160, 65, 255)' }}>
                                <div className='text-center pt-2'>
                                    <img src={inter} alt="" className='img-fluid' />
                                </div>
                                <div className='text-center pt-4'>
                                    <h4>
                                        Save time using advanced integrations
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* enjoy sec */}
            <section id='benefits'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-md-6' data-aos="flip-down"  data-aos-duration="1000">
                            <div className='text-center py-2'>
                                <img src={oneplatform} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <h1 className='con-h1'  data-aos="flip-down"  data-aos-duration="500">
                                    Enjoy the benefits of having everything in one single platform
                                </h1>
                                <p className='pt-4 con-p' data-aos="fade-up" data-aos-duration="500">✔️ Save on your tech stack with one HR platform</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Reduce onboarding time to just 5 minutes</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Eliminate errors and duplicate work with one process</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Get a holistic view of employer costs, headcount and churn</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Give your whole team a consistent experience</p>
                                <div className='pt-4' data-aos="fade-up" data-aos-duration="500">
                                    <button className='enjoy-bt'>Get Start For Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-md-6 py-2'>
                            <div>
                                <h1 className='con-h1' data-aos="flip-down"  data-aos-duration="500">
                                    Run compliant payroll
                                    for your global team in minutes
                                </h1>
                                <p className='pt-4 con-p' data-aos="fade-up" data-aos-duration="500">✔️ Bulk pay contractors, EORs, and direct employees effortlessly</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ We handle taxes, provide benefits, payslips, and way more</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Eliminate admin with automated contractor invoicing</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Give your team flexibility with 15+ global payment options</p>
                                <p className='con-p' data-aos="fade-up" data-aos-duration="500">✔️ Local, legal, tax, and accounting expertise just a click away</p>
                                <div className='pt-4' data-aos="fade-up" data-aos-duration="500">
                                    <button className='enjoy-bt'>Get Start For Free</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6' data-aos="flip-down"  data-aos-duration="1000">
                            <div className='text-center'>
                                <img src={payroll} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hr Solution */}
            <section id='works'> 
                <div className='container py-3'>
                    <div className='py-2' data-aos="zoom-in" data-aos-duration="500">
                        <h1 className='con-h1 text-center'>HR solutions that grow  <br /> with
                            your business</h1>
                    </div>
                    <div className='row pt-3'>
                        <div className='col-md-6 py-4' data-aos="zoom-out" data-aos-duration="800">
                            <div className='cardss-hr '>
                                <div className=' row d-flex'>
                                    <div className='col-md-6 '>
                                        <div className='solution-img'>
                                            <img src={solution1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='pt-3'>
                                            <p>Solutions for 1-9 employees</p>
                                            <h5>Cut Through the red Tape with Payonline Solutions for Small Business</h5>
                                            <p>Apply</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 py-4' data-aos="zoom-out" data-aos-duration="800">
                            <div className='cardss-hr '>
                                <div className='row d-flex'>
                                    <div className='col-md-6 '>
                                        <div className='solution-img'>
                                            <img src={solution2} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='pt-3'>
                                            <p>Solutions for 1-9 employees</p>
                                            <h5>Cut Through the red Tape with Payonline Solutions for Small Business</h5>
                                            <p>Apply</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col-md-6 py-4' data-aos="zoom-out" data-aos-duration="800">
                            <div className='cardss-hr '>
                                <div className='row d-flex'>
                                    <div className='col-md-6 solution-img'>
                                        <div>
                                            <img src={solution3} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='pt-3'>
                                            <p>Solutions for 1-9 employees</p>
                                            <h5>Cut Through the red Tape with Payonline Solutions for Small Business</h5>
                                            <p>Apply</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 py-4' data-aos="zoom-out" data-aos-duration="800">
                            <div className='cardss-hr '>
                                <div className='row d-flex'>
                                    <div className='col-md-6 solution-img'>
                                        <div>
                                            <img src={solution4} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='pt-3'>
                                            <p>Solutions for 1-9 employees</p>
                                            <h5>Cut Through the red Tape with Payonline Solutions for Small Business</h5>
                                            <p>Apply</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Track sec */}
            <section>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-md-6 '>
                            <div data-aos="flip-down"  data-aos-duration="500">
                                <h1 className='col-h1'>Track with Time and Labor
                                    Management</h1>
                                <p className='col-p pt-3'>Help employees maintain a stellar work/life balance, while keeping costs in line and protecting your labor budget. Using our Time and Labor Management tools, employees can manage their time and you can manage your labor needs.</p>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-md-6'>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Time & Attendance</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Schedule Exchange</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Time-Off Requests</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Time Clocks</p>
                                </div>
                                <div className='col-md-6'>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Labor Allocation</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Labor Management Reports</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Enhanced ACA</p>
                                    <p data-aos="fade-up" data-aos-duration="500">✔️ Time and Labor Analytics</p>
                                </div>
                            </div>
                            <div className='pt-4' data-aos="fade-up" data-aos-duration="500">
                                <button className='enjoy-bt'>Learn More</button>
                            </div>
                        </div>
                        <div className='col-md-6 py-3' data-aos="flip-down"  data-aos-duration="1000">
                            <div>
                                <img src={track} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='step'>
                <div className='container'>
                    <div className='row py-5 '>
                        <div className='col-md-4 py-3'>

                            <div className='row d-flex justify-content-center align-items-center tablet-card p-3 m-1'>
                                <div className='col-md-4'>
                                    <div className=''>
                                        <img src={usergroups} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h3>Our People</h3>
                                </div>
                                <div className='col-md-4'>
                                    <div className='jaa-1'>
                                        <img src={plus} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 py-3'>

                            <div className='row d-flex justify-content-center align-items-center tablet-card p-3 m-1'>
                                <div className='col-md-4'>
                                    <div className=''>
                                        <img src={sysyem} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h3>Our Technology</h3>
                                </div>
                                <div className='col-md-4'>
                                    <div className='jaa-2'>
                                        <img src={equal} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 py-3'>

                            <div className='row d-flex justify-content-center align-items-center tablet-card p-3 m-1'>
                                <div className='col-md-4'>
                                    <div>
                                        <img src={solution} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h3>Our Solution</h3>
                                </div>
                                <div className='col-md-4'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Global sec */}
            <section id='global'>
                <div className='container py-3'>
                    <div className='pt-3' data-aos="zoom-in" data-aos-duration="500">
                        <h1 className='con-h1 text-center'>  Global Payroll resources to get you started</h1>
                    </div>
                    <div className='row py-3'>
                        <div className='col-md-4 pt-3' data-aos="zoom-out" data-aos-duration="800">
                            <div className='global-card'>
                                <div>
                                    <img src={global1} alt="" className='img-fluid' />
                                </div>
                                <div className='pt-3 mx-3'>
                                    <h4>Guide to Global Payroll</h4>
                                    <p>✔️ Learn about global payroll management options to identify the best way to handle international payments and benefits to ensure a happy  team.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 pt-3' data-aos="zoom-out" data-aos-duration="800">
                            <div className='global-card'>
                                <div>
                                    <img src={global2} alt="" className='img-fluid' />
                                </div>
                                <div className='pt-3 mx-3'>
                                    <h4>Global Payroll Template</h4>
                                    <p>✔️ Download the Global Payroll to get a sense of the scope of day-to-day payroll tasks and familiarize yourself with how you can efficiently make bulk edits.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 pt-3' data-aos="zoom-out" data-aos-duration="800">
                            <div className='global-card'>
                                <div>
                                    <img src={global3} alt="" className='img-fluid' />
                                </div>
                                <div className='pt-3 mx-3'>
                                    <h4>Global Payroll Checklist</h4>
                                    <p>✔️ Implement a compliant global payroll system to avoid global a penalties global payrol and legal implications and run global payroll correctly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* payroll sec */}
            <section className='container py-5'>
                <div className='pt-2' data-aos="zoom-in" data-aos-duration="500">
                    <h1 className='con-h1 text-center'>Still have questions about Payroll? </h1>
                </div>
                <div className='row py-3'>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in" data-aos-duration="800">
                        <div className="card-cardish1">
                            <div className="content">
                                <h2>Payroll</h2>
                                <div className="hover_content">
                                    <p className="secondary-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maiores consectetur  incidunt nobis a odio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ backgroundColor: 'black', color: 'white' }}>
                <div className='container'>
                    <div className='row pt-4 d-flex justify-content-center align-items-center'>
                        <div className='col-md-4 '  data-aos="zoom-out" data-aos-duration="800">
                            <div className='text-center'>
                                <h1 style={{ color: 'crimson' }}>Payroll</h1>
                                <h5 className='pt-3'> Address: xxxxxxxxx, Chennai</h5>
                                <h5> PH: 91xxx xxx18</h5>
                                <h1 className='text-danger heading7'>Social Media</h1>
                        <div className=' text-center'>

                            <img src={fb} alt="" className='img-fluid footer-icon' />

                            <img src={insta} alt="" className='img-fluid footer-icon' />

                            <img src={twitter} alt="" className='img-fluid footer-icon' />

                            <img src={whatsapp} alt="" className='img-fluid footer-icon' />

                            <img src={youtube} alt="" className='img-fluid footer-icon' />

                        </div>
                            </div>
                        </div>

                 
                        <div className='col-md-4 pt-2'  data-aos="zoom-out" data-aos-duration="800">
                            <div className='text-center'>
                                <h2 style={{ color: 'crimson' }}>Quicks </h2>
                                <p className='pt-3'>Home</p>
                                <p>About</p>
                                <p>Benefits</p>
                                <p>How we works</p>
                                <p>Global payroll</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-2'  data-aos="zoom-out" data-aos-duration="800">
                            <div className='text-center'>
                                <img src={map} alt="" className='img-fluid w-75' />
                            </div>
                        </div>
                        <hr />
                        <p style={{ textAlign: 'center' }}>© Copyright 2024 by Template Path</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home