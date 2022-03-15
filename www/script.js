const url = "https://api.kanye.rest"
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    show(json.quote);
  });

  function show(quote) {
     document.getElementById("quote").innerText=`"${quote}"`;
  }