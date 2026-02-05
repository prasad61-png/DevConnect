const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) window.location.href="index.html";

const bioInput=document.getElementById("bio");
const skillsInput=document.getElementById("skills");
const githubInput=document.getElementById("github");
const linkedinInput=document.getElementById("linkedin");
const skillsPreview=document.getElementById("skillsPreview");

// Load profile
bioInput.value=currentUser.bio||"";
skillsInput.value=currentUser.skills.join(", ")||"";
githubInput.value=currentUser.github||"";
linkedinInput.value=currentUser.linkedin||"";

function renderSkills(){
  skillsPreview.innerHTML="";
  const skills=skillsInput.value.split(",").map(s=>s.trim()).filter(s=>s);
  skills.forEach(skill=>{
    const badge=document.createElement("span");
    badge.className="badge bg-primary me-1 mb-1";
    badge.textContent=skill;
    skillsPreview.appendChild(badge);
  });
}
skillsInput.addEventListener("input", renderSkills);
renderSkills();

function saveProfile(){
  const users=JSON.parse(localStorage.getItem("users"))||[];
  const userIndex=users.findIndex(u=>u.email===currentUser.email);
  if(userIndex!==-1){
    users[userIndex].bio=bioInput.value;
    users[userIndex].skills=skillsInput.value.split(",").map(s=>s.trim()).filter(s=>s);
    users[userIndex].github=githubInput.value;
    users[userIndex].linkedin=linkedinInput.value;
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("currentUser",JSON.stringify(users[userIndex]));
    alert("Profile saved!");
    renderSkills();
  }
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href="index.html";
}
