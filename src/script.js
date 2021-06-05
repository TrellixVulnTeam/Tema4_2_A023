function next(n) {
  const image1 = document.getElementById('image_1');
  const image2 = document.getElementById('image_2');
  const image3 = document.getElementById('image_3');

  if (n === 1) {
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
  }
  if (n === 2) {
    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
  }
  if (n === 3) {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
  }
}

window.next = next;

async function getResponse() {
  const requestURL = 'https://baconipsum.com/api/?type=all-meat&paras=12&sta..';

  const request = await fetch(requestURL);
  const content = await request.json();

  const parentClass = document.getElementsByClassName('container');
  const parent = parentClass[0];

  let yellowColor;

  for (let i = 0; i < content.length; i += 1) {
    if (i % 2 === 0) {
      yellowColor = '';
    } else {
      yellowColor = 'yellow_block';
    }
    const element = document.createElement('div');
    element.classList.add('container_content');
    element.style.marginRight = '20px';
    element.innerHTML = `<div class="container_content_top"><div class="container_content_top_square ${yellowColor}"></div><h6>ABOUT SUPER LOGO</h6><div class="container_content_top_rectangle  ${yellowColor}"></div></div><div class="container_content_bottom"><div class="container_content_bottom_image"><img src="https://picsum.photos/148/138?random=${i}"></div><div class="container_content_bottom_text"><p>${content[i]}</p><a>Read more...</a></div></div>`;
    parent.appendChild(element);
  }
}

document.addEventListener('DOMContentLoaded', getResponse);
