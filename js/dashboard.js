const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) window.location.href="index.html";

document.getElementById("userEmail").textContent=currentUser.email;

const posts = JSON.parse(localStorage.getItem("posts")) || [];
const userPosts = posts.filter(p=>p.author===currentUser.email);

document.getElementById("totalPosts").textContent=userPosts.length;

let totalLikes=0, totalComments=0;
userPosts.forEach(p=>{
  totalLikes+=p.likes;
  totalComments+=p.comments.length;
});

document.getElementById("totalLikes").textContent=totalLikes;
document.getElementById("totalComments").textContent=totalComments;

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href="index.html";
}
