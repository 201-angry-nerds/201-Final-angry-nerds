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

let city1 = new Cities ('Paris', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city2 = new Cities ('Hawai', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city3 = new Cities ('Antalia', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city4 = new Cities ('Milano', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city5 = new Cities ('Barcelona', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city6 = new Cities ('Malysia', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );
let city7 = new Cities ('Maui', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1');
let city8 = new Cities ('Tahiti', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1' );

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
          //  let btn = document.createElement('button');
           let a = document.createElement('a');
           let link = document.createTextNode("Book Now !");
           let bdiv = document.createElement('div');



           img1.appendChild(city1);
           img1.appendChild(text1);
           img1.appendChild(bdiv);
           bdiv.appendChild(a);
           a.appendChild(link); 

          //  btn.appendChild(a);
          //  btn.appendChild(a);

           city1.setAttribute('src', allCities[i].source);
           text1.textContent = (allCities[i].name);
           
          //  btn.textContent = ('Book Now!');
           a.href= "http://127.0.0.1:5501/pages/blog.html"
          

       }
     

   }

  
  


   console.log(arrOfname);
   console.log(arrOffav);
function getChart (){
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"

      ];
let ctx = document.getElementById('charts');

new Chart("charts", {
    type: "doughnut",
    data: {
      labels: arrOfname,
      datasets: [{
        backgroundColor: barColors,
        data: [15,9,4,16,20,30,6,7]
      }]
    },
    options: {
      title: {
        display: true,
        text: "# of fav"
      }
    }
  });
}