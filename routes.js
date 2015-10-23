function setupRouting(){
	var pageApp = document.querySelector("#app");

    yam.getLoginStatus(
      function(response) {
        if (response.authResponse) {
          var pageApp = document.querySelector("body");
          pageApp.style.display = 'block';

          //configure the routes
          page('/', home);
          page('/following', following);
          page('/trending', trending);
          page('/tbt', tbt);
          page('/login', login);
          page('/addIdea', addIdea);
          
          page({ hashbang: true });

          pageApp.visible = "visibility:visible";
	
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