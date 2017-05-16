import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    const welcome = (this.props.auth.name) ? <h2>Welcome {this.props.auth.name}&#33;</h2> : '';

    return (
      <div className="row">
        <div className="col-xs-12">
          {
            this.props.location.query.status === 'success' &&
            <div className="alert alert-success" role="alert">
              You successfully made an appointment. The doctor will respond with your request shortly.
            </div>
          }
          <div className="jumbotron">
            <h1>Scheduling Portal</h1>
            <h4>Try it out!</h4>
            <h4>username: doctor1 password: asdfjkl;</h4>
            { welcome }
            <p>Made by Alan Seto &lt;alantseto@email.com&gt;</p>
          </div>
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

export default connect(mapStateToProps, null)(Home);
