import React, {Component} from "react";
import "./Projectdeatil.css";
import imgSrc from "./img.jpg";

class Projectdetail extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <div>
                <header class="absolute-top">
                    {/* Header content */}
                </header>



                <section class="w3l-recent-work" style={{ padding: "100px" }}>
                    {/* Main content */}

                    <div className="container">
                    <h1>Project Name</h1>
                        <div className="row">
                            <div class="col">
                
                                    <div class="gallery">
                                        <a target="_blank" href="#">
                                        <img
                                            src={imgSrc}
                                            alt="Cinque Terre"
                                            width="1000"
                                            height="1000"
                                        />
                                        </a>
                                    </div>
                            </div>
                            <div class="col">
                                <div class="desc">
                                       
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit inventore deleniti dolore sequi labore similique vitae .
                                        inventore deleniti dolore sequi labore similique vitae quae est.Lorem ipsum dolor sit amet consectetur adipisicing elit inventore deleniti dolore sequi labore similique vitae .
                                        inventore deleniti dolore sequi labore similique vitae quae est.Lorem ipsum dolor sit amet consectetur adipisicing elit inventore deleniti dolore sequi labore similique vitae .
                                        inventore deleniti dolore sequi labore similique vitae quae est.
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="desc" style={{ marginLeft: "100px" }}>
                            Members : Aswathy,Aswathy
                        </div>
                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default Projectdetail;