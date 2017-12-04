(function() {
  'use strict';

  document.getElementById('refreshQuestion').addEventListener('click', fetchQuestions);

  function fetchQuestions(question) {
    var ref = firebase.database().ref();
    ref.once("value")
      .then(function(snapshot) {
        document.getElementById('render').innerHTML = JSON.stringify(snapshot.val(), null, 2);
      });
  }
})();
