var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

function setQuote(data) {
  $("#quote").text(data[0]);
}

$("#jquery").click(function () {
  $.getJSON(url)
  .done(setQuote)
  .fail(console.error);
});

$("#axios").click(function () {
  axios({
    method: 'GET',
    url: url,
  })
  .then(function (res) {
    return res.data;
  })
  .then(setQuote)
  .catch(console.error);
});

$("#fetch").click(function () {
  fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(setQuote)
  .catch(console.error);
});

$("#xhr").click(function () {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // This seems much nicer than onreadystatechange
    if (xhr.status === 200) {
      setQuote(JSON.parse(xhr.response));
    } else {
      console.error("Error occured");
    }
  }
  xhr.open('GET', url);
  xhr.send();
});