import React, { useRef } from "react"
import './DeleteCity.css'

function DeleteCity() {

  const refCityCode = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const citycode = refCityCode.current.value
    const token = localStorage.getItem('token')
    const user = {
      cityCode: citycode
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
        let response = await fetch(`http://localhost:8089/city/ad/deletecity/${citycode}`, requestOptions) //,,{Credential:'cityCode'}
        let data = await response.json();
        console.log(data)
        alert("Deleted City Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div className="ctdiv" data-testid="DeleteCityTest"><center>
      <h2>Delete City Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="citycode">cityCode: &nbsp;&nbsp; </label>
        <input type="number" id="citycode" name="citycode" ref={refCityCode} />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
      </form> </center>
    </div>

  );
}

export default DeleteCity;