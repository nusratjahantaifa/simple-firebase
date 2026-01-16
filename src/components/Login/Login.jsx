import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
 return (
        <div>
           <button onClick={handleGoogleSignIn}>Login with google</button> 
        {
         user && <div>
          <h4> {user.displayName} </h4>
          <p>Email:  {user.email} </p>
       
         </div>
        }
        </div>
    );
};

export default Login;