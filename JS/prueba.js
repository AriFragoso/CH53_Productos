const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";

function getData(){
    fetch(URLMain)
    .then((response) => {
        console.log(response);
        response.json().then((res)=>{
            console.log(res.length); //20
            console.log(res[0].title);
            createCards(res);
        });
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
               ${err.message}
            </div>`);
    });
}//getData
getData();

function createCards(prods) {
    prods.forEach(res => {
        main.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
                <img src="${res.image}" class="card-img-top" alt="${res.title}">
                <div class="card-body">
                    <h5 class="card-title">${res.title}</h5>
                    <p class="card-text">${res.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`);
    });
}//createCard: ciclo que pueda ir recorriendo los productos y los muestre 