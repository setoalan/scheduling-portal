import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  isActivePath(path) {
    return (this.props.location.pathname === path) ? 'active' : '';
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to={'/'}>TEMPUS</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className={this.isActivePath('/users')}><Link to={'/users'}>Patients</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className={this.isActivePath('/appointment')}><Link to={'/appointment'}>Make Appointment</Link></li>
                  <li className={this.isActivePath('/')}><Link to={'/'}>My Record</Link></li>
                  <li className={this.isActivePath('/users/sign_in')}><Link to={'/users/sign_in'}>Sign In</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
