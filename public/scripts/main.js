(function () {

  function score() {
    console.log(this)
  }

  var ourScore = document.getElementById('us')
    , theirScore = document.getElementById('them')

  // el.textContent
  // [ourScore, theirScore].forEach(function (i, el) {
  //   el.addEventListener('click', score)
  // }) // too clever...

  ourScore.addEventListener('click', function () {
    document.getElementById('ours').textContent++
  })

  theirScore.addEventListener('click', function () {
    document.getElementById('theirs').textContent++
  })

  // Turn off Safari's bouncy-edge UIWebView silliness
  document.ontouchmove = function (e) {
    e.preventDefault()
  }

  // FastClick
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
  }

})();
