import React, { useRef } from "react"
import './DeleteHotel.css'

function DeleteHotel() {

  const refHotelCode = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const hotelcode = refHotelCode.current.value
    const token = localStorage.getItem('token')
    const user = {
      hotelCode: hotelcode
    }
    console.log(user)
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8087/hotel/ad/deletehotel/${hotelcode}`, requestOptions) //,,{Credential:'hotelCode'}
        let data = await response.json();
        console.log(data)
        alert("Deleted Hotel Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ctdiv"><center>
      <h2>Delete Hotel Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="hotelcode">hotelCode: &nbsp;&nbsp; </label>
        <input type="number" id="hotelcode" name="hotelcode" ref={refHotelCode} autoComplete="off" placeholder="hotel code" />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
      </form> </center>
    </div>

  );
}

export default DeleteHotel;