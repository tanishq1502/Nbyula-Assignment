import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {

let history = useNavigate();

  return (
    <>
      <div class="login-page">
        <div class="form">
            <div class="login">
                <div class="login-header">

                    <h3>Enter your details to login!</h3>

                </div>
            </div>
            <form class="login-form">
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required />
                <button onClick={() => {history('/quiz')}}>login</button>
                <p class="message">Not registered? <a href="/">Create an account</a></p>
            </form>
        </div>
    </div>
    </>
  );
}

export default Login;