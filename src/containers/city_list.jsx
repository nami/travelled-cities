import React from 'react';
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

class CityList extends React.Component {

  componentWillMount(){
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        { this.props.cities.map(city => <City key={ city.name } city={ city } />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
