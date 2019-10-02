function myFunction () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// gallery

const imgarr = [
  'caribou-thumbnail.png', 'portrait1-thumbnail.png', 'halloween-thumbnail.png', 'santa-thumbnail.png', 'witch-thumbnail.jpg', 'portrait3-thumbnail.png', 'lightbulb-thumbnail.png', 'duck-thumbnail.png', 'statue-thumbnail.png', 'opera3-thumbnail.png', 'statue2-thumbnail.jpg', 'building-thumbnail.jpg'
]

const imgarr2 = [
  'caribou.png', 'portrait1.png', 'halloween.png', 'santa.png', 'witch.jpg', 'portrait3.png', 'lightbulb.png', 'duck.png', 'statue.png', 'opera3.png', 'statue2.jpg', 'building.jpg'
]
const imgarr3 = [
  'caribou', 'portrait1', 'halloween', 'santa', 'witch', 'portrait3', 'lightbulb', 'duck.png', 'statue', 'opera3', 'statue2', 'building'
]
var $images = document.getElementById("gallery");
const images = []

for (let i = 0; i < imgarr.length; i++) {
  images.push(`
  <div class="portfolio">
  <img src="${imgarr[i]}">
      <div id="cover" class="view" data-image="${imgarr2[i]}" data-text="${imgarr3[i]}">
        <h5>View More</h3>
      </div>
  </div>
  `)
}
$images.innerHTML = images.join('') + $images.innerHTML



const $lightBox = document.getElementById('lightBox');
const esc = document.querySelector('.close');
esc.addEventListener('click', function () {
  $lightBox.classList.remove('show');
})


const open = document.querySelectorAll('.view');
for (let item of open) {
  item.addEventListener('click', function () {
    $lightBox.classList.add('show');
    document.getElementById("img-holder").innerHTML = `
    <img id="bigImg" src="${item.dataset.image}" title="${item.dataset.text}"> 
    `
  })
}

$(document).ready(function() {
	setTimeout(function() {
		$("#main").removeClass("is-loading");
	}, 100)
});


