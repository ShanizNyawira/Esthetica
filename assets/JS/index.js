let likeButton = document.querySelector("#like");
let noOfLikes = document.querySelector("#no-of-likes");
let artTitle = document.querySelector(".gallery-item-title");
let gallery = document.querySelector(".gallery");

/*likeButton.addEventListener('click', function() {
    let [likes,,] = noOfLikes.textContent.split(' ');
    noOfLikes.innerHTML = `${parseInt(likes) + 1} likes`;
} );*/
function render(data = [],type) {
  gallery.innerHTML = "";
  data.forEach(function (item) {
    let img;
    if (type === "search") {
      img = item._links.thumbnail.href;
    } else {
      img = item._links.thumbnail.href;
    }
    let image = img.replace("medium", "large");
    let likes = 0;
    let galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    let galleryItemLikes = document.createElement("div");
    galleryItemLikes.className = "gallery-item-info";
    let span = document.createElement("span");
    span.id = "no-of-likes";
    span.innerHTML = `${likes} likes`;
    galleryItemLikes.appendChild(span);
    let i = document.createElement("i");    

    i.className = "fas fa-heart";
    i.addEventListener("click", function () {
      let [likes, ,] = span.textContent.split(" ");
      span.innerHTML = `${parseInt(likes) + 1} likes`;
    });
    galleryItemLikes.appendChild(i);
    let html = `
                    <div class="gallery-item-title">
                    ${item.title}
                </div>
                
                    <img src="${image}" alt="${item.title}">
        `;
    galleryItem.innerHTML += html;
    galleryItem.appendChild(galleryItemLikes);
    gallery.appendChild(galleryItem);
  });
}

//render(data);

function fetchArts(url, type) {
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-XAPP-Token":
        "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MzBmYTdiM2E5ODQzYjAwMGNiZDBkMGUiLCJleHAiOjE2NjI1NzUxNTUsImlhdCI6MTY2MTk3MDM1NSwiYXVkIjoiNjMwZmE3YjNhOTg0M2IwMDBjYmQwZDBlIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYzMGZhN2IzY2FiZDQ0MDAwZDU0MTI2ZSJ9.DgYLFUdv3OS4cOs9prxCkMUtFEeAJgI8MwjZSaORgkU",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      if (type === "search") {
        render(data._embedded.results, type);
        
      } else {
        let renderData = data._embedded.artworks;
        render(renderData,type);
      }
    });
}
fetchArts("https://api.artsy.net/api/artworks?size=100", "all");
document.getElementById("searchart").addEventListener("keyup", function (e) {
  let search = e.target.value;
  let url = `https://api.artsy.net/api/search?q=${search}`;
  fetchArts(url,'search');
});
document.getElementById("searchart").addEventListener("input", function (e) {
  if (e.target.value === "") {
    fetchArts("https://api.artsy.net/api/artworks?size=100", "all");
  }
} );