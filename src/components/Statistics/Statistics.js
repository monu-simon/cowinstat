import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { SelectedState } from '../Context/Context';
import { getDateinYYYY } from '../Utils/Utils';
import Widget from './Widget/Widget';

const Statistics = () => {

    const {selectedState,selectedDistrict} = useContext(SelectedState);
    const [stateStat,updateStateStat] = useState({});
    const [districtStat,updateDistricteStat] = useState({});

    useEffect(() => {
        const getStateData = async () => {
            const res = await axios.get(`https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${selectedState}&district_id=&date=${getDateinYYYY()}`)
            updateStateStat(res.data.topBlock.vaccination);
        }
        getStateData();
    },[selectedState]);

    useEffect(() => {
        const getDistrictData = async () => {
            const res = await axios.get(`https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${selectedState}&district_id=${selectedDistrict}&date=${getDateinYYYY()}`)
            updateDistricteStat(res.data.topBlock.vaccination);
        }
        getDistrictData()
    },[selectedDistrict]);

    return (
    <>
        <Widget title={selectedState ? 'State':'India'} className='card' stat={stateStat}/>
        {
            selectedDistrict ? (<Widget title='District' className='card' stat={districtStat}/>): <p></p>
        }
    </>
  )
}

export default Statistics