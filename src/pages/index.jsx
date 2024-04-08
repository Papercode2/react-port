import React from 'react';

function Index() {
  return (
    <div>
      

        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="index" className="navbar-brand mx-auto mx-lg-0">First</a>

                <div className="d-flex align-items-center d-lg-none">
                    <i className="navbar-icon bi-telephone-plus me-3"></i>
                    <a className="custom-btn btn" href="#section_5">
                        +254740770403
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">Contact</a>
                        </li>
                    </ul>

                    <div className="d-lg-flex align-items-center d-none ms-auto">
                        <i className="navbar-icon bi-telephone-plus me-3"></i>
                        <a className="custom-btn btn" href="#section_5">
                            +254740770403
                        </a>
                    </div>
                </div>

            </div>
        </nav>

        

            <section className="hero d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7 col-12">
                            <div className="hero-text">
                                <div className="hero-title-wrap d-flex align-items-center mb-4">
                                    <img src="assets/images/brayo.jpg" className="avatar-image avatar-image-large img-fluid" alt=""/>
                                    <h1 className="hero-title ms-3 mb-0">Hello friend!</h1>
                                </div>

                                <h2 className="mb-4">I'm available for web development projects.</h2>

                                <p className="mb-4"><a className="custom-btn btn custom-link" href="#section_2">Let's begin</a></p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-12 position-relative">
                        <div class="hero-image-wrap" style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src="assets/images/maweu.jpg" class="hero-image img-fluid" alt="" style={{ width: '160%', height: 'auto', borderRadius: '50%' }} />
</div>

</div>



                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fill-opacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </section>

            <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">
            
                        <div className="col-lg-6 col-12">
                            <img src="assets/images/computer.jpg" className="about-image img-fluid" alt=""/>
                        </div>
            
                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
            
                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 className="text-white me-4 mb-0">My Story</h2>
            
                                    <img src="assets/images/brayo.jpg" className="avatar-image img-fluid" alt=""/>
                                </div>
            
                                <h3 className="pt-2 mb-3">About Me</h3>
            
                                <p>My name is Brian Maweu, and I was born in Makindu, a small town in Eastern Kenya. I pursued a Bachelor's degree in Information Technology at Kenya Highlands University.</p>
            
                                <p>I am a passionate full-stack developer with expertise in a wide range of technologies and frameworks. I enjoy building innovative solutions that solve real-world problems and enhance user experiences.</p>
            
                               </div>
                        </div>
            
                    </div>
                </div>
            </section>
            

            <section className="featured section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="profile-thumb">
                                <div className="profile-title">
                                    <h4 className="mb-0">Information</h4>
                                </div>

                                <div className="profile-body">
                                    <p>
                                        <span className="profile-small-title">Name</span> 
                                        <span>Brian Maweu</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Birthday</span> 
                                        <span>July 11, 2000</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Phone</span> 
                                         <span><a href="tel: +254740770403">+254740770403</a></span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Email</span> 
                                        <span><a href="mailto:hello@josh.design">maweubrayo@gmail.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <div className="row">
                                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">5+</strong>

                                        <p className="featured-text">Years of Experiences</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                                        <strong className="featured-numbers">100+</strong>

                                        <p className="featured-text">Happy Customers</p>
                                    </div>

                                    <div className="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">250</strong>

                                        <p className="featured-text">Project Finished</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">10+</strong>

                                        <p className="featured-text">Digital Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="clients section-padding">
                <div className="container">
                    <div className="row align-items-center">

                    <div className="col-lg-12 col-12">
    <h3 className="text-center mb-5">Companies I've worked with</h3>
    <div className="d-flex justify-content-between align-items-center mb-3">
        <a href="https://www.remorenacompany.com">
        <img src="assets/images/clients/shopify.svg" alt="Remorena Company Ltd" style={{ width: '100px' }} />
            <span>Remorena Company Ltd</span>
        </a>
    </div>
    <div className="d-flex justify-content-between align-items-center mb-3">
        <a href="https://www.primeways.com">
        <img src="assets/images/clients/cachet.svg" alt="Primeways" style={{ width: '100px' }} />
            <span>Primeways</span>
        </a>
    </div>
    <div className="d-flex justify-content-between align-items-center">
        <a href="https://www.makinduchildrenhome.com">
        <img src="assets/images/clients/guitar-center.svg" alt="Makindu Children Home Developers" style={{ width: '100px' }} />
            <span>Makindu Children Home Developers</span>
        </a>
    </div>
</div>


                    </div>
                </div>
            </section>


            <section className="services section-padding" id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src="assets/images/hands.png" className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Services</h2>
                            </div>
                            <div className="row pt-lg-5">
    <div className="col-lg-6 col-12">
        <div className="services-thumb">
            <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                <h3 className="mb-0">Web Development</h3>

                <div className="services-price-wrap ms-auto">
                    <p className="services-price-text mb-0">Custom Quote</p>
                    <div className="services-price-overlay"></div>
                </div>
            </div>

            <p>Building responsive and interactive web applications using modern technologies and frameworks like React, Angular, Vue.js, and more.</p>

            <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

            <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                <i className="services-icon bi-laptop"></i>
            </div>
        </div>
    </div>

    <div className="col-lg-6 col-12">
        <div className="services-thumb services-thumb-up">
            <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                <h3 className="mb-0">Backend Development</h3>

                <div className="services-price-wrap ms-auto">
                    <p className="services-price-text mb-0">Custom Quote</p>
                    <div className="services-price-overlay"></div>
                </div>
            </div>

            <p>Creating robust server-side applications, APIs, and databases using technologies such as Node.js, Express, Django, Flask, PHP, Laravel and Python.</p>

            <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

            <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                <i className="services-icon bi-server"></i>
            </div>
        </div>
    </div>
</div>
<>

                                <div className="col-lg-6 col-12">
                                    <div className="services-thumb">
                                        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 className="mb-0">Ecommerce</h3>

                                            <div className="services-price-wrap ms-auto">
                                                <p className="services-price-text mb-0">$3,600</p>
                                                <div className="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>

                                        <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i className="services-icon bi-phone"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <div className="services-thumb services-thumb-up">
                                        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 className="mb-0">SEO</h3>

                                            <div className="services-price-wrap ms-auto">
                                                <p className="services-price-text mb-0">$1,450</p>
                                                <div className="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.</p>

                                        <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i className="services-icon bi-google"></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </section>


            <section className="projects section-padding" id="section_4">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-8 col-12 ms-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src="assets/images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Projects</h2>
                            </div>
                        </div>


                        <div className="projects-info">
    <small className="projects-tag">Websites</small>
    <h3 className="projects-title">Kericho Hospital E-services system</h3>
</div>

<div className="projects-info">
    
    <h3 className="projects-title">Eanglerise Church Platform</h3>
</div>

<div className="projects-info">
    
    <h3 className="projects-title">Makindu Children's Home Website</h3>
</div>


                                
                            </div>
                        </div>

                    
                
            </section>

            <section className="contact section-padding" id="section_5">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-8 col-12">
                                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                    <img src="assets/images/hands.png" className="avatar-image img-fluid" alt=""/>

                                    <h2 className="text-white ms-4 mb-0">Send Me a Message</h2>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                                <div className="contact-info contact-info-border-start d-flex flex-column">
                                    <strong className="site-footer-title d-block mb-3">Services</strong>

                                    <ul className="footer-menu">
                                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Websites</a></li>

                                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Branding</a></li>

                                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Ecommerce</a></li>

                                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">SEO</a></li>
                                    </ul>

                                    <strong className="site-footer-title d-block mt-4 mb-3">Stay connected</strong>

                                    <ul className="social-icon">
                                        <li className="social-icon-item"><a href="https://twitter.com/Papercode2" className="social-icon-link bi-twitter"></a></li>

                                        <li className="social-icon-item"><a href="#" className="social-icon-link bi-instagram"></a></li>

                                        <li className="social-icon-item"><a href="#" className="social-icon-link bi-pinterest"></a></li>

                                        <li className="social-icon-item"><a href="https://www.youtube.com/yobra" className="social-icon-link bi-youtube"></a></li>
                                    </ul>

                                    <strong className="site-footer-title d-block mt-4 mb-3">Start a project</strong>

                                    <p className="mb-0">I’m available for freelance projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                                <div className="contact-info d-flex flex-column">
                                    <strong className="site-footer-title d-block mb-3">About</strong>

                                    <p className="mb-2">
                                        Brian is a professional web developer. Feel free to get in touch with me.
                              </p>

                                    <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>

                                    <p>
                                        <a href="mailto:hello@josh.design">
                                            maweubrayo@gmail.com
                                        </a>
                                    </p>

                                    <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>

                                    <p className="mb-0">
                                        <a href="tel: 120-240-9600">
                                            +254740770403
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <form action="https://formspree.io/f/meqypepe" method="POST" class="custom-form contact-form" role="form">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
            <div class="form-floating">
                <input type="text" name="name" id="name" class="form-control" placeholder="Name" required="" autocomplete="on"/>
                <label for="name">Name</label>
            </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12"> 
            <div class="form-floating">
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address" required="" autocomplete="on"/>
                <label for="email">Email address</label>
            </div>
        </div>

        

        <div class="col-lg-12 col-12">
            <div class="form-floating">
                <textarea class="form-control" id="message" name="message" placeholder="Tell me about the project" autocomplete="on"></textarea>
                <label for="message">Tell me about the project</label>
            </div>
        </div>

        <div class="col-lg-3 col-12 ms-auto">
            <button type="submit" class="form-control">Send</button>
        </div>
    </div>
</form>


                            </div>

                        </div>
                    </div>
            
            </section>

        
    </div>
  );
}

export default Index;
