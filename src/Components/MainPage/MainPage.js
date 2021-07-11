import React, { Component } from 'react'
import img1 from '../../assets/7.png'
import img2 from '../../assets/logo.svg'
import img3 from '../../assets/images/link2.svg'
import cloud from '../../assets/images/cloud.svg'
import features from '../../assets/images/features.svg'
import heart from '../../assets/images/heart.svg'
import person from '../../assets/images/person.svg'



import Footer from '../../Containers/footer/footer'
import "./MainPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';


AOS.init();

export class MainPage extends Component {
    render() {
        return (
            <>
            <div class="myDiv">
                    <div class="bg"></div>
                    <div class="typewriter">
                   <h1 class = "h1">Welcome to ..</h1>
                   </div>
                   <img src={img2} class="img" alt="img" /> 
                </div>
            <div>
            <div
                id = "why"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="container hero"
                style={{"height":"100vh"}}>
                    <h1 class="h1">Why AFMS ?</h1>
                    <div className="row align-items-center text-center text-md-left" style={{"height":"100%"}}>
                        <div className="col-lg-4">
                        <Card border="success" style={{ width: '25rem', "align-items":"center" }}>
                            <Card.Img variant="top" src={cloud} style={{"width":"64px", "height":"64px", "marginTop":"5px" }} />
                            <Card.Body style={{"text-align":"center"}}>
                                <Card.Title>YOUR PERSONAL FIELD ASSISSTANCE</Card.Title>
                                <Card.Text >
                                    Between your hands.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-lg-4">
                        <Card border="success" style={{ width: '25rem' , "align-items":"center" }}>
                            <Card.Img variant="top" src={features} style={{"width":"64px", "height":"64px" , "marginTop":"5px" }} />
                            <Card.Body style={{"text-align":"center"}}>
                                <Card.Title>USER FRIENDLY INTERFACE</Card.Title>
                                <Card.Text>
                                    Four clicks away from your data.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-lg-4">
                        <Card border="success" style={{ width: '27rem' , "align-items":"center" }}>
                            <Card.Img variant="top" src={heart} style={{"width":"64px", "height":"64px", "marginTop":"5px" }} />
                            <Card.Body style={{"text-align":"center"}}>
                                <Card.Title>CREATING AGRICULTURAL COMMUNITY</Card.Title>
                                <Card.Text>
                                    All you want in one place.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <hr class="hr"/>


                </div>
                <h1 class="h1">Amazing Features</h1>
                <div
                id = "why1"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="container hero"
                style={{"height":"100vh"}}>
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-lg-4">
                            <h1 className="mb-3 display-3" style={{"color":"green"}}>
                            Connecting Community
                    </h1>
                            <p>
                            Through AFMS you can easily connect with your community and communicate seamlessly.
                    </p>
                        </div>
                        <div className="col-lg-8">
                            <img src={img3} className="img-fluid" alt="img" style={{"padding-left":"20vw"}} />
                        </div>
                    </div>
                    
                    <hr class="hr1"/>  
                </div>
                
                <div
                id = "why2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="container hero"
                style={{"height":"100vh"}}>
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-lg-8">
                            <img src={person} className="img-fluid" alt="img" />
                        </div>
                        <div className="col-lg-4">
                            <h1 className="mb-3 display-3" style={{"color":"green"}}>
                            PERSONALIZED FEATURES
                            </h1>
                            <p>
                            Customized Sensing and communicating options.
                            </p>
                        </div>
                        
                    </div>
                    <hr class="hr1"/>
                    </div>
                    <div
                id = "why3"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="container hero"
                style={{"height":"100vh"}}>
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-lg-4">
                            <h1 className="mb-3 display-3" style={{"color":"green"}}>
                            Smart Agriculture
                    </h1>
                            <p>
                            In order to increase crop production, increase productivity and decrease the use of agricultural inputs, precision agriculture is about controlling variations in the region.
                    </p>
                        </div>
                        <div className="col-lg-8">
                            <img src={img1} className="img-fluid" alt="img" style={{"padding-left":"20vw"}} />
                        </div>
                    </div>
                    
                    <hr class="hr1"/>
                </div>
                <Footer />
            </div>
            
            </>
        )
    }
}

export default MainPage
