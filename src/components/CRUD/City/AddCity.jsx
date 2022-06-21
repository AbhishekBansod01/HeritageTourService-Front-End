import React, { useRef } from "react"
import './AddCity.css'

function AddCity() {
  //const [ data,setData]=useState([])
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8089/city/ad/addcity`, requestOptions)
        let data = await response.json();

        console.log(data)
        alert("City Added Successfully")
        // setData(data)    

      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (
    <div className="ctdiv" data-testid="AddCitytest"><center>
      <h2>Enter City Data</h2><br />
      <form onSubmit={handleSubmit}  >
        <label htmlFor="citycode">City Code: &nbsp;&nbsp; </label>
        <input type="text" id="citycode" name="citycode" ref={refCityCode} autoComplete={"off"} autoFocus required />&nbsp;&nbsp;<br /><br />
        <label htmlFor="cityname">City Name: &nbsp;&nbsp; </label>
        <input type="text" id="cityname" name="cityname" ref={refCityName} required autoComplete={"off"} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="nuhotels">Number of Hotels: &nbsp;&nbsp; </label>
        <input type="number" id="nuhotels" name="nuhotels" ref={refNuHotels} max={1000} autoComplete={"off"} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="nuSites">Number of Sites: &nbsp;&nbsp; </label>
        <input type="number" id="nuSites" name="nuSites" ref={refNuSites} autoComplete={"off"} />&nbsp;&nbsp;<br /><br />
        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form></center>
    </div>

  );
}

export default AddCity;
