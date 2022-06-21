import React, { useRef } from "react"
import './DeleteSite.css'

function DeleteSite() {

  const refSiteCode = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const sitecode = refSiteCode.current.value
    const token = localStorage.getItem('token')
    const user = {
      siteCode: sitecode
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
        let response = await fetch(`http://localhost:8085/site/ad/deleteSite/${sitecode}`, requestOptions) //,,{Credential:'siteCode'}
        let data = await response.json();
        console.log(data)
        alert("Deleted Site Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ctdiv"><center>
      <h2>Delete Site Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="sitecode">siteCode: &nbsp;&nbsp; </label>
        <input type="number" id="sitecode" name="sitecode" ref={refSiteCode} />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
      </form> </center>
    </div>

  );
}

export default DeleteSite;