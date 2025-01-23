import './css/Dashboard.css';

function Dashboard() {
  if(document.cookie.includes('auth=') && document.cookie.includes('authVersion=')){
    checkToken(document.cookie.split('auth=')[1].split('xEnding//;')[0], document.cookie.split('authVersion=')[1].split('yEnding//;')[0]).then((response) => {
      if(!response){
        window.location.href = './login';
      }
    });
  }else{
    window.location.href = './login';
  }

  return (
    <div className = "dashboard" id = "dashboard">
      not finished
    </div>
  );
}

async function checkT(t, v) {
  const response = await fetch(window.location.origin + '/api/v1/checkToken', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${[t,v]}`,
    },
    redirect: "follow",
  });
  const data = await response;
  if(data.ok) {
    return data;
  }
  return false;
}

function checkToken(t, v){
  const myPromise = new Promise(async function(myResolve, myReject) {
    checkT(t, v).then((response) => {
      if(response){
        myResolve("OK");
        response.json().then((data) => {
          document.cookie = `refreshToken=${data.refreshToken}; Secure`;
        });
      }else{
        myReject("Failed");
      }
    }).catch((err) => {
      myReject(err);
    });
  });
  
  return myPromise.then(
    function(value) {
      return true;
    },
    function(error) {
      //pop up a red banner warning of a failed login
      window.location.href = './login';
      return false;
    }
  );
}

export default Dashboard;