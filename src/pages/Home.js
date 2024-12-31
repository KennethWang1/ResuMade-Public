import './css/Home.css';
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h4 className='title' id = 'title'><a className='title' href='./'>ResuMade</a></h4>
      <div className='divider' id = 'divider'/>
      <h4><a href='./about-us'>About Us</a></h4>
      <h4></h4>
      <h4></h4>
      <Link id = "login" className='login' to = './login'>Login</Link>
      <Link id = "signup" className='signup' to = './signup'>Sign Up</Link>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      
    </footer>
  );
}

function Home() {
  return (
      <body>
          <div className = "body" id = "body">
            <Header/>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1 className = "resume-title" id = "resume-title">Job Search Taking Too Long?</h1>
                <h2 className = "resume-subtitle" id = "resume-subtitle">Save hours of time customising your resume, try ResuMade!</h2>
                <button className='start-now' id = 'start-now'>Start Now!</button>
              </div>
            <Footer/>
          </div>
      </body>
  );
}

export default Home;