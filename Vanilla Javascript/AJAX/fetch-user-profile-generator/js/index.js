// https://randomuser.me/api/

var username = document.querySelector("#username");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

document.querySelector("#btn").addEventListener("click", function () {
  fetch("https://randomuser.me/api")
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(function (data) {
      var d = data.results[0];
      console.log(d);
      email.textContent = d.email;
      city.textContent = d.location.city;
      username.textContent = d.login.username;
      fullname.textContent = d.name.title + " " + d.name.first + " " + d.name.last;
      avatar.src = d.picture.thumbnail;
    })
    .catch(function (error) {
      console.error(error);
  });
});