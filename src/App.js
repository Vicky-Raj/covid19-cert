import React,{Component} from "react";
import "./styles/styles.css";


class Certificate extends Component{
    render() {
        return (
            <div className="container">
                <div className="outer-border">
                    <div className="inner-border">
                        <img src={require("./assets/side.png")} className="side-img" alt="side"/>
                        <div className="main">
                            <img src={require("./assets/skct.png")} className="skct" alt="skct"/>
                            <div className="title">
                                COVID-19 Pandemic General <br/> Awarness Quiz
                            </div>
                            <div className="subject">
                                Certificate of Appreciation gladly presented to
                            </div>
                            <div className="name">
                                R.Vignesh
                            </div>
                            <div className="reason">
                                For Excellent Performance in COVID-19 Pandemic <br/>
                                General Awarness Quiz
                            </div>
                            <div className="college">
                                Presented By:<br/>
                                Department of CSE
                            </div>  
                            <img src={require("./assets/ski.png")} className="ski" alt="ski"/>
                            <div className="date">
                                04/02/2000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Certificate