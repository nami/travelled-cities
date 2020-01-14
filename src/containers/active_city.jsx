import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    city: state.activeCity
  };
}

class ActiveCity extends React.Component {
  render() {
    return (
      <div className="active-city">
        <h3> { this.props.city.name }</h3>
        { this.props.city.address }
        <img src={ this.props.city.slug } />
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (ActiveCity);
