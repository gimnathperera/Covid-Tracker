import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';

import { getInfectedCountries } from '../../actions';
import styles from './Picker.module.css';

class Picker extends Component {
  componentDidMount = () => {
    this.props.getInfectedCountries();
  };

  render() {
    const { countries } = this.props;
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=''
          onChange={(e) => {
            this.props.onChange(e.target.value);
          }}
        >
          <option value='global'>Global</option>
          {countries.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
}

const mapStateToProps = (state) => {
  return { countries: Object.values(state.countries) };
};

export default connect(mapStateToProps, { getInfectedCountries })(Picker);
