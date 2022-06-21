import React from "react"
import "./About.css"

function About() {
    return (
        <div class="aboutdiv">
            <center><h1 class="ab"><h1><u>About Us</u></h1></h1></center>
            <p>
                <h2 class="ab"> Purpose</h2>
                <h4>Travelling is breathing, learning, and discovering a very beautiful way of life for you feel a new place and learn about life. travelling is to connect the new peoples the religions, culture and make the good relationship with them travelling is to give our new skills to knowing the unknowing and strangers.
                    People travel to get away from the usual routine of their life and to relax from the work life. Travelling also opens your mind to new experiences and to meet different people from different cultures. The world is a fascinating and beautiful and we should explore and learn from the places we visit to broaden our horizon and to live a fulfilled life.
                    Nowadays people often need a break from their busy lives to spend some time with family and friends or simply travel for their own purpose but never get satisfactory hotels, transport facilities and destination’s specifications in a single portal. This motivated us to create a HeritageExploration Service which helps the travelers experience a better and satisfactory journey and joy to explore the sites which they came for.
                </h4><br /><br />
                <h2 class="ab">
                    Product Scope
                </h2>
                <h4 class="ab">
                    The HeritageExploration Service can prove to be immensely useful for the travelers with no or little management facilities. There are annually 1652 million domestic travelers in our country according to the statistic provided by ministry of tourism. This huge number of travelers who need an affordable and comfortable facilities and don’t want to miss the site present nearby, can use this software to find their suitable option.
                </h4>
            </p><br /><br />
            <h2 class="ab">
                Overall Description
            </h2>
            <h4 class="ab">
                In this project we tried to provide a portal where all the travelers can explore the destination’s sites, hotels and Number of other sites present in that city.
                First of all, Login module will be presented where our two different users i.e. Admin and Normal customers can login if visiting first time, the registration is required to be done ,After registration login id and password is hand overed to the user. Using the login id and password an user can be distinguished and different access can be provided respectively.
                In the City module we tried display and collect the data of the city to the traveler where he/she is desired to travel. By performing this we try to show the traveler the places he/she can visit during their exploration. Also the sites available in that city is tried to present.
                In the Site Module we along with the collection of site details the number of other sites present nearby is shown also the number of Hotel present are shown. City code is used to match whether the same city’s sites are shown or not.
                In the Hotel Module the Hotel specification is presented also along with the data of rooms available and their per day price. In this module we tried to use Site or City code to implement.
            </h4>
        </div>
    )
}

export default About;