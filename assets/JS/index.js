let likeButton = document.querySelector('#like');
let noOfLikes = document.querySelector('#no-of-likes');

likeButton.addEventListener('click', function() {
    let [likes,,] = noOfLikes.textContent.split(' ');
    noOfLikes.innerHTML = `${parseInt(likes) + 1} likes`;
} );

fetch('http://localhost:3000/data')
.then(resp=>resp.json())
.then(data=>{
      let imgSrc = data._embedded.artworks[0]._links.thumbnail.href
      let toAdd = imgSrc.replace("medium", "large")
      console.log(toAdd)
})