'use strict';

let allCities=[];
let arrOfname = [];
let saveArr =[];
let img1 = document.getElementById('favs');
let arrOffav = [];
// let return0 = [];

function Cities(name, source){
   this.name= name;
   this.source= source;
   arrOfname.push(this.name);
   allCities.push(this);
 }

let city1 = new Cities ('paris', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city2 = new Cities ('London', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city3 = new Cities ('Amman', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city4 = new Cities ('Rome', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city5 = new Cities ('Istanbul', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city6 = new Cities ('Dubai', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );
let city7 = new Cities ('New york', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city8 = new Cities ('Beirutt', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );

 function getFav(){

    let getCity =localStorage.getItem('Cities');
    let getting= JSON.parse(getCity);
    console.log(getCity);

    if (getting){
        
    allCities=getting;
    }
    
    for (let i=0; i<allCities.length; i++){
        
        arrOffav.push(getting[i].picks);

    }

    
 
  
//    console.log(arrOffav,'khaled');

   }

   getFav();
   showing();
   getChart();


   
   function showing (){

       

       for (let i =0; i<allCities.length; i++){

           let city1 = document.createElement('img');
           let text1 = document.createElement('h6');

           img1.appendChild(city1);
           img1.appendChild(text1);

           city1.setAttribute('src', allCities[i].source);
           text1.textContent = (allCities[i].name);
       }
     

   }

  
  


   console.log(arrOfname);
function getChart (){

let ctx = document.getElementById('charts');
let charts = new Chart(ctx, {
   type: 'bar',
   data: {
       labels: arrOfname,
       datasets: [
           {
           label: '# of favourite',
           data: arrOffav,
           backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
           ],
           borderWidth: 1
       },
    ]
   },
});
};