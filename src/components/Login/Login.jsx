import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useState } from "react";

const Login = () => {
const [user, setUser] = useState(null);
const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result =>{
        console.log(result.user);
        setUser(result.user);
    })

  .catch(error => {
    console.log('ERROR', error);
    setUser(null);
  })
}
const handleSignOut = () =>{
signOut(auth)
.then(() =>{
  console.log('sign out done');
  setUser(null);
})
.catch(error =>
  console.log(error))
}

 return (
        <div>
           {/* <button onClick={handleGoogleSignIn}>Login with google</button> 
       <button onClick={handleSignOut}>Sign Out</button> */}
       {
        user ?  <button onClick={handleSignOut}>Sign Out</button>
        : <button onClick={handleGoogleSignIn}>Login with google</button> 
       }
        {
         user && <div>
          <h4> {user.displayName} </h4>
          <p>Email:  {user.email} </p>
       <img src={user.photoURL} alt="" />
         </div>
        }
        </div>
    );
};

export default Login;