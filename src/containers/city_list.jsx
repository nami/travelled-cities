import React from 'react';
import City from './city'

class CityList extends React.Component {
  render() {
    return (
      <div className="cities">
        { this.props.cities.map(city => <City key={ city.name } city={ city } />)}
      </div>
    );
  }
}

export default CityList;
