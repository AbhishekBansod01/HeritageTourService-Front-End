
import React, { useRef } from "react"
import './UpdateSite.css'

function UpdateSite() {
  const refSiteCode = useRef('');
  const refCityCode = useRef('');
  const refSiteName = useRef('');
  const refSiteDescription = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const sitecode = refSiteCode.current.value
    const citycode = refCityCode.current.value
    const sitename = refSiteName.current.value
    const sitedesc = refSiteDescription.current.value

    const token = localStorage.getItem('token')
    const user = {
      siteCode: sitecode, cityCode: citycode, siteName: sitename, sitedescription: sitedesc
    }


    console.log(user)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8085/site/ad/updateSite`, requestOptions)
        let data = await response.json();
        console.log(data)
        alert("Site Updated Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ctdiv"><center>
      <h2>Enter Site Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="sitecode">siteCode: &nbsp;&nbsp; </label>
        <input type="text" id="sitecode" name="sitecode" ref={refSiteCode} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="citycode">cityCode: &nbsp;&nbsp; </label>
        <input type="text" id="citycode" name="citycode" ref={refCityCode} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="sitename">siteName: &nbsp;&nbsp; </label>
        <input type="text" id="sitename" name="sitename" ref={refSiteName} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="sitedesc">sitedescription: &nbsp;&nbsp; </label>
        <input type="text-area" id="sitedesc" name="sitedesc" ref={refSiteDescription} />&nbsp;&nbsp;<br /><br />
        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form> </center>
    </div>

  );
}

export default UpdateSite;


