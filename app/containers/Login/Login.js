// @flow
import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import LogoImg from './logo.png';

export default class Login extends Component {
  render() {
    return (
      <Grid className="Login-background">
        <Row center="xs" middle="xs">
          <Col xs={4}>
            <div className="Login-Card pt-card pt-elevation-1">
              <div className="Login-Logo">
                <img src={LogoImg} />
              </div>
              <Row className="Login-Form" center="xs">
                <Col xs={12}>
                  <div className="pt-control-group pt-vertical">
                    <div className="pt-input-group pt-large">
                      <span className="pt-icon pt-icon-person"></span>
                      <input type="text" className="pt-input" placeholder="Username" />
                    </div>
                    <div className="pt-input-group pt-large">
                      <span className="pt-icon pt-icon-lock"></span>
                      <input type="password" className="pt-input" placeholder="Password" />
                    </div>
                    <Link to={'/home'} className="pt-button pt-large pt-intent-primary Login-Button">Login</Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
