import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Cards, Chart, Picker } from './components';
import styles from './App.module.css';
import { getGlobalTotalStatus, getStatusByCountry } from './actions';
import image from './assets/images/image.png';
import cx from 'classnames';

class App extends Component {
  state = {
    country: ''
  };

  componentDidMount() {
    this.props.getGlobalTotalStatus();
  }

  handleCountryChange = (country) => {
    this.setState({
      country: country
    });
    if (country === 'global') {
      this.props.getGlobalTotalStatus();
    }
    this.props.getStatusByCountry(country);
  };

  render() {
    const { data } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={cx(
              styles.image,
              'animate__animated animate__bounceInUp animate__slow'
            )}
            src={image}
            alt='header'
          />
          <lottie-player
            src='https://assets7.lottiefiles.com/private_files/lf30_1KyL2Q.json'
            background='transparent'
            speed='0.7'
            style={{ width: '200px', height: '200px' }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <Cards data={data} />
        <Picker onChange={this.handleCountryChange} />
        <Chart countryData={data} country={this.state.country} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.diseases
  };
};

export default connect(mapStateToProps, {
  getGlobalTotalStatus,
  getStatusByCountry
})(App);
