import AddCity from "./CRUD/City/AddCity"
import AddSite from "./CRUD/Site/AddSite"

import React from 'react'

const AddData = () => {
  return (
    <div>
      <>
        <li><AddCity /></li>
        <li><AddSite /></li>
      </>
    </div>
  )
}

export default AddData
