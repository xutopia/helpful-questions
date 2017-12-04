(function() {
  'use strict';

  document.getElementById('refreshQuestion').addEventListener('click', fetchQuestions);

  function fetchQuestions(question) {
    console.log('inside fetchQuestions');
    var ref = firebase.database().ref();
    ref.once("value")
      .then(function(snapshot) {
        document.getElementById('render').innerHTML = JSON.stringify(snapshot.val(), null, 2);
      });
  }
})();


// function() {
//   writeUserData('testing');
//   console.log('inside the add script, looking at writeUserData');
// }
