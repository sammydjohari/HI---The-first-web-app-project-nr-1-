let btn = document.getElementById('btnClick')
let image = document.getElementById('image')


function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(result => {
    console.log(result)
    image.src = result.message
  })
  .catch(err=>console.log(err))
}

image.onload = getDogs()

btn.addEventListener('click', getDogs) 


  