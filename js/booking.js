
let alert1=document.getElementById('alert1');
//alert1.preventDefault();
alert1.addEventListener('click',alertS);

function alertS(){
    Swal.fire({  icon: 'success',  title: 'Oops...',  text: 'Something went wrong!',  footer: '<a href>Why do I have this issue?</a>'})   
    alert('hello from function!');

  }



  


