import React, { useEffect, useState } from 'react'
import Temp from './AvgTemp/Temp'
import Users from './UsersCount/Users'
import './Section.css'
import Oxygen from './Oxygen/Oxygen'
import Pulse from './Pulse/Pulse'

import db from '../../Data/Firebase'
import { collection, getDocs,onSnapshot } from 'firebase/firestore'
import { isEmpty } from '@firebase/util'

function Section() {

  const usersCollectionRef = collection(db,"Consumers")


  return (
    <div className='sectionWrapper'>
        <div className='sectionOne'>
            <Users />
            <Temp />
        </div>
        <div className='sectionTwo'>

          <Oxygen />
          <Pulse />

          </div>
        <div>

        </div>
    </div>
  )
}

export default Section