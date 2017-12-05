(function() {
  'use strict';

  // register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Service Worker registered');
      })
      .catch(function(err) {
        console.log('error in service worker registration: ', err)
      })
  }

  // connect to firebase database
  try {
    var config = {
      apiKey: "AIzaSyAp1C0ZZpCIaF2bOeN2Mo4i7XXzFlcndZA",
      authDomain: "helpful-questions-3a0dd.firebaseapp.com",
      databaseURL: "https://helpful-questions-3a0dd.firebaseio.com",
      projectId: "helpful-questions-3a0dd",
      storageBucket: "helpful-questions-3a0dd.appspot.com",
      messagingSenderId: "308388871177"
    };
    firebase.initializeApp(config);
  } catch (e) {
    console.error(e);
  }


  // init
  if (localStorage.questions) {
    console.log('inside the init if, JSON parse:', JSON.parse(localStorage.questions));
    var iterableQuestions = JSON.parse(localStorage.questions);
    renderQuestions(iterableQuestions);
  } else {
    console.log('inside the init else:');
    getInitialQuestions();
  }

  function renderQuestions(questions) {
    if (document.getElementsByClassName('card').length < Object.keys(questions).length) {
      for (let question in questions) {
        var card = app.cardTemplate.cloneNode(true);
        card.classList.remove('cardTemplate');
        card.querySelector('.op').textContent = questions[question].name;
        card.querySelector('.question').textContent = questions[question].question;
        card.removeAttribute('hidden');
        app.container.prepend(card);
      }
    }

    if (app.isLoading) {
      app.spinner.setAttribute('hidden', true);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
  }

  function getInitialQuestions() {
    var url = 'https://helpful-questions-3a0dd.firebaseio.com/q.json'

    var options = {
      method: 'GET',
    }

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        saveQuestions(data);
        renderQuestions(data);
      });
  }

  function saveQuestions(questions) {
    console.log('inside save method, looking at questions: ', questions);
    localStorage.questions = JSON.stringify(questions);
  }
})();




// try {
//   var ref = firebase.database().ref();
//   ref.once("value")
//   .then(function(snapshot) {
//     document.getElementById('render').innerHTML = JSON.stringify(snapshot.val(), null, 2);
//   });
// } catch (err) {
//   console.error(err);
// }
