'use strict'
let season = document.getElementById('recommendations');
let trip = document.getElementById('tripdate');
let form = document.getElementById('vacation');
let summer = 6;
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
new Recomendcity ('Miami', '../images/Maiami.png', 'lorem');
new Recomendcity ('Nice', '../images/Nice.png', 'lorem');
new Recomendcity ('Cape Town', '../images/capetown.png', 'lorem');
new Recomendcity ('Rome', '../images/Rome.png', 'lorem');
new Recomendcity ('Dublin', '../images/Dublin.png', 'lorem');
new Recomendcity ('San Sebastian', '../images/san.jpg', 'lorem');
new Recomendcity ('Porto', '../images/Porto.png', 'lorem');
new Recomendcity ('KRK Island', '../images/krk.png', 'lorem');
new Recomendcity ('Transylvania', '../images/Transylvania.jpg', 'lorem');
new Recomendcity ('Bavaria', '../images/baravia.jpg', 'lorem');
new Recomendcity ('Colorado', '../images/Colorado.jpg', 'lorem');
new Recomendcity ('Prague', '../images/Prague.jpg', 'lorem');
new Recomendcity ('Dubai', '../images/Dubai.jpg', 'lorem');
new Recomendcity ('Kuala Lumpur', '../images/kualalambur.jpg', 'lorem');
new Recomendcity ('Candy', '../images/candy.jpeg', 'lorem');
new Recomendcity ('Maldives', '../images/Maldevies.jpg', 'lorem');
let seasonArr = [];
for( let i= 0; i<Recomendcity.recCity.length;i+=4){
  //seasonArr[i] =Recomendcity.recCity.slice(i, i+4);
  seasonArr.push(Recomendcity.recCity.slice(i, i+4)) ;


  console.log(seasonArr);
}


/* <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div> */
//let mySlideDiv=document.getElementById('mySlides');

/*
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
*/
let caption=document.getElementById('text');
function recomend(e){
  e.preventDefault();
  console.log(e);
  let dateVal= e.target.tripdate.value;
  let compDate = parseInt(dateVal.split('-')[1]);
  console.log(compDate);

  // for (let x= 0; x<seasonArr.length; x++){
  if(compDate<=summer && compDate>=sprgTime){//spring
    for(let i=0; i<seasonArr.length;i++){
      let mySlideDiv=document.createElement('div');
      mySlideDiv.setAttribute('class','mySlides');
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      //season.appendChild(img);
     //season.appendChild(h4);

      img.setAttribute('src', seasonArr[0][i].src);
      h4.textContent = seasonArr[0][i].name;
      //caption.appendChild(h4);

      mySlideDiv.appendChild(img);
      mySlideDiv.appendChild(caption);

      season.appendChild(mySlideDiv);

      //console.log(img);
    }
    currentSlide(0);
  }else if(compDate<=fall && compDate>summer){//summer
    for(let i=0; i<seasonArr.length;i++){
      let mySlideDiv=document.createElement('div');
      mySlideDiv.setAttribute('class','mySlides');
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      //season.appendChild(img);
     //season.appendChild(h4);
      img.setAttribute('src', seasonArr[1][i].src);
      h4.textContent = seasonArr[1][i].name;
      season.appendChild(mySlideDiv);
      mySlideDiv.appendChild(img);

      //console.log(img);
    }
    currentSlide(0);

  }else if(compDate<=winter && compDate>fall){//fall
    for(let i=0; i<seasonArr.length;i++){
      let mySlideDiv=document.createElement('div');
      mySlideDiv.setAttribute('class','mySlides');
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      //season.appendChild(img);
     //season.appendChild(h4);
     
      img.setAttribute('src', seasonArr[2][i].src);
      h4.textContent = seasonArr[2][i].name;
      season.appendChild(mySlideDiv);
      mySlideDiv.appendChild(img);

      //console.log(img);
    }
    currentSlide(0);

  }else{
    for(let i=0; i<seasonArr.length;i++){
      let mySlideDiv=document.createElement('div');
      mySlideDiv.setAttribute('class','mySlides');
      let img = document.createElement('img');
      let h4 = document.createElement('h4');
      //season.appendChild(img);
     //season.appendChild(h4);
      img.setAttribute('src', seasonArr[3][i].src);
      h4.textContent = seasonArr[3][i].name;
      season.appendChild(mySlideDiv);
      mySlideDiv.appendChild(img);

      //console.log(img);
    }
    currentSlide(0);

  }
}
form.addEventListener('submit', recomend);

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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}