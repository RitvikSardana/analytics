import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./Oxygen.css";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { UserData } from "../../../Data/Data";
import db from "../../../Data/Firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Oxygen() {
  const [oxygen, setOxygen] = useState([]);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: ["white"],
        borderColor: "rgb(255,0,20)",
        width: "350px",
        height: "400px",
      },
    ],
    options: {
      scales: {
        x: {
          ticks: {
            display: false,
          },
        },
      },
    },
  });
  const usersCollectionRef = collection(db, "Consumers");

  useEffect(() => {
    onSnapshot(usersCollectionRef, (data) => {
      setOxygen(data.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  useEffect(() => {
    setUserData({
      ...userData,
      labels: oxygen.map((oxy) => oxy.ts),
      datasets: [
        {
          ...userData.datasets,
          label: "O2 Level",
          data: oxygen.map((oxy) => oxy.oxygen),
          backgroundColor: ["white"],
          borderColor: "rgb(255,0,20)",
          width: "350px",
          height: "600px",
        },
      ],
    });
    console.log();
  }, [oxygen]);

  return (
    <div className="oxygenWrapper">
      <Title title="O2 Level" />
      <div className="chartWrapper">
        <Line data={userData} />
        <div className="averageWrapper">
          <h4>Avg. O2%</h4>
          <h5>
            {(
              oxygen.map((oxy) => oxy.oxygen).reduce((a, b) => a + b, 0) /
              oxygen.length
            ).toFixed(2) +
              " " +
              "%"
            }
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Oxygen;
