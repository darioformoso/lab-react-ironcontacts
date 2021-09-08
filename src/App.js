
import {useState} from 'react';
import './App.css';
import contacts from "./contacts.json";


function App() {
  
  
  // Variables
  
  let [actors,setActors] =useState(contacts.slice(0,5)); //Grabbing the first 5 objects on the array
  
  
  // Functions:
  
  // Function that loops through the objects and adds to the table 
  function ShowTable(){
      let list= actors.map(actor=>{
      return (
          <tr>
              <td><img src={actor.pictureUrl} alt="pic" width="20%" height="20%"/></td>
              <td>{actor.name}</td>
              <td>{actor.popularity}</td>
              <td><button onClick={DeleteActor}>Delete</button></td>
          </tr>
    )
  })
  return list
}

// Function that picks a Random Contact
function RandomContact(){
    let randomNum=Math.floor(Math.random() *(contacts.length-1));//Getting a random object inside the array
    let newContact=contacts[randomNum];
    contacts.splice(randomNum,1)
   
    let copyOfActors=[...actors];
    copyOfActors.push(newContact);
    setActors(copyOfActors);

}
// Function that Sorts By Name
function SortName(){
  let copyOfActors=[...actors];

  copyOfActors.sort((a,b)=>{
return (a.name).localeCompare(b.name)
  })
  
  setActors(copyOfActors);
}


// Function that Sorts By Popularity
function SortPopularity(){
  let copyOfActors=[...actors];

  copyOfActors.sort((a,b)=>{
return b.popularity-a.popularity
  })
  
  setActors(copyOfActors);

}

// Function to delete an actor
function DeleteActor(i){
  let copyOfActors=[...actors];
  copyOfActors.splice(i,1);
  setActors(copyOfActors);
  
}


// Webpage
return (
  <div className="App">

<h1>IronContacts</h1>
{/* Buttons */}
<button onClick={RandomContact}>Add Random Contact</button>
<button onClick={SortName}>Sort By Name</button>
<button onClick={SortPopularity}>Sort By Popularity</button>


{/* Table */}
<table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
  </tr>
  <ShowTable/>

  
</table>




 </div>
);
}




export default App;
