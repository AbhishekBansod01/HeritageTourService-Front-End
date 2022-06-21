import React, { useState } from "react"
import './GetHotel.css'

function GetHotel() {

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
        let response = await fetch(`http://localhost:8087/hotel/ad/getallhotels`, requestOptions)
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
        <h2>Hotel Data</h2>

        <form onSubmit={handleSubmit}  >

          <input type="submit" class="button3" value="Get Data" />
        </form><br /><br />

        <table>

          <tr>
            <th><center>Hotel Code</center></th>
            <th><center>City Code</center></th>
            <th><center>Hotel Name</center></th>
            <th><center>Rooms Left</center></th>
            <th><center>Price/Day</center></th>
          </tr>

          {data.map(user => (

            <tr>
              <td>{user.hotelCode}</td>
              <td>{user.cityCode}</td>
              <td>{user.hotelName}</td>
              <td>{user.roomsAvailable}</td>
              <td>{user.roomPrice}</td>
            </tr>
          ))}

        </table>
      </center>
    </div>

  );
}

export default GetHotel;