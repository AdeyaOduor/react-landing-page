import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    marginTop: theme.spacing(2),
  },
}));

const fetchDataFromDatabase = () => {
  // Simulated asynchronous database fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: ['Learners', 'Staff', 'Allocated_area', 'WoodlotTrees', 'FruitTrees', ],
        datasets: [
          {
            label: 'Target',
            data: [650, 20, 3.0, 300, 200],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'TreePlanting',
            data: [650, 20, 3.0, 200, 200],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'Monitoring',
            data: [65, 10, 3.0, 181, 156],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      });
    }, 1500);
  });
};

const ChartComponent = () => {
  const classes = useStyles();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromDatabase();
      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.chartContainer}>
      {chartData ? (
        <>
          <Typography variant="h6">dashboard</Typography>
          <Bar data={chartData} />
        </>
      ) : (
        <Typography variant="body1">Loading chart data...</Typography>
      )}
    </div>
  );
};

export default ChartComponent;
