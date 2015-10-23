function setupRouting(){
    yam.getLoginStatus(
      function(response) {
        if (response.authResponse) {
          var b = document.getElementById("b");
          b.style.display = 'block';
	        var pageApp = document.querySelector("#app");
	        var drawer = document.querySelector('paper-drawer-panel');

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
        		drawer.closeDrawer();
        	}
        
        	function following(){
        		pageApp.route = 'following';
        		drawer.closeDrawer();
        	}
        
        	function trending(){
        		pageApp.route = 'trending';
        		drawer.closeDrawer();
        	}
        
        	function tbt(){
        		pageApp.route = 'tbt';
        		drawer.closeDrawer();
        	}
        
        	function login(){
        		pageApp.route = 'login';
        		drawer.closeDrawer();
        	}
        
        	function addIdea(){
        		pageApp.route = 'addIdea';
        		drawer.closeDrawer();
        	}
        } else {
            window.location = '/login.html';
        }
      }
    );
}
setupRouting();