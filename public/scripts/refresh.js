(function() {
  'use strict';

  document.getElementById('refreshQuestion').addEventListener('click', fetchQuestions);

  function fetchQuestions(question) {
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
    for (var i = 0; i < questions.length; i += 1) {
      var card = app.cardTemplate.cloneNode(true);
      card.classList.remove('cardTemplate');
      card.querySelector('.op-container').textContent = questions[i].op;
      card.removeAttribute('hidden');
      app.container.appendChild(card);
    }
  }
})();
