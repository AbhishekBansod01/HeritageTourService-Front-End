import React, { useRef } from "react"
import './UpdateCity.css'

function UpdateCity() {
  //const [data, setData]=useState([])
  const refCityCode = useRef('');
  const refCityName = useRef('');
  const refNuHotels = useRef('');
  const refNuSites = useRef('');


  const handleSubmit = (e) => {
    e.preventDefault()
    const citycode = refCityCode.current.value
    const cityname = refCityName.current.value
    const nuhotels = refNuHotels.current.value
    const nusites = refNuSites.current.value
    const token = localStorage.getItem('token')
    const user = {
      cityCode: citycode, cityName: cityname, nuHotels: nuhotels, nuSites: nusites
    }


    console.log(user)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8089/city/ad/updatecity`, requestOptions)
        let data = await response.json();
        console.log(data)
        alert("City Updated Successfully")
        //setData(data)
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ctdiv"><center>
      <h2>Update City Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="citycode">cityCode: &nbsp;&nbsp; </label>
        <input type="text" id="citycode" name="citycode" ref={refCityCode} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="cityname">cityName: &nbsp;&nbsp; </label>
        <input type="text" id="cityname" name="cityname" ref={refCityName} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="nuhotels">nuHotels: &nbsp;&nbsp; </label>
        <input type="text" id="nuhotels" name="nuhotels" ref={refNuHotels} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="nuSites">nuSites: &nbsp;&nbsp; </label>
        <input type="text" id="nuSites" name="nuSites" ref={refNuSites} />&nbsp;&nbsp;<br /><br />
        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form> </center>
    </div>

  );
}

export default UpdateCity;