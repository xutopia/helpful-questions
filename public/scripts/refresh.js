(function() {
  'use strict';

  document.getElementById('refreshQuestion').addEventListener('click', fetchQuestions);

  function fetchQuestions() {
    console.log('fetchQuestions method');
    var url = 'https://helpful-questions-3a0dd.firebaseio.com/q.json'

    var headers = new Headers({
      'count': "some header"
    });
    var options = {
      method: 'GET',
      headers: headers,
    }

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        renderQuestions(data);
      })

  }

  function renderQuestions(questions) {
    console.log('questions obj: ', questions);
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
})();
