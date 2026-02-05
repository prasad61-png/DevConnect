if(!localStorage.getItem("users")){
  const dummyUsers=[
    {
      email:"alice@example.com",
      password:"123456",
      bio:"Frontend developer with a passion for React.",
      skills:["HTML","CSS","JavaScript","Bootstrap"],
      github:"https://github.com/alice",
      linkedin:"https://linkedin.com/in/alice"
    },
    {
      email:"bob@example.com",
      password:"123456",
      bio:"Fullstack enthusiast, loves coding challenges.",
      skills:["Node.js","Express","MongoDB","JS"],
      github:"https://github.com/bob",
      linkedin:"https://linkedin.com/in/bob"
    }
  ];
  localStorage.setItem("users",JSON.stringify(dummyUsers));
  localStorage.setItem("currentUser",JSON.stringify(dummyUsers[0]));
}

if(!localStorage.getItem("posts")){
  const dummyPosts=[
    {
      id:Date.now()+1,
      author:"alice@example.com",
      content:"Just finished my portfolio website! Check it out on GitHub.",
      likes:5,
      comments:[{user:"bob@example.com",text:"Looks amazing!"},{user:"alice@example.com",text:"Thanks Bob!"}]
    },
    {
      id:Date.now()+2,
      author:"bob@example.com",
      content:"Does anyone have tips for learning Node.js quickly?",
      likes:3,
      comments:[{user:"alice@example.com",text:"Start with building small APIs!"}]
    }
  ];
  localStorage.setItem("posts",JSON.stringify(dummyPosts));
}
