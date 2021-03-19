document.getElementById('facts').addEventListener('click', facts)
document.getElementById('timeline').addEventListener('click', timeline)
document.getElementById('home').addEventListener('click', home)
let answer

function facts () {
  answer = confirm('Press OK to Continue to Fun Facts')
  if (answer) {
    window.location = 'https://assignment-2.jacksonnaufal.repl.co/facts.html'
}
}

function timeline () {
  answer = confirm('Press OK to Continue to Timeline')
  if (answer) {
    window.location = 'https://assignment-2.jacksonnaufal.repl.co/Timeline.html'
  }
}

function home () {
  answer = confirm('Press OK to Continue to Home')
  if (answer) {
    window.location = 'https://assignment-2.jacksonnaufal.repl.co/'
  }
}
