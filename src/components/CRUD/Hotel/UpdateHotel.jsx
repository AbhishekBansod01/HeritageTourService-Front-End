
import React, { useRef } from "react"
import './AddCity.css'

function AddHotel() {
  //const [ data,setData]=useState([])
  const refHotelCode = useRef('');
  const refCityCode = useRef('');
  const refHotelName = useRef('');
  const refRoomsAvailable = useRef('');
  const refRoomPrice = useRef('');


  const handleSubmit = (e) => {
    e.preventDefault()
    const hotelcode = refHotelCode.current.value
    const citycode = refCityCode.current.value
    const hotelname = refHotelName.current.value
    const roomsavailable = refRoomsAvailable.current.value
    const roomprice = refRoomPrice.current.value
    const token = localStorage.getItem('token')
    const user = {
      hotelCode: hotelcode, cityCode: citycode, hotelName: hotelname, roomsAvailable: roomsavailable, roomPrice: roomprice
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
        let response = await fetch(`http://localhost:8087/hotel/ad/updatehotel`, requestOptions)
        let data = await response.json();

        console.log(data)
        alert("Hotel Updated Successfully")
        // setData(data)    

      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ctdiv"><center>
      <h2>Enter Hotel Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="hotelcode">hotelCode: &nbsp;&nbsp; </label>
        <input type="text" id="hotelcode" name="hotelcode" ref={refHotelCode} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="citycode">cityCode: &nbsp;&nbsp; </label>
        <input type="text" id="citycode" name="citycode" ref={refCityCode} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="hotelname">hotelName: &nbsp;&nbsp; </label>
        <input type="text" id="hotelname" name="hotelname" ref={refHotelName} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="roomsavailable">roomsAvailable: &nbsp;&nbsp; </label>
        <input type="text" id="roomsavailable" name="roomsavailable" ref={refRoomsAvailable} />&nbsp;&nbsp;<br /><br />
        <label htmlFor="roomprice">roomPrice: &nbsp;&nbsp; </label>
        <input type="text" id="roomprice" name="roomprice" ref={refRoomPrice} />&nbsp;&nbsp;<br /><br />
        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form> </center>
    </div>

  );
}

export default AddHotel;
