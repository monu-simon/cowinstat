import React, { useContext, useEffect, useState } from 'react'
import { SelectedState } from '../Context/Context';
import Table from '../Table/Table';
import { getDate } from '../Utils/Utils';
import axios from 'axios'
const Book = () => {
  const [vaccine,updateVaccine] = useState([]);
  const {selectedDistrict} = useContext(SelectedState);
  
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${selectedDistrict}&date=${getDate()}`)
      updateVaccine(res.data.sessions)
    }
    getDetails();
  },[selectedDistrict])
  
  return (
    <Table vaccine={vaccine}/>
  )
}

export default Book