import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    marginTop: theme.spacing(2),
  },
}));

// make HTTP request to an API endpoint and use the received data to generate chart.
const fetchChartDataFromAPI = () => {
  return axios.get('https://api.example.com/chart-data');
};

const ChartComponent = () => {
  const classes = useStyles();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchChartDataFromAPI();
        const data = response.data;
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.chartContainer}>
      {chartData ? (
        <>
          <Typography variant="h6">Reports</Typography>
          <Bar data={chartData} />
        </>
      ) : (
        <Typography variant="body1">Loading chart data...</Typography>
      )}
    </div>
  );
};

export default ChartComponent;
