import React, { createContext, useState } from 'react'

export const SelectedState = createContext()

const Context = ({ children }) => {
  const [selectedState, updateState] = useState()
  const [selectedDistrict, updateDistrict] = useState()
  return (
    <SelectedState.Provider
      value={{ selectedState, updateState, selectedDistrict, updateDistrict }}
    >
      {children}
    </SelectedState.Provider>
  )
}

export default Context
