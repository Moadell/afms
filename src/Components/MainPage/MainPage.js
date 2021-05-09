import React, { Component } from 'react'
import img1 from '../../assets/7.png'
import Footer from '../../Containers/footer/footer'


export class MainPage extends Component {
    render() {
        return (
            <div>

                <div className="container hero">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-lg-4">
                            <h1 className="mb-3 display-3">
                            Smart Agriculture
                    </h1>
                            <p>
                            In order to increase crop production, increase productivity and decrease the use of agricultural inputs, precision agriculture is about controlling variations in the region.
                    </p>
                        </div>
                        <div className="col-lg-8">
                            <img src={img1} className="img-fluid" alt="img" />
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage
