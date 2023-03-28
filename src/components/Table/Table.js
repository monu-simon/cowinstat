import React from 'react'

const Table = ({vaccine}) => {
  return (
    <table className='ui fixed table '>
        <thead>
            <tr>
                <th>Center Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Vaccine Type</th>
                <th>Free</th>
            </tr>
        </thead>
        <tbody>
            {
                vaccine.length ? (
                    vaccine.map((details) => {
                        return <tr key={details.center_id}>
                            <td>{details.center_id}</td>
                            <td>{details.name}</td>
                            <td>{details.address}</td>
                            <td>{details.vaccine}</td>
                            <td>{details.fee_type}</td>
                        </tr>
                    })
                ):<tr><td>No vaccines available now</td></tr>
            }
        </tbody>
    </table>
  )
}

export default Table