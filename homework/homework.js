axios.get("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
.then(response => {
  const data = response.data;
  console.log(response);
  document.getElementById("track").innerHTML = data.name;
  document.getElementById("artist").innerHTML = data.artists[0].name;
  document.getElementById("album").innerHTML = data.album.name;
  document.getElementById("image").src = data.album.images[1].url;
})
.catch(error => {
  alert(error);
})