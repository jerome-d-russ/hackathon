var threads;

function submitForm() {
    alert('Hello');
  document.getElementById('form').submit();
}

yam.getLoginStatus(
  function(response) {
    if (response.authResponse) {
      yam.platform.request({
        url: "messages/in_group/6568803.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
        },
        success: function (resp) { //print message response information to the console
          threads = resp.messages;
        },
        error: function (user) {
          alert("Massive failure. Hopefully this isn't a demo!")
        }
      });
    }
    else {
      window.location = '/login.html'
    }
  }
);

function getThreads(){
    return threads;
}