import React from 'react';

import './App.css';

import Card from './components/card/Card';
import Navbar from './components/Navbar/Navbar';
import NextCardd from './components/NextCard/nextcard';
import Memberss from './components/Members/members';
import PastCardd from './components/PastCard/pastcard';

function App() {
  const Pastcardview = [
    {
      id:0,
      date: "27 November 2017",
      deskripsi: "#39 JakartaJS April Meetup with Kumparan",
      went:139,
    },

    {
      id:1,
      date: "27 November 2018",
      deskripsi: "#39 JakartaJS April Meetup with Blibli",
      went:169,
    },
    {
      id:2,
      date: "27 November 2019",
      deskripsi: "#39 JakartaJS April Meetup with Hacktiv8",
      went:213,
    }
  ]
  
  return (

    
    <div className="App">
    
    < Navbar/>
    < Card location="Jakarta, Indonesia" members="1,078" organizer="Adhy Wiranata" />
    
    <h2>Next Meetup</h2>

    < NextCardd title="Awesome Meetup and event"/>

    <h2>About Meetup</h2>
        <p> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />

        <div>
          <h2>Members</h2> 
          <text className="SeeAll">See all</text><br />
        </div>

    < Memberss name="Adhy Wijaya" sum="1,041" />

    <h2>Past Meetup</h2> 
    <text className="SeeAll">See all</text><br />

    

  <div className="flex-container">
  <PastCardd data={Pastcardview}/>
  
  
</div>
  
  

    

    <hr></hr>
        <br />
        <center><text className="copyright">Copyright &copy; Hacktiv8 2020 </text></center>
        <br />
    </div>

    
    
  );
}

export default App;
