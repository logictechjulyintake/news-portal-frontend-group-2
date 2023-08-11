let profileChosen = null;
id("profilePicture").addEventListener("change", function() {
    profileChosen = id("profilePicture").files[0];
    id("profilePicturePreview").src = URL.createObjectURL(profileChosen);
});

function register() {
    const username = id("username").value.trim();
    const password = id("password").value.trim();
    const email = id("email").value.trim();

    let gender = null;
    if( id("genderM").checked === true) {
        gender = "male";
    } else if ( id("genderF").checked === true ){
        gender = "female";
    } else if ( id("genderO").checked === true ){
        gender = "others";
    }

    if(username.length === 0 || password.length === 0 || email.length === 0 || gender === null || !profileChosen) {
        id("register-msg").innerText = "Please enter all the fields to register!";
        return;
    }

    if(password.length < 8) {
        id("register-msg").innerText = "Password too short!";
        return;
    }

    const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!email.match(emailRegEx)) {
        id("register-msg").innerText = "Invalid email!";
        return;
    }

    id("register-msg").innerText = "Registration success!";

}