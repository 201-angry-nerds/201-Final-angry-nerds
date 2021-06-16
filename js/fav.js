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


   /* <div class="container">
        <img src="../images/card2.jpg" alt="Avatar" class="image" style="width:100%">
        <div class="middle">
          <div class="text">John Doe</div>
        </div>
      </div>*/
   function showing (){

       

       for (let i =0; i<allCities.length; i++){

           let city1 = document.createElement('img');
           let text1 = document.createElement('h6');
           let bookBtn=document.createElement('button');
         //  let a = document.createElement('a');
          // let link = document.createTextNode("Book Now !");
        /*   let bdiv = document.createElement('div');*/
          /* img1.appendChild(city1);
           img1.appendChild(text1);
           img1.appendChild(bdiv);
           bdiv.appendChild(a);*/
           //a.appendChild(link); 
           city1.setAttribute('src', allCities[i].source);
           text1.textContent = (allCities[i].name);
           //bookBtn.textContent='BookNow';
           
           //a.href= "http://127.0.0.1:5501/pages/blog.html"
          
           let container=document.createElement('div');
           container.setAttribute('id','container3');
           city1.setAttribute('id','image');
           container.appendChild(city1);
           let middle=document.createElement('div');
           middle.setAttribute('id','middle');
           let text=document.createElement('div');
           text.setAttribute('id','text');
           text.appendChild(text1);
           text.appendChild(bookBtn);
           bookBtn.addEventListener('click',visitPage);

           middle.appendChild(text);
           container.appendChild(middle);
           img1.appendChild(container);
           

       }
     

   }

   function visitPage(){
    window.location='../pages/booking.html';
}
  
  


   console.log(arrOfname);
   console.log(arrOffav);
function getChart (){
    var barColors = [
        "#642D06",
        "#A64B0A",
        "#853C09",
        "#C67234",
        "#EA853E",
        "#E1DBC3",
        "#ECB390",
        "#851800"

      ];
let ctx = document.getElementById('charts');
ctx.height=500;
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

