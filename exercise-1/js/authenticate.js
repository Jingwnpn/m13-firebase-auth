// JavaScript authentication file
$(function() {

    // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBf58CR4WrW5_vpKkhAAGcTDBZXq0mDXN4",
            authDomain: "test-project-2-46cda.firebaseapp.com",
            databaseURL: "https://test-project-2-46cda.firebaseio.com",
            storageBucket: "test-project-2-46cda.appspot.com",
            messagingSenderId: "68364184235"
        };
        firebase.initializeApp(config);
    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var display_name = $('#display-name').val();

        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password);
                // Set display name
                .then(function(user) {
                    user.updateProfile({
                        displayName = display_name;
                    }).then(function() {
                        window.location = "index.html";
                    });
                }).catch(function(error) {
                });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        var email = $('#email').val();
        var password = $('#password').val();

        firebase.auth().signinWithEmailAndPassword(email, password);
            .then(function() {
                window.location = "index.html"
            }
    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
