let likeButton = document.querySelector('#like');
let noOfLikes = document.querySelector('#no-of-likes');
let artTitle =document.querySelector(".gallery-item-title")
let galleryItem = document.querySelector(".gallery-item")

likeButton.addEventListener('click', function() {
    let [likes,,] = noOfLikes.textContent.split(' ');
    noOfLikes.innerHTML = `${parseInt(likes) + 1} likes`;
} );
function render(data = []) {
    let html = '';
    data.forEach(function({title, image, likes}) {
        html += `
            <div class="gallery-item">
                <div class="gallery-item-title">
                    ${title}
                </div>
                
                    <img src="${image}" alt="${title}">
                </div>
                <div class="gallery-item-likes">
                    <button id="like">Like</button>
                    <span id="no-of-likes">${likes} likes</span>
                </div>
            </div>
        `;
    });
    gallery.innerHTML = html;
}
    
render(data);

/*fetch('http://localhost:3000/data')
.then(resp=>resp.json())
.then(data=>{
      let imgSrc = data._embedded.artworks[0]._links.thumbnail.href
      let toAdd = imgSrc.replace("medium", "large")
      console.log(toAdd)
})*/


