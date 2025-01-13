// const grey = document.querySelector(" #grey") ;
// const white = document.querySelector(" #white") ; 
// const blue = document.querySelector(" #blue") ; 
// const yellow = document.querySelector(" #yellow")  ;

const body = document.querySelector("body")

// grey.addEventListener("click",()=>{
//   body.style.backgroundColor = "grey";
// })
// white.addEventListener("click",()=>{
//   body.style.backgroundColor = "white";
// })
// blue.addEventListener("click",()=>{
//   body.style.backgroundColor = "blue";
// })
// yellow.addEventListener("click",()=>{
//   body.style.backgroundColor = "yellow";
// })

const button = document.querySelectorAll(".button");

button.forEach((eve)=>{
  eve.addEventListener("click",(e)=>{
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'white')
    { 
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'blue')
    { 
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'yellow')
    { 
      body.style.backgroundColor = e.target.id;
    }

  })
  
  // })
  // else if(e.target.id === 'grey')
  // body.style.backgroundColor = e.target.id;
  // })
  
})