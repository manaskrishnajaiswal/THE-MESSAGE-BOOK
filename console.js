(function(){
	
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA22OZFNKuKkDeXJiWIct5lSKdUT0_y32M",
    authDomain: "first-c68ac.firebaseapp.com",
    databaseURL: "https://first-c68ac.firebaseio.com",
    storageBucket: "first-c68ac.appspot.com",
    messagingSenderId: "81067969503"
  };
  firebase.initializeApp(config);
  //get elements
  const btnLogout = document.getElementById('btnLogout');
  btnLogout.addEventListener('click', e=>{
		firebase.auth().signOut();
	});
	//add a realtime listner
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			document.getElementById("btnLogout").style.visibility = "visible";
			
			btnLogout.classList.remove('hide');
		}else{
			console.log('not logged in');
			
			window.location.href="index.html";
		}
		});
  
  }());