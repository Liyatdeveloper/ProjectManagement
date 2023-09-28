import React, {Component} from "react";


class Addproject extends Component{
    constructor(props){
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

                        <div class="row justify-content-center" style={  {paddingTop:"50px"}  }>
                        <div class="col-md-6 col-lg-5">
                            <div class="icon d-flex align-items-center justify-content-center">
                            </div>
                            <h3 class="text-center mb-4">Add Project Details</h3>
                            
                            <form method="POST" class="login-form">
                                <div class="form-group">
                                <input type="text" class="form-control rounded-left" name="name" placeholder="Project Name" required />
                                </div>
                                <div class="form-group d-flex">
                                <input type="file" class="form-control rounded-left" name="img" required/>
                                </div>
                                <div class="form-group d-flex">
                                <textarea class="form-control rounded-left" name="description" required placeholder="Description"></textarea>
                                </div>
                                {/* <div class="form-group">
                                            <select name="desigination" id="desigination" class="form-control">
                                            <option value="">--select Desigination--</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="HR">HR</option>
                                            <option value="Senior Developer">Senior Developer</option>
                                            </select>
                        
                                </div> */}

                                <div class="form-group">
                                <input type="text" class="form-control rounded-left" name="members" placeholder="Members" required />
                                </div>
                                <div class="form-group d-md-flex">
                                
                                </div>
                                <div class="form-group">
                                <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Save</button>
                                </div>
                            </form>
                            <br></br>
                            </div>
                        </div> 
                        
                </section>

        </div>

        )
    }
}
export default Addproject;