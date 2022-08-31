let likeButton = document.querySelector('#like');
let noOfLikes = document.querySelector('#no-of-likes');
let artTitle =document.querySelector(".gallery-item-title")
let galleryItem = document.querySelector(".gallery-item")

likeButton.addEventListener('click', function() {
    let [likes,,] = noOfLikes.textContent.split(' ');
    noOfLikes.innerHTML = `${parseInt(likes) + 1} likes`;
} );
function render(data = []) {
    let html = `
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
        galleryItem.innerHTML = html;
    }
    
    
//render(data);

fetch('https://api.artsy.net/api/artworks',{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'X-XAPP-Token':'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MzBmYTdiM2E5ODQzYjAwMGNiZDBkMGUiLCJleHAiOjE2NjI1NzUxNTUsImlhdCI6MTY2MTk3MDM1NSwiYXVkIjoiNjMwZmE3YjNhOTg0M2IwMDBjYmQwZDBlIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYzMGZhN2IzY2FiZDQ0MDAwZDU0MTI2ZSJ9.DgYLFUdv3OS4cOs9prxCkMUtFEeAJgI8MwjZSaORgkU'
    }
    })
.then(resp=>resp.json())
.then(data=>{
      let renderData = data._embedded.artworks
        render(renderData);
})


