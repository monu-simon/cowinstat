import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card';
import { SelectedState } from '../Context/Context';
import { getDateinYYYY } from '../Utils/Utils';
import './Home.css'

const Home = () => {
  
  const [dailyCount,updateCount] = useState('');
  const [covishiels,updateCovishield] = useState('');
  const [Covaxine,updateCovaxine] = useState('');
  const [sputnik,updateSputnik] = useState('');
  const [male,updateMaleCount] = useState('');
  const [female,updateFemaleCount] = useState('');
  const {selectedState,selectedDistrict} = useContext(SelectedState);
  
  useEffect(() => {
    const totalData = async () => {
      const res = await axios.get(`https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${getDateinYYYY()}`);
      updateCount(res.data.topBlock.vaccination.total);
      updateCovaxine(res.data.topBlock.vaccination.covaxin);
      updateCovishield(res.data.topBlock.vaccination.covishield);
      updateSputnik(res.data.topBlock.vaccination.sputnik);
      updateMaleCount(res.data.topBlock.vaccination.male);
      updateFemaleCount(res.data.topBlock.vaccination.female);
    }
    totalData();
  },[]);

  return (
    <div className='grid'>
      <Card title='Vaccination Count' contents='Daily Vaccination Count' count={dailyCount} />
      <Card title='Covisheild' contents='Total Covisheild Count' count={covishiels} />
      <Card title='Covaxin' contents='Total Covaxin Count' count={Covaxine} />
      <Card title='Sputnik' contents='Total Sputnik Count' count={sputnik} />
      <Card title='Male' contents='' count={male} />
      <Card title='Female' contents='' count={female} />
    </div>
  )
}

export default Home