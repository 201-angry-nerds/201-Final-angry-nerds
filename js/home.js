`use strict`;
let season = document.getElementById('recommendations');
let trip = document.getElementById('tripdate');
let form = document.getElementById('vacation');
let summer = 6;
console.log(summer);
let sprgTime = 3;
let fall = 9;
let winter = 12;
// split
// let img = document.createElement('img');
// let h4 = document.createElement('h4');
// let det = document.createElement('p');
function Recomendcity(name, src, disc){
  this.name = name;
  this.src= src;
  this.disc=disc;
  Recomendcity.recCity.push(this);
}
Recomendcity.recCity=[];
new Recomendcity ('Miami', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Nice', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Cape Town', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Rome', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Dublin', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('San Sebastian', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Porto', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('KRK Island', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Transylvania', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Bavaria', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Colorado', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Prague', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Dubai', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Kuala Lumpur', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Candy', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
new Recomendcity ('Maldives', 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1', 'lorem');
console.log(Recomendcity.recCity);
// let arrOfDates=[];
// dateSumbit.addEventListener('submit', recomend);
// function saveDate(){
//   arrOfDates.push(trip);
//}
// let length = Recomendcity.recCity.length;
// let seasonArr = [];
// let index = 0
// while (index<length){
//   let tem = slice(Recomendcity.recCity, index);
//   seasonArr.push(tem);
//   index+=4;
//}
let seasonArr = [];
for( let i= 0; i<Recomendcity.recCity.length;i+=4){
  seasonArr =Recomendcity.recCity.slice(i, i+4);
  console.log(seasonArr);
}
form.addEventListener('submit', recomend);
function recomend(e){
  e.preventDefault();
  console.log(e);
  let dateVal= e.target.tripdate.value;
  let compDate = parseInt(dateVal.split('-')[1]);
  console.log(compDate);
  // for (let x= 0; x<seasonArr.length; x++){
  if(compDate<=summer && compDate>=sprgTime){//spring
    for(let i=0; i<seasonArr.length;i++){
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      season.appendChild(img);
      season.appendChild(h4);
      img.setAttribute('src', seasonArr[i].src);
      h4.textContent = seasonArr[i].name;
      console.log(img);
    }
  }else if(compDate<=fall && compDate>summer){//summer
    for(let i=0; i<seasonArr.length;i++){
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      season.appendChild(img);
      season.appendChild(h4);
      img.setAttribute('src', seasonArr[i].src);
      h4.textContent = seasonArr[i].name;
      console.log(img);
    }
  }else if(compDate<=winter && compDate>fall){//fall
    for(let i=0; i<seasonArr.length;i++){
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      season.appendChild(img);
      season.appendChild(h4);
      img.setAttribute('src', seasonArr[i].src);
      h4.textContent = seasonArr[i].name;
      console.log(img);
    }
  }else{
    for(let i=0; i<seasonArr.length;i++){
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      season.appendChild(img);
      season.appendChild(h4);
      img.setAttribute('src', seasonArr[i].src);
      h4.textContent = seasonArr[i].name;
      console.log(img);
    }
  }
}
//}
// Date.prototype.getUTCDate = function(){
//   if(crrnt <summer && crrnt>sprgTime){
//     for(let i=0;i< i+2;i++){
//       season.appendChild(img);
//       season.appendChild(h4);
//       season.appendChild(det);
//       img.setAttribute('src', Recomendcity.recCity[i].this.src);
//       h4.textContent= Recomendcity.recCity[i].this.name;
//       det.textContent = Recomendcity.recCity[i].this.disc;
//     }
//   }
// };
// this.getUTCDate();

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//navB.addEventListener('click',myFunction);
