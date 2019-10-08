import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';

import "./login.css";
import Button from "../../components/Button/Button";

class LoginScreen extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row flex-column justify-content-center align-items-center">
            <div className="col-sm-4">
              <div className="authWrapper">
                <h1 className="title">Welcome!</h1>
                <p className="subtitle">Login to write a review</p>
                <div className="authWrapperForm">
                  <form>
                    <div className="form-group mt-4">
                      <label htmlFor="matricNumber">Matric Number</label>
                      <input type="text" placeholder="matric number" name="matric-number"/>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="password">Password</label>
                      <input type="text" placeholder="matric number" />
                    </div>
                    <div className="form-group mt-3">
                     <Button title="Login"/>
                    </div>
                    <div className="form-group mt-3 text-center">
                      <Link to="/signup" className="footer-link">
                        Don't have an account? Signup
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Link to="/i-am-stupid" className="footer-link">Remind me my Password?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
