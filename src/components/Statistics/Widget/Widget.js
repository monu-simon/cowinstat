import React from 'react'
import './Widget.css'
const Widget = ({ stat, title }) => {
  return (
    <div className='state-card'>
      <div className='title'>
        <h2>{title} Total Vaccination Statistics</h2>
      </div>
      <p>Total Vaccination doses</p>
      <p>{stat.total}</p>
      <p>Dose 1</p>
      <p>{stat.tot_dose_1}</p>
      <p>Dose 2</p>
      <p>{stat.tot_dose_2}</p>
      <p>Daily Vacination Count</p>
      <p>{stat.today}</p>
    </div>
  )
}

export default Widget
