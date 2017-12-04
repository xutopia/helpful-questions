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

    fetch(url, options).then(function(response) {
      renderQuestions(response);
    });
  }

  function renderQuestions(questions) {
    console.log('questions obj: ', questions);
  }
})();
