import React, { useState,useEffect } from 'react'
import Title from '../Title/Title'
import './Users.css'

import db from '../../../Data/Firebase'
import { collection, getDocs,onSnapshot } from 'firebase/firestore'

function Users() {

  const [count,setCount] = useState()
  const usersCollectionRef = collection(db,"Consumers")

  useEffect(() =>{
        
    onSnapshot(usersCollectionRef,(data) =>{
       setCount(data.docs.map((doc) => ({...doc.data()})))
    })
},[])

  return (
    <div className='usersWrapper'>
      <Title title = "Total Users:" />
      <div className='usersInfo'>
        <h5><i>Count Of users:</i></h5>
        <h4>{count?count.length:""}</h4>
      </div>
    </div>
  )
}

export default Users