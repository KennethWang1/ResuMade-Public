import './css/Home.css';
import { Link } from "react-router";
import {Header, Footer} from './Common.js';

function Home() {
  return (
      <body>
        <Header/>
          <div className = "body" id = "body">
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1 className = "resume-title" id = "resume-title">Job Search Taking Too Long?</h1>
                <h2 className = "resume-subtitle" id = "resume-subtitle">Save hours of time customizing your resume, try ResuMade!</h2>
                <Link to = './signup' className='start-now' id = 'start-now'>Start Now!</Link>
              </div>
          </div>
          <Footer/>
      </body>
  );
}

export default Home;