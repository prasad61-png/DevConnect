const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) window.location.href="index.html";

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderFeed(){
  const feed = document.getElementById("feed");
  feed.innerHTML="";
  posts.forEach(post=>{
    feed.innerHTML+=`
      <div class="card post-card shadow-sm">
        <div class="card-body">
          <h6>${post.author}</h6>
          <p>${post.content}</p>
          <button class="btn btn-outline-primary btn-sm" onclick="likePost(${post.id})">❤️ ${post.likes}</button>
          ${post.author===currentUser.email?`<button class="btn btn-outline-danger btn-sm ms-2" onclick="deletePost(${post.id})">Delete</button>`:""}
          <div class="mt-3">
            <input id="comment-${post.id}" class="form-control comment-input" placeholder="Add comment">
            <button class="btn btn-sm btn-secondary mt-1" onclick="addComment(${post.id})">Comment</button>
          </div>
          <div class="mt-2">
            ${post.comments.map(c=>`<small class="comment-text"><b>${c.user}:</b> ${c.text}</small><br>`).join("")}
          </div>
        </div>
      </div>
    `;
  });
}

function createPost(){
  const content=document.getElementById("postContent").value.trim();
  if(!content) return alert("Post cannot be empty");
  const newPost={id:Date.now(), author:currentUser.email, content, likes:0, comments:[]};
  posts.unshift(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
  document.getElementById("postContent").value="";
  renderFeed();
}

function likePost(id){
  posts = posts.map(p=>{if(p.id===id) p.likes++; return p;});
  localStorage.setItem("posts", JSON.stringify(posts));
  renderFeed();
}

function deletePost(id){
  posts = posts.filter(p=>p.id!==id);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderFeed();
}

function addComment(id){
  const input=document.getElementById(`comment-${id}`);
  const text=input.value.trim();
  if(!text) return;
  posts=posts.map(p=>{if(p.id===id)p.comments.push({user:currentUser.email,text});return p;});
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value="";
  renderFeed();
}

renderFeed();

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href="index.html";
}


