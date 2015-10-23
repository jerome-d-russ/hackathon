function setupRouting(){
    yam.getLoginStatus(
      function(response) {
        if (response.authResponse) {
        var b = document.getElementById("b");
        b.style.display = 'block';
	        var pageApp = document.querySelector("#app");

          //configure the routes
          page('/', home);
          page('/following', following);
          page('/trending', trending);
          page('/tbt', tbt);
          page('/login', login);
          page('/addIdea', addIdea);
          
          page({ hashbang: true });

        	function home(){
        		pageApp.route = 'home';
        	}
        
        	function following(){
        		pageApp.route = 'following';
        	}
        
        	function trending(){
        		pageApp.route = 'trending';
        	}
        
        	function tbt(){
        		pageApp.route = 'tbt';
        	}
        
        	function login(){
        		pageApp.route = 'login';
        	}
        
        	function addIdea(){
        		pageApp.route = 'addIdea';
        	}
        } else {
            window.location = '/login.html';
        }
      }
    );
}
setupRouting();