import React from 'react';
import logo from './logo.svg';
import './App.css';
import myData from './lmF1ei63zjlOvYbSRIdU.json';
import Card from './Card';
// import './Parent';

// function renderCard(cardData){
//   if(typeof(cardData.title) === "undefined"){
//     // The property DOESN'T exists
//   }else{
//     return (<Card title=cardData.title/>);
//   }
// }


function renderCards(){

  console.log("renderCards called");
  var rootList = [];
  var i;
  for (i=0; i<myData.length; i++) {
    if (myData[i].title != "") {
      rootList.push(myData[i]);
    }
  }

  console.log(rootList.map);
  return (rootList.map(item=>(
    <Card title={item.title}
          usernote={item.userNote}
          background={item.content.screenshot}
          />)));
}


function App() {
   // var request = new XMLHttpRequest();
   // request.open("GET", "../public/lmF1ei63zjlOvYbSRIdU.json", false);
   // request.send(null)
   // var my_JSON_object = JSON.parse(request.responseText);
   // alert(my_JSON_object);
  
  return (

    <div className="App">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <header className="App-header">
        <div>
            {renderCards()}
        </div>
      </header>
    </div>
  );
}

export default App;
