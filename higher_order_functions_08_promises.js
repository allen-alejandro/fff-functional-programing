// more powerful than callbacks becaues they are composible 

import loadImage from './cats'

let addImg = src => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}


Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error here
})


