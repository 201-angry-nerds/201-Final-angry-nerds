'use strict'
let rate1=document.getElementById('rate-1');
let rate2=document.getElementById('rate-2');
let rate3=document.getElementById('rate-3');
let rate4=document.getElementById('rate-4');
let rate5=document.getElementById('rate-5');

const widget = document.getElementById("star-widget");
  const editBtn = document.getElementById("edit");
  editBtn.addEventListener('click',handleClicking2);
let blogForm=document.getElementById('box3');
let ParentDivEl=document.getElementById('box4');
let starCount=0;
let count=0;
function BlogPost(name,url,textPost,rates)
{
this.name=name;
this.url=url;
this.textPost=textPost;
this.rates=rates;
BlogPost.allPosts.push(this);
savingToLs();
}
BlogPost.allPosts=[];
/* new BlogPost('farah','hi',"descripthion");
console.log(BlogPost.allPosts); */
function getDataHandler(event){
    const Posts=event.target;
    const nameS=Posts.name.value;
    const urlS=Posts.url.value;
    const textPostS=Posts.blogText.value;

    widget.style.display = "none";


    if(rate1.checked === true){
        console.log('one star selected');
        starCount=1;

    }
    else   if(rate2.checked === true){
        console.log('two stars selected');
        starCount=2;
    }
    else   if(rate3.checked === true){
        console.log('three stars selected');
        starCount=3;
    }
    else   if(rate4.checked === true){
        console.log('four stars selected');
        starCount=4;
    }
    else if(rate5.checked === true){
        console.log('five stars selected');
        starCount=5;
    }
    count=starCount;
    //console.log(count);

    const starS=count;

    new BlogPost(nameS,urlS,textPostS,starS);
    render();
  }
  function handleClicking2(event){
      widget.style.display = "block";
    return false;
  }
    //console.log(event);
 function render(){

    console.log(BlogPost.allPosts);
     for(var i=0;i<BlogPost.allPosts.length;i++){
        let childDiv=document.createElement('div');
        childDiv.setAttribute('id','box2');
        ParentDivEl.appendChild(childDiv);
        let imgEl=document.createElement('img');
        imgEl.setAttribute('id','imageBlog');
        imgEl.src=`${BlogPost.allPosts[i].url}`;
        childDiv.appendChild(imgEl);
        let h2El=document.createElement('h2');
        h2El.textContent=`${BlogPost.allPosts[i].name}`;
        childDiv.appendChild(h2El);
        let postAreaEl=document.createElement('p');
        postAreaEl.textContent=`${BlogPost.allPosts[i].textPost}`;
        childDiv.appendChild(postAreaEl);
        let nestedDiv=document.createElement('div');
        childDiv.appendChild(nestedDiv);
      //  console.log(BlogPost.allPosts);
      //console.log(BlogPost.allPosts[i].rates);
      for (let x = 0; x <BlogPost.allPosts[i].rates; x++) {
       
        let label=document.createElement('label');
        label.setAttribute('for','rate');
        label.setAttribute('class','fas fa-star');
        label.setAttribute('id',`star${x}`);
        label.style.color='gold';
        let input=document.createElement('input');
        input.setAttribute('type','radio');
        input.setAttribute('name','rate');
        input.style.display='none';
        nestedDiv.appendChild(input);
        nestedDiv.appendChild(label);
        //console.log(label.id);
      // console.log(starCount);
      }

 
     }
     //console.log(starCount);

    
 }
function savingToLs(){
    let convertedArr = JSON.stringify(BlogPost.allPosts); 
    localStorage.setItem('posts',convertedArr);
  }
  function gettingPostsFromLs(){
    let data = localStorage.getItem('posts');
    //console.log(data);
    let parsedOrder = JSON.parse(data);
   // console.log(parsedOrder);
    if(parsedOrder){ 
      BlogPost.allPosts=parsedOrder;
      render();
      }
    }
    gettingPostsFromLs();
blogForm.addEventListener('submit',getDataHandler);
let navB=document.getElementById('navButton');
let aEl=document.getElementById('aEl');
navB.addEventListener('click',openNav);
aEl.addEventListener('click',closeNav);
// show form when button clicked.
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
