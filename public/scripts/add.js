(function() {
  'use strict';

  document.getElementById('addQuestion').addEventListener('click', function() {
    console.log('inside the add script, looking at writeUserData');
    app.toggleAddDialog(true);
  })

  document.getElementById('cancelAdd').addEventListener('click', function() {
    console.log('inside the add script, looking at cancelAdd');
    app.toggleAddDialog(false);
  })

  document.getElementById('addForm').addEventListener('submit', function(e) {
    var name = document.getElementById('nameInput').value;
    var question = document.getElementById('questionInput').value;

    writeUserData(name, question);
  })

  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  }

  function renderAddedQuetion(name, question) {
    var card = app.cardTemplate.cloneNode(true);
    card.classList.remove('cardTemplate');
    card.querySelector('.op').textContent = name;
    card.querySelector('.question').textContent = question;
    card.removeAttribute('hidden');
    app.container.prepend(card);
  }


  function writeUserData(name, question) {
    var submission = {
      name: name,
      question: question
    }
    // JSON.stringify(submission);
    var url = 'https://helpful-questions-3a0dd.firebaseio.com/q.json';
    var options = {
      method: 'POST',
      body: JSON.stringify(submission),
    }

    fetch(url, options)
      .then(function(response) {
        app.toggleAddDialog(false);
        renderAddedQuetion(name, question);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
})();




// firebase.database().ref('/').push()
//   .then(function() {
//     console.log('test2 saved to db');
//   })
