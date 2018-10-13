// Write all your Javascript here!
let d = new Date();
let months = ["January", "Feburary","March","April", "May", "August", "September", "October", "November", "December"];

$.ajax({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang`,
    success :function(data){
        console.log(data);
    
        let info = document.querySelector(".card-1");
        info.innerHTML += `
        <div class="card">
        <img class="card-img-top" src="${data.imageURL}" alt="flower image">
        <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <i class="fas fa-calendar-alt"></i> ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m 
    <i class="fas fa-user"></i>
     by <a>TechKaro Community</a></li>
            </ul>
       <div class="card-body">
       <h5 class="card-title">${data.info.heading}</h5>
       <p class="card-text">${data.info.description}</p>
   </div>
       </div>`
       document.querySelector(".sale-title").innerHTML = data.sale.heading;
       document.querySelector(".sale-desc").innerHTML = data.sale.description;  

    }
})
function changeLang(langCode){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${langCode}`,
        success:function(data){
            document.querySelector(".navbar-nav").innerHTML = 
            `
            <a class="nav-item nav-link" href="#">${data.menuOptions[0].toUpperCase()}</a>
            <a class="nav-item nav-link" href="#">${data.menuOptions[1].toUpperCase()}</a>
            <a class="nav-item nav-link" href="#">${data.menuOptions[2].toUpperCase()}</a>
            <a class="nav-item nav-link" href="#">${data.menuOptions[3].toUpperCase()}</a>
            `
            document.querySelector(".main-card").innerHTML = 
            `
            <img class="card-img-top" style="background-image: url(${data.imageURL})">
            <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fas fa-calendar-alt"></i> ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m <i class="fas fa-user"></i> by <a>TechKaro Community</a></li>
                </ul>
            <div class="card-body">
              <h5 class="card-title main-title">${data.info.heading}</h5>
              <p class="card-text main-desc">${data.info.description}</p>
            </div>
          </div>
            `
            document.querySelector(".sale-title").innerHTML = data.sale.heading;
            document.querySelector(".sale-desc").innerHTML = data.sale.description;         
        }
    })
    }


