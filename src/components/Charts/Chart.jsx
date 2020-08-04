import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';

import { getGlobalCurrentStatus } from '../../actions';
import styles from './Chart.module.css';

class Chart extends Component {
  componentDidMount = () => {
    this.props.getGlobalCurrentStatus();
  };

  renderLineChart = (data) => (
    <Line
      data={{
        labels: data.map(({ date }) => date),
        datasets: [
          {
            data: data.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
          },
          {
            data: data.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5',
            fill: true
          }
        ]
      }}
    />
  );

  renderBarChart = (data, country) => {
    return data.confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value
              ]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current State in ${country}` }
        }}
      />
    ) : null;
  };

  render() {
    const { data, country, countryData } = this.props;
    if (country === 'global' || country === '') {
      return data.length ? (
        <div className={styles.container}>{this.renderLineChart(data)}</div>
      ) : null;
    } else {
      return (
        <div className={styles.container}>
          {this.renderBarChart(countryData, country)}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { data: Object.values(state.dailyStatus) };
};

export default connect(mapStateToProps, { getGlobalCurrentStatus })(Chart);
