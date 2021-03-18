document.getElementById('gallery').addEventListener('click', gallery)
document.getElementById('timeline').addEventListener('click', timeline)
document.getElementById('home').addEventListener('click', home)



function gallery () {
  let answer = confirm ('Press OK to Continue to Gallery')
  if (answer)
  window.location = 'https://assignment-2.jacksonnaufal.repl.co/Gallery.html'
}

function timeline () {
  let answer = confirm ('Press OK to Continue to Timeline')
  if (answer)
  window.location = 'https://assignment-2.jacksonnaufal.repl.co/Timeline.html'
}

function home () {
  let answer = confirm ('Press OK to Continue to Home')
  if (answer)
  window.location = 'https://assignment-2.jacksonnaufal.repl.co/'
}