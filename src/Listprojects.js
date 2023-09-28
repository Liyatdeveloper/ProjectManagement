import React, {Component} from "react";
import imgSrc from "./img.jpg";
import "./Managerhome.css";


class Listproject extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <div>
                <section className="w3l-recent-work" style={{ padding: "100px" }}>
          {/* Main content */}

          <div className="container">
            
                        <div className="row">
                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img
                                src={imgSrc}
                                alt="Cinque Terre"
                                width="200"
                                height="400"
                              />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="img.jpg">
                              <img src={imgSrc} alt="Forest" width="600" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img
                                src={imgSrc}
                                alt="Northern Lights"
                                width="200"
                                height="400"
                              />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img src={imgSrc} alt="Mountains" width="200" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>
                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img src={imgSrc} alt="Mountains" width="200" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>
                        </div>
          </div>


          <div className="container mt-5">
            <div className="row">
              <div className="gallery">
                <a target="_blank" href="#">
                  <img
                    src={imgSrc}
                    alt="Cinque Terre"
                    width="200"
                    height="200"
                  />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="#">
                  <img src={imgSrc} alt="Forest" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="#">
                  <img
                    src={imgSrc}
                    alt="Northern Lights"
                    width="200"
                    height="400"
                  />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="img.jpg">
                  <img src={imgSrc} alt="Mountains" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>
              <div className="gallery">
                <a target="_blank" href="#">
                  <img src={imgSrc} alt="Mountains" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>
            </div>
          </div>

        </section>
            </div>
        )
    }
}
export default Listproject;