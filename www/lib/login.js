var attempt = 5; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	
    setupDynamo();
    
    var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "username" && password == "password+"){
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert(username + " and " + password + " are incorrect");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}

function queryDynamo(){
    
}

function setupDynamo(){
    var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
    var myConfig = new AWS.Config({
        credentials: myCredentials, region: 'us-west-2'
    });
}