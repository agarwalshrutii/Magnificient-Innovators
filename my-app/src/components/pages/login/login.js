import React, {useState} from "react";
import './login.css'


function Loginform () {
        const [swapPanel, setSwapPanel] = useState(false);

  const signUpButton = () => {
    setSwapPanel(true);
  };
  const signInButton = () => {
    setSwapPanel(false);
  };
       

    return (
        

        <div id="header" className="header">
            <div className="header">
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></link>
        </div>
    <body>
        <div class="container" id="container" className={["container", swapPanel ? "right-panel-active" : null]
          .filter(Boolean)
          .join(" ")}
>
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>Enter Government authorised USERID</span>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="UserID" />
                    <input type="password" placeholder="Password" />
                    <button id="signUp" onClick={signUpButton}>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    
                    <input type="text" placeholder="UserID" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button >Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your UserID</p>
                        <button
                onClick={signInButton}
                className="ghost"
                id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello!</h1>
                        <p>Enter your personal details and start your journey with CSD Canteen</p>
                        <button onClick={signUpButton}
                className="ghost"
                id="signUp"
              >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        
    </body>
    </div>
    
    );
}

export default Loginform;