import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to={'/'}>TEMPUS</Link>
              </div>

              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  {
                    this.props.auth.doctor &&
                    <li className={this.isActivePath('/users')}><Link to={'/users'}>Patients</Link></li>
                  }
                  {
                    this.props.auth.doctor &&
                    <p className="navbar-text">
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                      <small> Signed in as doctor</small>
                    </p>
                  }
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className={this.isActivePath('/user/me')}><Link to={'/user/me'}>My Record</Link></li>
                  {
                    this.props.auth.isAuthenticated &&
                    <li className={this.isActivePath('/users/logout')}><Link to={'/users/logout'}>Log Out</Link></li>
                  }
                  {
                    !this.props.auth.isAuthenticated &&
                    <li className={this.isActivePath('/users/login')}><Link to={'/users/login'}>Log In</Link></li>
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(Header);
