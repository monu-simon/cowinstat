import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Select.css'
import { SelectedState } from '../Context/Context'

const Select = () => {
  const [statesList, updateStatesList] = useState([])
  const [districtList, updateDistrictList] = useState([])
  const { selectedState, updateState, selectedDistrict, updateDistrict } =
    useContext(SelectedState)

  useEffect(() => {
    const getState = async () => {
      const res = await axios.get(
        'https://cdn-api.co-vin.in/api/v2/admin/location/states'
      )
      updateStatesList(res.data.states)
    }
    getState()
  }, [])

  useEffect(() => {
    const getDistrict = async () => {
      const res = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`
      )
      updateDistrictList(res.data.districts)
    }
    getDistrict()
  }, [selectedState])

  return (
    <div>
      <select
        onChange={e => {
          updateState(e.target.value)
        }}
        className='ui search dropdown'
      >
        <option>--Select State--</option>
        {statesList.map(state => {
          return (
            <option key={state.state_id} value={state.state_id}>
              {state.state_name}
            </option>
          )
        })}
      </select>
      {districtList.length ? (
        <select onChange={(e) => {
            updateDistrict(e.target.value);
        }} className='ui search dropdown'>
          {districtList.map(district => {
            return (
              <option key={district.district_id} value={district.district_id}>
                {district.district_name}
              </option>
            )
          })}
        </select>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default Select
