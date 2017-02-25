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
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');


//add login event
btnLogin.addEventListener('click',e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.signInWithEmailAndPassword(email,
	pass);
	promise.catch(e => console.log(e.message));
	
});
	//add signup event
btnSignUp.addEventListener('click',e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.createUserWithEmailAndPassword(email,
	pass);
	promise.catch(e => console.log(e.message));
	
	
});	
	
	
	
	
	
	
	//add a realtime listner
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			
			window.location.href="console.html";
			
		}else{
			console.log('not logged in');
			
		}
	});
	
	
	
	
	
}());
