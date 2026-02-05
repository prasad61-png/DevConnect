// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    if(password !== confirmPassword) return alert("Passwords do not match!");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u=>u.email===email)) return alert("Email already registered!");
    const newUser = { email, password, bio:"", skills:[], github:"", linkedin:"" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    alert("Signup successful!");
    window.location.href="feed.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u=>u.email===email && u.password===password);
    if(!user) return alert("Invalid email or password!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href="feed.html";
  });
}

// Password reset
function resetPassword() {
  const email = prompt("Enter your email for password reset:");
  if(!email) return;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u=>u.email===email);
  if(!user) return alert("Email not found!");
  const newPassword = prompt("Enter new password:");
  if(!newPassword) return;
  user.password = newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Password updated! You can now login.");
}

