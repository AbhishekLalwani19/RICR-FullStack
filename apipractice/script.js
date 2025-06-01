async function getProduct(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();

   const products = document.getElementById("products")

   data.forEach(element => {
    const d = document.createElement("div");
    d.innerHTML = `
    <div class="container rounded p-3 mt-2">
        <div class="row">
          <div class="col-4">
            <img
              src="${element.image}"
              alt=""
              class="w-100 object-fit-contain"
              height="280px"
            />
          </div>
          <div class="col-8">
            <h4>${element.title}</h4>
            <h6> Category: ${element.category} </h6>
            <span>Rating: ${element.rating.rate} (${element.rating.count})</span>
            <h4>Price: $${element.price}</h4>
            <p>
              ${element.description}
            </p>
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-outline-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    products.appendChild(d);
   });
}
getProduct();