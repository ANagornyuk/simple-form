function ShowLogin(){
	// alert("It works!");
	document.getElementById('signUpForm').className = "hidden";
	document.getElementById('loginForm').className = "visible";
	document.getElementById('signup').classList.remove("checked");
	document.getElementById('signup').classList.add("unchecked");
	document.getElementById('login').classList.remove("unchecked");
	document.getElementById('login').classList.add("checked");
	// document.getElementById('loginForm')
}
