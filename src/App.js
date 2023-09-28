import './App.css';
import './loginstyle.css'
import React, {Component} from "react";
import axios from 'axios';



class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          username : "",
          password : "",
         
      }
      
  }

  inputSet = (e) => {
      this.setState({ [e.target.name] : e.target.value })
  }

  login = (e) => {
      e.preventDefault();
      var dat = {
          username : this.state.username,
          password : this.state.password,
         
          
      };

      axios.post("http://127.0.0.1:8000/LoginAPIView/",dat).then(response =>{
          console.log(response.data);
          alert('login success');
      })
      .catch(error => {
          console.error("Error:", error); // Log any errors
        });
      
  }
  render(){

    return(
      <div className="row justify-content-center" style={  {paddingTop:"100px"}  }>
      <div className="col-md-6 col-lg-5">
            {/* <div className="login-wrap p-4 p-md-5">
            </div> */}
            
              <div className="icon d-flex align-items-center justify-content-center">
                {/* <span className="fa fa-user-o"></span> */}
              </div>
              <h3 className="text-center mb-4">Login</h3>
              
              <form className="login-form">
       
                <div className="form-group">
                  <input type="text" onChange={this.inputSet} className="form-control rounded-left" name="username" placeholder="Username" required />
                </div>
                <div className="form-group d-flex">
                  <input type="password" onChange={this.inputSet} className="form-control rounded-left" name="password" placeholder="Password" required />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">Remember Me
                      <input type="checkbox" checked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  {/* <div className="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div> */}
                </div>
                {/* <div className="signup-link">
                  Not a member? <a href="/signup">Signup now</a>
               </div> */}
                <div className="form-group">
                  <button onClick={this.login} className="btn btn-primary rounded submit p-3 px-5">Sign in</button>
                </div>
              </form>
            </div>
          </div>
         

      
    // </div>


    )
  }
}


export default App;
