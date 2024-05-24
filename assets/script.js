
function test() {
var urlencoded = new URLSearchParams();
urlencoded.append("id", "049e8116-4621-4018-b90f-bcfd1f6b3d7f");

var requestOptions = {
  method: 'DELETE',
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:3000/deleteArtist", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


}