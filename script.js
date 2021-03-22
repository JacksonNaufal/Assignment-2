document.getElementById('facts').addEventListener('click', facts)
document.getElementById('timeline').addEventListener('click', timeline)
document.getElementById('home').addEventListener('click', home)
let answer
// The let answer, allows answer to be determind, and the event listers ontop of the Let statement, allow the JS to locate the information it needs to gather from the regular HTML Document.

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

// These 3 functions are rather similar, they all do the same thing, the only difference is the names, what button, and the link. Basically, they say that if the answer is confirm, which is ok on the alert, it will directly take you to the window location link, that is defined on line 10, 17, and 24. Finally, these are also linked sepreatly to there own eventlistener, which allows it to find any information it needs from the HTML, though id's
