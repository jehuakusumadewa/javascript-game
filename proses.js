const search_form = document.querySelector(".header_form");

search_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = document.querySelector("#search").value;

  search_Digimon(value);
});

async function search_Digimon(value) {
  const request = await fetch(
    `https://digimoncard.io/api-public/search.php?n=${value}`
  );
  const response = await request.json();

  //   /* Update the UI on the page */
  update_ui(
    response[0].name,
    response[0].color,
    response[0].stage,
    response[0].attribute,
    response[0].image_url
  );
}

// /* update UI function */
function update_ui(name, color, stage, attribute, img) {
  const name = document.querySelector(".name");
  const color = document.querySelector(".color");
  const stage = document.querySelector(".stage");
  const attribute = document.querySelector(".attribute");
  const card = document.getElementById("card");

  /* Update all the elements on the page */
  name.textContent = ip_address;
  color.textContent = location;
  stage.textContent = timezone;
  attribute.textContent = isp;
  card.innerHTML = `
          <img src=${img} />
    `;
}
