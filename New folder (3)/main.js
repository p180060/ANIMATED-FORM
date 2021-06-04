const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cour = document.getElementById('testSelect1');
const Gender = document.getElementById('gender');


form.addEventListener('submit', e => {
	e.preventDefault();

});
/*function coursescheck(){
    var count=0;
    var option = document.querySelector('#testSelect1').options;
    for (var i=0; i < option.length; i++) {
        if (option[i].selected){ 
            count++;
        } 
       }
    if(count == 0 || count > 3){
        setErrorFor(testSelect1,'please select your course');
    }
    else{
        setSuccessFor(testSelect1);
        return selected;
    }  
}

function semestercheck(){
    var selectedoutput = document.querySelector("#semester").value;
        if (selectedoutput == "Semester" ){
            setErrorFor(semester,'Please select your semester');
        }else{
            setSuccessFor(semester);
        }
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    //const GenderValue = Gender.value;
    var letters = /^[A-Za-z]+$/;
    var pass =  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+$/;
    if(usernameValue.length < 25 && usernameValue.match(letters)){
        setSuccessFor(username);
	}else{
        setErrorFor(username, 'Username is invalid');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if (passwordValue.length > 7 && passwordValue.match(pass)){
        setSuccessFor(password);
	} else {
		setErrorFor(password, 'Password is invalid');
	}
	if (document.getElementById("male").checked || document.getElementById("female").checked){
        
    }else{
       // setErrorFor(Gender,'select gender');
    }  
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return (/^[\S]+@nu.edu.pk/).test(email);
}*/
function namecheck(){
    const usernameValue = username.value.trim()
    var letters = /^[A-Za-z]+$/;
    if(usernameValue.length < 25 && usernameValue.match(letters)){
        document.querySelector("#ema").style.display = "block";
        setSuccessFor(username);
        return usernameValue
	}else{
        setErrorFor(username, 'Username is invalid');
	}

}
function mailcheck(){
    const emailValue = email.value.trim();
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
        document.querySelector("#pass").style.display = "block";
		setSuccessFor(email);
        return emailValue
	}
}

function passcheck(){
    const passwordValue = password.value.trim();
    var pass =  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+$/;
    if (passwordValue.length > 7 && passwordValue.match(pass)){
        document.querySelector("#gen").style.display = "block";
        setSuccessFor(password);
    }else{
        setErrorFor(password, 'Password is invalid');
        return passwordValue
    }
}

function gendercheck(){
    if (document.getElementById("male").checked){
        var val = document.getElementById("male").value;
        document.querySelector("#cou").style.display = "block";
        document.querySelector("#co").style.display = "block";
        setSuccessFor(Gender);
    }else if(document.getElementById("female").checked){
        var val = document.getElementById("female").value;
        document.querySelector("#cou").style.display = "block";
        document.querySelector("#co").style.display = "block";
       setSuccessFor(Gender);
    }else{
       setErrorFor(Gender,'select gender');
       return val;
    }
}

function coursecheck(){
    var count=0;
    var selected=[];
    var option = document.getElementById('testSelect1').options;
    for (var i=0; i < option.length; i++) {
        if (option[i].selected) count++; selected.push(option[i].value);
       }
    if(count == 0 || count > 3){
        setErrorFor(testSelect1,'please select your course');
    }
    else{
        document.querySelector("#sem").style.display = "block";
        setSuccessFor(testSelect1);
        return selected;
    }  
}

function semestercheck(){
    var selectedoutput = document.querySelector("#semester").value;
        if (selectedoutput == "Semester" ){
            setErrorFor(semester,'Please select your semester');
        }else{
            document.querySelector("#sub").style.display = "block";
            setSuccessFor(semester);
            return selectedoutput;
        }
}

function IntoJSON(){
    var obj = {"Name":namecheck(),"Password":passwordcheck(),"Email":mailcheck(),"Gender":gendercheck(),"Courses":coursescheck(),"Semester":semestercheck()}
    var myJSON = JSON.stringify(obj);
    localStorage.setItem("FormsDataJSON", myJSON);

}

function IntoJS(){
    text = localStorage.getItem("FormsDataJSON");
    obj = JSON.parse(text);
    for (val of Object.keys(obj)){
        
        console.log(obj[val]);
        
    }
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return (/^[\S]+@nu.edu.pk/).test(email);
}
function IntoJS(){
    text = localStorage.getItem("FormsDataJSON");
    obj = JSON.parse(text);
    for (val of Object.keys(obj)){
        
        console.log(obj[val]);
        
    }
}