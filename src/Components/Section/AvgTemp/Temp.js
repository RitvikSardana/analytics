import React, { useState,useEffect } from "react";
import Title from "../Title/Title";
import Gauge from "react-svg-gauge";

import db from "../../../Data/Firebase";
import { collection, getDocs,onSnapshot } from 'firebase/firestore'
import "./Temp.css";


function Temp() {

  const [temp,setTemp] = useState([])

  const usersCollectionRef = collection(db,"Consumers")

  useEffect(() =>{
        
    onSnapshot(usersCollectionRef,(data) =>{
       setTemp(data.docs.map((doc) => ({...doc.data()})))
    })
},[])

  return (
    <div className="tempWrapper">
      <Title title=" Average Body Temperature" />
      <div className="tempInfo">
        <Gauge
          value={(temp.map(oxy=>oxy.Temp).reduce((a,b)=>a+b,0)/temp.length).toFixed(2)}
          label={""}
          color={"blue"}
          width={300}
          height={150}
          topLabelStyle={{ display: "none" }}
          valueLabelStyle={{ fontSize: "40px" }}
          valueFormatter={(number) => `${number}°F`}
          // valueS
          min = {80}
          max={104}
        />

      </div>
    </div>
  );
}

export default Temp;
