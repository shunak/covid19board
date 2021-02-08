import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";
import { Doughnut } from "react-chartjs-2";

const PieChart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const motality =
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

  const pieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Recovered,
              daily[daily.length - 1].Deaths,
            ],
            hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
            borderColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );

  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        Motality {motality.toFixed(2)}[%]
      </Typography>
      {pieChart}
    </>
  );
};

export default PieChart;
