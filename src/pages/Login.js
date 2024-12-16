import './css/Login.css';

function Login() {
  return (
    <div username = "signup" id = "signup">
      <form action="http://localhost:3001/api/signup" method="POST">
        <label className="username">Username</label>
        <input name = "username" type="text" className="username" id="username" value = "yum"/>

        <label className="password">Password</label>
        <input name = "password" type="password" className="password" id="password" value = "yum^2"/>

        <button id="submitbutton">Register</button>
      </form>
    </div>
  );
}

export default Login;
