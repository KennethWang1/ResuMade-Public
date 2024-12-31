import './css/Login.css';

function Login() {
  return (
    <div username = "signup-container" id = "signup-container">
      <h1 className='login-title' id = 'login-title'>Sign In</h1>
      <form action="http://localhost:3001/api/login" method="POST" style={{position: 'relative',top: '4vh', alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{paddingBottom: '10px'}}>
          <label className="username" id = 'username-label'>Email: </label>
          <input name = "email" type="email" className="username" id="username" value = ""/>
        </div>

        <div style={{padding: '10px'}}>
          <label className="password" id = 'password-label'>Password: </label>
          <input name = "password" type="password" className="password" id="password" value = ""/>
        </div>

        <button id="submitbutton">Login</button>
      </form>
      <h4 id = 'signup-link' className='signup-link'>Don't have an account? <a href='./signup' style={{textDecoration: 'underline', cursor: 'pointer', color: 'var(--tertiary)'}}>Sign up Here!</a></h4>
    </div>
  );
}

export default Login;
