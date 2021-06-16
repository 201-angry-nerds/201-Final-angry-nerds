'use strict';
let allCities =[];
let img8 = document.getElementById('allimgs');



// let pdiv = document.createElement('div')
let imgtxt;
let imgplace;
let saveArr=[];
let arrOfname = [];
let count = 0;
let arrOfpicks = [];


function Cities(name, source, text){
  this.name= name;
  this.source= source;
  this.text= text;
  this.picks=0;
  allCities.push(this);
  arrOfname.push(this.name);
}


let city1 = new Cities ('Paris', '../images/Paris-Desktop-Wallpaper-Full-Hd-Pics-Backgrounds.jpg','Paris is not just the capital of France; its the capital of fashion and the city of love Located by the River Seine in the north of France, Paris is reputed for being the most beautiful and romantic city in the world. It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion. Europes most enchanting city, Paris is known for its many monuments, especially the Eiffel Tower, Notre-Dame Cathedral, Arc de Triomphe, Opéra Garnier, Les Invalides, etc.');

let city2 = new Cities ('Hawaii', '../images/hawaii.jpg'
,'Their beauty unparalleled, Hawaii’s natural resources are among the most precious in the world and one of the greatest assets to our quality of life in the Islands. Hawaii is a special place, with a blend of cultures, activities, and experiences unique in the world. These islands have drawn the attention of travel marketers and journalists throughout the years.');
let city3 = new Cities ('Antalya', '../images/antalya.jpg'
,'Situated on the Mediterranean coast, Antalya is one of the picturesque cities of southwestern Turkey. Located approximately 334 miles and 453 miles away from Ankara and Istanbul respectively, Antalya is well connected by number of motorways. With city’s expansive 547 sq mi of land area comprising of numerous worth seeing attractions such as, shopping avenues, monuments, beaches, and museums.');
let city4 = new Cities ('Milano', '../images/MILANO.jpg'
, 'The city boasts several popular tourist attractions, such as the citys Duomo and Piazza, the Teatro alla Scala, the San Siro Stadium, the Galleria Vittorio Emanuele II, the Castello Sforzesco, the Pinacoteca di Brera and the Via Montenapoleone. Milan has good entertainment and cultural opportunities (i.e. shopping, cuisine, music, nightlife and the arts) and that leisure activities are organized well and to a professional level.');
let city5 = new Cities ('Barcelona', '../images/Wallpaper barcelona spain a city wallpapers city   download.jpg'
, 'Located on the Mediterranean coast, Barcelona is one of the world’s most popular tourist destinations. This cosmopolitan city is also one of Spain’s most important economic, cultural and commercial hubs, attracting both leisure and business tourism from all over the globe. Every year, thousands of tourists visit Barcelona to discover its uniqueness or attend numerous conferences, committees and other types of meetings.');
let city6 = new Cities ('Malaysia', '../images/malysia.jpg' 
, 'Malaysia was once ranked 9th in the world for tourist arrivals.In 1999, Malaysia launched a worldwide marketing campaign called "Malaysia, Truly Asia" which was largely successful and brought in over 7.4 million tourists.');
let city7 = new Cities ('Maui', '../images/maui.jpg'
, 'maui’s natural beauty and exceptional camping locations are truly epic. we make your outdoor vacation experience even better with clean, comfortable, capable and reliable camper conversions.');
let city8 = new Cities ('Tahiti', '../images/186929.jpg'
, 'The Islands of Tahiti certified "Safe Travels" Located in the Pacific Ocean, The Islands of Tahiti are a mythical destination. The mention of Tahiti calls to mind visions of an idyllic island paradise and once you visit, youll discover that your imagination isnt too off the mark.');
// Cities.prototype.render = function (){


function render(){
  for (let i =0; i<allCities.length ; i++) {
    imgplace = document.createElement('img');
    imgtxt = document.createElement('h6');
   let hoveredDiv=document.createElement('div');
    let paragragh = document.createElement('p');
    let imgdiv = document.createElement('div');
    let btn = document.createElement('button');
    
    paragragh.setAttribute('id','myParaghraph');
    imgplace.setAttribute('id','myImg');
    hoveredDiv.setAttribute('id','middle');
    imgdiv.setAttribute('id','container')
  
  
  img8.appendChild(imgdiv);
  btn.setAttribute('id',i);
  btn.textContent = ('Favorite');
  
  
  imgdiv.appendChild(imgplace);
  imgdiv.appendChild(imgtxt);
  // imgdiv.appendChild(paragragh);
  imgdiv.appendChild(hoveredDiv);
  hoveredDiv.appendChild(paragragh);

    imgdiv.appendChild(btn);
    imgplace.setAttribute('src', allCities[i].source);
    imgtxt.textContent = (allCities[i].name);
    paragragh.textContent = (allCities[i].text);


    // btn.setAttribute('src', allCities[i].button);
    btn.addEventListener('click' , addfav);
  }

 
 
}
render();


// function fortext(){
//   for (let i =0; i<allCities.length ; i++){
      
// if (allCities[i].name === 'Paris') {
//   let paragragh = document.createElement('p');
//   img8.appendChild(imgdiv);
//   imgdiv.appendChild(paragragh);
//   paragragh.textContent = ('Paris is not just the capital of France; its the capital of fashion and the city of love Located by the River Seine in the north of France, Paris is reputed for being the most beautiful and romantic city in the world. It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion. Europes most enchanting city, Paris is known for its many monuments, especially the Eiffel Tower, Notre-Dame Cathedral, Arc de Triomphe, Opéra Garnier, Les Invalides, etc.')
// }
// }
// }

// fortext();





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
function addfav(event){
  let id = event.target.id;
  console.log(id);
  saveArr.push(allCities[id]);
  saveToLS(saveArr);
}
}
//   console.log(allCities);
function saveToLS(id){
  let setjson = JSON.stringify(id);
  localStorage.setItem('Cities',setjson);
  console.log(setjson);

}






