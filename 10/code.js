function random_color() {
    var x = (Math.round (Math.random() * 255));
    var y = (Math.round (Math.random() * 255));
    var z = (Math.round (Math.random() * 255));
    var Color = "rgb(" + x + "," + y + "," + z + ")";
 console.log(Color);
  
    document.body.style.background = Color;
    }

function setColor() {
    setInterval(random_color, 1000);
    random_color();
}
function clearTimeout() {
    clearInterval(random_color)
}