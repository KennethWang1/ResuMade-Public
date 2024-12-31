import './css/Signup.css';

function Signup() {
  return (
    <div username = "signup-container" id = "signup-container">
      <h1 className='login-title' id = 'login-title'>Sign Up</h1>
      <form action="http://localhost:3001/api/signup" method="POST" style={{position: 'relative',top: '-3vh', alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{paddingBottom: '10px'}}>
          <label className="username" id = 'username-label'>Email: </label>
          <input name = "email" type="email" className="username" id="username" value = ""/>
        </div>

        <div style={{padding: '10px'}}>
          <label className="firstname" id = 'firstname-label'>First Name: </label>
          <input name = "firstname" type="text" className="firstname" id="firstname" value = ""/>
        </div>

        <div style={{padding: '10px'}}>
          <label className="lastname" id = 'lastname-label'>Last Name: </label>
          <input name = "lastname" type="text" className="lastname" id="lastname" value = ""/>
        </div>

        <div style={{padding: '10px'}}>
          <label className="password" id = 'password-label'>Password: </label>
          <input name = "password" type="password" className="password" id="password" value = ""/>
        </div>

        <button id="submitbutton">Sign Up</button>
      </form>
      <h4 id = 'signup-link' className='signup-link'>Already have an account? <a href='./login' style={{textDecoration: 'underline', cursor: 'pointer', color: 'var(--tertiary)'}}>Login Here!</a></h4>
    </div>
  );
}

export default Signup;
