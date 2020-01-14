import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div className="list-group-item">
        { this.props.city.name }
      </div>
    );
  }
}

export default City;
