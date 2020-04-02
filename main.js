
// random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
//variable for the number of balls
const numBalls = 75;
const balls = [];
//changes the properties of the balls
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes/movements
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 5 === 0 ? -15 : 17),
    y: Math.random() * 30
  };
//animation of balls
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 3000, // random duration/speed
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

    
//function to change picture when hovering over button
function changePic()  {
  document.getElementById("profilePic").src = "images/photo.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/normal.jpg";
  }
 
