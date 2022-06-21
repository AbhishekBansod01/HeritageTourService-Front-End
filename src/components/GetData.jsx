import React, { useEffect, useState } from 'react'
import axios from 'axios';

function GetData() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8084/city/cu/getallcities')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <>
            <div class="container"><br />
                <h2 style={{ textAlign: 'center' }} > Cities Available</h2><br />
                <table class="table table-striped table table-hover">
                    <thead>
                        <tr>

                            <th >City Code</th>
                            <th >City Name</th>
                            <th >Number of Hotels</th>
                            <th >Number of Sites</th>
                        </tr>
                    </thead>

                    <tbody>{posts.map(post => (
                        <tr>
                            <td>{post.cityCode}</td>
                            <td>{post.cityName}</td>
                            <td>{post.nuHotels}</td>
                            <td>{post.nuSites}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </>

    )
}
export default GetData;

