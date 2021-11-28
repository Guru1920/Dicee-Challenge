var randomnumber = Math.floor(Math.random() * 6)+1;

var randomimages ="dice"+randomnumber+".png";

var randonimagesource ="images/"+ randomimages;

var image=document.querySelectorAll("img")[0];

image.setAttribute("src", randonimagesource);

var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomimages1 ="dice"+randomnumber1+".png";

var randonimagesource1 ="images/"+ randomimages1;

var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src", randonimagesource1);


if (randomnumber > randomnumber1)
 {
  document.querySelector("h1").innerHTML = "Player 1st Winner!";
}
else if (randomnumber1 > randomnumber) 
{
  document.querySelector("h1").innerHTML = "Player 2st Winner!";
}
else 
{
  document.querySelector("h1").innerHTML ="Draw!";
}




