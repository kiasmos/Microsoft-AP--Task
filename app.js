var search = document.querySelector(".search");
axios.get("https://fakestoreapi.com/products").then((res) => {
  var container = document.querySelector(".container");
  container.innerHTML = "";

  for (i = 0; i < res.data.length; i++) {
    container.innerHTML += `
      <div class="product">
        <img src="${res.data[i].image}" alt="#" class="laptop-img" />
        <div class="product-info">
          <h5 class="product-name">${res.data[i].title}</h5>
          <p>${res.data[i].description}
          </p>
          <span class="about-more">${res.data[i].category}</span>
        </div>
        <div class="product-score">
          <div class="point-score">
          ${res.data[i].rating.rate}
            <img src="./img/smile.svg" alt="#" />
            <p class="score">${res.data[i].rating.count}</p>
          </div>
          <button class="more-info">More info</button>
          <span class="compare-price">Compare prices</span>
        </div>
      </div>`;
  }
  search.style = "display:block";
});
