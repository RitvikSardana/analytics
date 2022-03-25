import React, { useState,useEffect } from 'react'
import Title from '../Title/Title'
// import '../Oxygen.css'

import {Line} from "react-chartjs-2" 
import {Chart as ChartJS} from 'chart.js/auto'

import { UserData } from '../../../Data/Data'
import db from '../../../Data/Firebase'
import { collection, getDocs,onSnapshot } from 'firebase/firestore'

function Pulse() {

    const [oxygen,setOxygen] = useState([])
    const [userData,setUserData] = useState({
        labels:UserData.map((data) => data.year),
        datasets:[{
            label:"Users Gained",
            data:[],
            backgroundColor:["white"],
            borderColor:"rgb(255,0,20)",
            width:"350px",
            height:"400px"
        }]
    })
    const usersCollectionRef = collection(db,"Consumers")

    useEffect(() =>{
        
        onSnapshot(usersCollectionRef,(data) =>{
           setOxygen(data.docs.map((doc) => ({...doc.data()})))
        })
    },[])

    useEffect(() =>{
        setUserData({
            ...userData,
            labels:oxygen.map(oxy=>oxy.ts),
            datasets:[{
            ...userData.datasets,
            label:"Pulse Rate",
            data:oxygen.map(oxy=>oxy.Pulse),
            backgroundColor:["white"],
            borderColor:"#E282EE",
            width:"350px",
            height:"400px"
        }]})
        console.log()
    },[oxygen])

  return (
    <div className='oxygenWrapper'>
        <Title title = "Pulse Rate" />
        <div className='chartWrapper'>
            <Line 
                data = {userData}
                // options = 
            />
            <div className='averageWrapper' >
                <h4>Avg. Pulse</h4>
                <h5>{(oxygen.map(oxy=>oxy.Pulse).reduce((a,b)=>a+b,0)/oxygen.length).toFixed(2)+" "}BPM</h5>
            </div>
        </div>
    </div>
  )
}

export default Pulse