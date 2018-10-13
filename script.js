// write your JS code here
let alphabets = ["A","B","C", "D","E","F","G","H","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function initialize(){
    let divEl = document.querySelector(".card-body");
    for ( let i=0; i< 26;i++){
        divEl.innerHTML += ` <div class="button" onclick='getAction($alphabets[i]}'>${alphabets[i]}
       </div>`
       
    }
  
    }  
    function sent(){
        let alertMsg = document.querySelector(".enter-button");
       alert("Your message has been sent");
    }
  
    let a = 26;
let spacee = " ";

function space(a) {
	document.querySelector(`.form-control`).innerHTML += `${spacee}`;
}


    
