import './css/Dashboard.css';
import { useEffect } from 'react';
//import { loadPdf, TextBox } from './pdf';

let pdfUrl = '';

function Dashboard() {
  if (document.cookie.includes('auth=') && document.cookie.includes('authVersion=')) {
    checkToken(document.cookie.split('auth=')[1].split('xEnding//;')[0], document.cookie.split('authVersion=')[1].split('yEnding//;')[0]).then((response) => {
      if (!response) {
        window.location.href = './login';
      }
    });
  } else {
    window.location.href = './login';
  }

  const username = 'tempUser';

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  };

  const handleClickOutside = (event) => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(event.target) && event.target.id !== 'username' && event.target.id !== 'user-icon') {
      sidebar.style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard" id="dashboard">
      <header className="dashboard-header" id="dashboard-header">
        <div id="user-icon" className='user-icon'></div>
        <h3 className="dashboard-headers">Edit</h3>
        <h3 className="dashboard-headers">Generate</h3>
        <h3 className="dashboard-headers">
          <a href='./tutorials'>Tutorials</a>
        </h3>
        <div onClick={toggleSidebar} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', width:'20vw', right:'0', position: 'absolute'}}>
          <h3 id='username' className="dashboard-headers">{username}</h3>
          <img id='user-icon' className='user-icon' src='./sources/UserIcon.png' alt='User Icon'/>
        </div>
      </header>
      <Toolbar />
      <MainBody />
      <SideBar username={username} />
    </div>
  );
}

/*
function MainBody(){
  return (
    <div className="main-body" id="main-body">
      <LoadPdf/>
      <TextBox/>
    </div>
  );
}
  */

function MainBody(){
  return (
    <div className="main-body" id="main-body">
    </div>
  );
}

/*
function LoadPdf() {
  return (
    <div className="load-pdf" id="load-pdf">
      <h2 className="load-pdf-header">Load PDF</h2>
      <input type="file" id="pdf-file" accept=".pdf" onChange={(e) => loadPdf(URL.createObjectURL(e.target.files[0]))} />
    </div>
  );
}
  */

function Toolbar() {
  return (
    <div className="toolbar" id="toolbar">
      <button className='toolbar-button'>Settings</button>
      
    </div>
  );
}

function SideBar({ username }) {
  const tokenCount = 0;
  return (
    <div className="sidebar" id="sidebar" style={{display: 'none'}}>
      <h2 id='sidebar-username' className="sidebar-headers" style={{paddingLeft: '0px', paddingRight: '0px', marginRight: 'auto', cursor: 'default'}}>{username}</h2>
      <h4 className="sidebar-headers" style={{cursor: 'default'}}>Token Count:  {tokenCount}</h4>
      <h4 className="sidebar-headers">More Tokens</h4>
      <h4 className="sidebar-headers">Settings</h4>
      <h4 className="sidebar-headers">User Information</h4>
      <h4 className="sidebar-headers">Help</h4>
      <h4 style={{position: 'absolute', color: 'red', bottom: '10px', cursor: 'pointer', width: '100%'}} onClick={logout}>Logout</h4>
    </div>
  );
}

function logout() {
  document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'authVersion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  window.location.href = './login';
}

async function checkT(t, v) {
  const response = await fetch(window.location.origin + '/api/v1/checkToken', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${[t, v]}`,
    },
    redirect: "follow",
  });
  const data = await response;
  if (data.ok) {
    return data;
  }
  return false;
}

function checkToken(t, v) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await checkT(t, v);
      if (response) {
        resolve("OK");
        const data = await response.json();
        document.cookie = `refreshToken=${data.refreshToken}; Secure`;
      } else {
        reject("Failed");
      }
    } catch (err) {
      reject(err);
    }
  }).then(
    () => true,
    () => {
      window.location.href = './login';
      return false;
    }
  );
}

export default Dashboard;