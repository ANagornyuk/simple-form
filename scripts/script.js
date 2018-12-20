function ShowLogin(){
	document.getElementById('signUpForm').className = "hidden";
	document.getElementById('loginForm').className = "visible";
	document.getElementById('signup').classList.remove("checked");
	document.getElementById('signup').classList.add("unchecked");
	document.getElementById('login').classList.remove("unchecked");
	document.getElementById('login').classList.add("checked");
}
function ShowSignUp(){
	document.getElementById('signUpForm').className = "visible";
	document.getElementById('loginForm').className = "hidden";
	document.getElementById('login').classList.remove("checked");
	document.getElementById('login').classList.add("unchecked");
	document.getElementById('signup').classList.remove("unchecked");
	document.getElementById('signup').classList.add("checked");
	
}