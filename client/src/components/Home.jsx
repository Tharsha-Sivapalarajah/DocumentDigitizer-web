import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { images } from '../javascript/imageImports.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../javascript/firebase';

const Home = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // window.location = '/login';
            }
        });
    })

    return (
        <div>
            <Navigation />
            <section className='hero bg-light row m-0 p-0 row justify-content-center'>
                {/* <div className="hero-image col-10 p-0 m-0 text-center mt-5">
                    <img src={images.hero} alt="hero image" style={{height: "350px", width: "350px"}} />
                </div> */}
                <img src={images.bg_scanning} alt="bg-scanning" className='hero-image p-0 m-0' />
                <div className="hero-text col-6 px-4 m-0 text-center position-absolute">
                    <h1 className="display-5">Digitize your documents & make your lives easier</h1>
                    <button className='join btn btn-dark px-4 mt-3' type='button'>
                        <Link to="/login" className='text-light join-link'>Join Today</Link>
                    </button>
                </div>
            </section>

            <section className='features-section bg-light m-0 p-0 row justify-content-center py-3'>

                <div className="title display-6 text-center py-3 col-10 mt-5 pt-5">Take a step up</div>

                <div className="col-3 text-center d-flex flex-column mt-4">

                    <div className="features my-5">
                        <h3 className='my-2'>Optical Character Recognition (OCR)</h3>
                        <p>Extract text accurately from your scanned documents</p>
                    </div>

                    <div className="features my-5">
                        <h3 className='my-2'>Keep in sync</h3>
                        <p>Manage the same account with multiple devices and keep in sync with your progress</p>
                    </div>

                </div>

                <div className="col-4 text-center">
                    <img src={images.scanner_image} alt="hero-image" className='image-cap' />
                </div>

                <div className="col-3 text-center d-flex flex-column mt-4">

                    <div className="features my-5">
                        <h3 className='my-2'>Quality Scan</h3>
                        <p>Auto remove the unwanted background and Use our filtors to make your scans better</p>
                    </div>

                    <div className="features my-5">
                        <h3 className='my-2'>Share your work</h3>
                        <p>Share your scanned documents with friends easily via multiple platforms</p>
                    </div>

                </div>

            </section>

            <section className='technologies-section row m-0 p-4 py-5'>

                <div className="row">

                    <div className="col-7 my-5 px-5 mx-5">
                        <h3 className='lead fs-2'>Technology one</h3>
                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dicta error! Sunt quis sapiente, consequatur veritatis et, quae, nulla nobis incidunt veniam sit officia deleniti sint suscipit delectus consectetur! Placeat.</p>
                    </div>

                    <div className="col-3 text-center d-flex justify-content-center">
                        image cap
                    </div>

                </div>

                <hr className='my-3' />

                <div className="row">

                    <div className="col-3 text-center d-flex justify-content-center">
                        image cap
                    </div>

                    <div className="col-7 my-5 px-5 mx-5 text-end">
                        <h3 className='lead fs-2'>Technology two</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dicta error! Sunt quis sapiente, consequatur veritatis et, quae, nulla nobis incidunt veniam sit officia deleniti sint suscipit delectus consectetur! Placeat.</p>
                    </div>

                </div>

            </section>

            <section className="testimonials bg-light row justify-content-center m-0 p-0 pb-5">
                <h1 className="display-6 my-5 text-center">Testimonials</h1>
                <div className="col-10">
                    <div id="testimonial-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <div className="card my-4 mx-auto px-5 text-center" style={{ width: "30rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">Username one</h5>
                                        <p className="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <div className="card my-4 mx-auto px-5 text-center" style={{ width: "30rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">Username two</h5>
                                        <p className="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card my-4 mx-auto px-5 text-center" style={{ width: "30rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">Username three</h5>
                                        <p className="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Home;