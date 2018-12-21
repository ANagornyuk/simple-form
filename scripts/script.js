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
function ValidatePassword(){
	let pswtip = document.getElementById('pswtip');
	let regexp = /\w{6,}/
	//\d+|\w+{6,}/;
	pswtip.className = "visible";
	if (regexp.test(document.getElementById('password').value)){
		pswtip.className = "hidden";
	}
	// pswtip.innerHTML = document.getElementById('password').value;

	// let input = document.getElementById('password');
	// input.title = "Some text"
	


}
function ShowTip(){
	document.getElementById('pswtip').className = "visible";

}
function HideTip(){
	document.getElementById('pswtip').className = "hidden";
}