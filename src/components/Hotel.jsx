
import React, { useRef } from "react"


function Hotel() {

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
    const roomPrice = refRoomPrice.current.value

    const user = {
      hotelCode: hotelcode, cityCode: citycode, hotelName: hotelname, roomsAvailable: roomsavailable, roomPrice: roomprice
    }


    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzkxNjM3MSwiaWF0IjoxNjUzODk4MzcxfQ.OC2FlvvC5zVagYXjvhOYQ17bH_LevqAhTazL3bKG6aDhzd_r_1l0_YyaQr_xZWdXhOi7jQGG6k27KNhDH9Sw7A'

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8089/city/ad/addcity`, requestOptions)
        let data = await response.json();
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchApi()
  }

  return (

    <div><center>
      <h2>City Data</h2><br />

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
        <input type="submit" value="Submit" />
      </form> </center>
    </div>

  );
}

export default City;
