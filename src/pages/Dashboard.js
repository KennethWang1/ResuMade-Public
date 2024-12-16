import './css/Dashboard.css';

function EditPortfolio() {
  return (
    <div className = "dashboard" id = "dashboard">
      <div id = "skills">
        {getSkills("yum")}
      </div>
    </div>
  );
}

function getSkills(type){
  //get skills here
  const skills = [{"title": "title 1", 
                   "body" : "body 1"},
                  {"title": "title 2", 
                    "body": "body 2"},
                  {"title": "title 3", 
                   "body" : "body 3"}];

    const skillsComponents = skills.map(skill => (
    <li key={skill.title}>
      <h3>{skill.title}</h3>
      <p>{skill.body}</p>
    </li>
  ));

  return(
    <ul className='skillList'>
      {skillsComponents}
    </ul>
  );
}

export default EditPortfolio;
