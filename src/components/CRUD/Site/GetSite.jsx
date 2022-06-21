import React, { useState } from "react"
import './GetSite.css'

function GetSite() {

  const [data, setData] = useState([])
  //const [token,setToken]=useState(initialToken)

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')



    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA',
        'Authorization': `Bearer ${token}`,
      },
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8085/site/ad/getallsites`, requestOptions)
        let data = await response.json();
        console.log(data)
        setData(data)
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()




  }

  return (

    <div class="ctdiv1">
      <center>
        <h2>Site Data</h2>

        <form onSubmit={handleSubmit}  >

          <input type="submit" class="button3" value="Get Data" />
        </form><br /><br />

        <table>

          <tr>
            <th><center>Site Code</center></th>
            <th><center>City Code</center></th>
            <th><center>Site Name</center></th>
            <th><center>Site Description</center></th>

          </tr>

          {data.map(user => (



            <tr>
              <td>{user.siteCode}</td>
              <td>{user.cityCode}</td>

              <td>{user.siteName}</td>

              <td>{user.sitedescription}</td>


            </tr>





          ))}

        </table>
      </center>
    </div>

  );
}

export default GetSite;