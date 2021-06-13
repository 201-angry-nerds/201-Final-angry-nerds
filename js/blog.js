'use strict'

let blogForm=document.getElementById('box3');
let ParentDivEl=document.getElementById('box4');
function BlogPost(name,url,textPost)
{
this.name=name;
this.url=url;
this.textPost=textPost;
BlogPost.allPosts.push(this);
savingToLs();

}

BlogPost.allPosts=[];

/* new BlogPost('farah','hi',"descripthion");

console.log(BlogPost.allPosts); */

function getDataHandler(event){
    event.preventDefault();
    const Posts=event.target;
    const nameS=Posts.name.value;
    const urlS=Posts.url.value;
    const textPostS=Posts.blogText.value;
    new BlogPost(nameS,urlS,textPostS);
    render();


}

 function render(){
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
        console.log(BlogPost.allPosts);
     }
  
 }

function savingToLs(){
    
    let convertedArr = JSON.stringify(BlogPost.allPosts); 
    localStorage.setItem('posts',convertedArr);
  }
  
  
  function gettingPostsFromLs(){
    let data = localStorage.getItem('posts');
    console.log(data);
    let parsedOrder = JSON.parse(data);
    console.log(parsedOrder);

  
    
    if(parsedOrder){ 
      BlogPost.allPosts=parsedOrder;
      }
  render();
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

