// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        GoogleAuthProvider, 
        signInWithRedirect, 
        getRedirectResult,
        signInWithPopup,
        onAuthStateChanged  } 
        from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbSa-cklDf2WVqj1dNPyTX5JH-0gZA2Q",
  authDomain: "itdproject-12c91.firebaseapp.com",
  projectId: "itdproject-12c91",
  storageBucket: "itdproject-12c91.appspot.com",
  messagingSenderId: "158737123945",
  appId: "1:158737123945:web:69ef810d48d0467799b0f8",
  measurementId: "G-0QSDWHSQZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
// const provider2 = new FacebookAuthProvider();
const auth = getAuth();
console.log(app)

//Google Sign-In
google_btn.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
});

// After redirection, handle the result and redirect to index.html
getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    // Redirect to index.html after successful login
    window.location.href = "portfolio.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  });


//Facebook Sign-In
facebook_btn.addEventListener('click', () => {
  signInWithRedirect(auth, provider2);

  getRedirectResult(auth, provider2).then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });

});
//----- New Registration code start	  
document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("suemailadd").value; 
    var password =  document.getElementById("supassword").value;
  
  //For new registration
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    (Swal.fire({
    icon: 'success',
    title: 'Registered Successfully',
    text: 'You Will Be Redirected Shortly Please Wait',
    }));
    setTimeout(function () {
    window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
    }, 5000); //will call the function after 5 secs.
    // ...
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    (Swal.fire({
    icon: 'error',
    title: 'An Error Has Occured',
    text: ''+error,
    }));;
    });		  		  
});
//----- End

//----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
  var email =  document.getElementById("lgemail").value;
  var password = document.getElementById("lgpassword").value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    (Swal.fire({
    icon: 'success',
    title: 'Logged In Successfully',
    text: 'You Will Be Redirected Shortly',
    }));
    setTimeout(function () {
    window.location.href = "portfolio.html"; //will redirect to your blog page (an ex: blog.html)
    }, 3000); //will call the function after 3 secs.
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    (Swal.fire({
    icon: 'error',
    title: 'An Error Has Occured',
    text: ''+error,
    }));;
  });		  		  
});
//----- End

//----- Logout code start	  
document.getElementById("logout").addEventListener("click", function() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.');
    alert('Sign-out successful.');
    document.getElementById('logout').style.display = 'none';
  }).catch((error) => {
    // An error happened.
    console.log('An error happened.');
  });		  		  
});
//----- End