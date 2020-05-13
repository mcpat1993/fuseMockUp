import React from 'react';
import './App.css';
import myData from './lmF1ei63zjlOvYbSRIdU.json';
import CardGroup from './CardGroup';



function renderCardGroups(){
  //first we'll take our data and order it by root cards and aggregate the children
  //in an object keyed with the id of the corresponding parent
  var rootList = [];
  var rootChildren = {};
  var i;
  for (i=0; i<myData.length; i++) {
    if (myData[i].edge.type === 0) {
      rootList.push(myData[i]);
    }else if (myData[i].edge.type === 2){
      if (myData[i].edge.parent in rootChildren){
        rootChildren[myData[i].edge.parent].push(myData[i]);
      }else{
        rootChildren[myData[i].edge.parent] = [myData[i]];
      }
    }
  }


  const elements = []

  //here I sort the rootList so the it is descending order of the edge.order value
  //we'll also populate elements with a CardGroup component with the ordered data
  rootList.sort(function(a,b){return b.edge.order-a.edge.order});
  var j;
  for (j=0; j<rootList.length; j++) {
    rootChildren[rootList[j].id].sort(function(a,b){return b.edge.order-a.edge.order})
    elements.push(<CardGroup parent={rootList[j]}
                            children={rootChildren[rootList[j].id]} />)
  }

  return (
    <div>
      {elements}
    </div>
  )
}


function App() {
  
  return (

      <body className="App-header">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
         {renderCardGroups()}
      </body>
  );
}

export default App;
