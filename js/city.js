'use strict';
let allCities =[];
let img8 = document.getElementById('allimgs');
let imgtxt;
let imgplace;
let saveArr=[];
let arrOfname = [];
let count = 0;
let arrOfpicks = [];


function Cities(name, source){
  this.name= name;
  this.source= source;
  this.picks=0;
  allCities.push(this);
  arrOfname.push(this.name);
}


// let city1 = new Cities ('paris', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city2 = new Cities ('London', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city3 = new Cities ('Amman', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city4 = new Cities ('Rome', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city5 = new Cities ('Istanbul', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city6 = new Cities ('Dubai', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );
let city7 = new Cities ('New york', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city8 = new Cities ('Beirutt', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );
// Cities.prototype.render = function (){


function render(){
  for (let i =0; i<allCities.length ; i++) {
    imgplace = document.createElement('img');
    imgtxt = document.createElement('h6');
    let btn = document.createElement('button');
    btn.setAttribute('id',i);
    btn.textContent = ('favorite <3')
    img8.appendChild(imgplace);
    img8.appendChild(imgtxt);
    img8.appendChild(btn);
    imgplace.setAttribute('src', allCities[i].source);
    imgtxt.textContent = (allCities[i].name);
    // btn.setAttribute('src', allCities[i].button);
    btn.addEventListener('click' , addfav);
  }
} 
render();




  function addfav(event){
  
    let id = event.target.id;
    // console.log(id);
    allCities[id].picks++;

    saveArr.push(allCities[id]);
    saveToLS(saveArr);
    // console.log(saveArr,'valencia');
    
  }

 
//   console.log(allCities);
function saveToLS(id)
{
    let setjson = JSON.stringify(id);
    localStorage.setItem('Cities',setjson);
   console.log(setjson);
}






