document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('#layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}
document.addEventListener('keydown', keyPressed);
let right = 750
function keyPressed(e) {
    if (e.code === "ArrowRight") {
        //document.getElementById('dog').style.right = "500px"
        right = right - 10
        dog.style.right = right + "px"
        console.log("ArrowRight Pressed");
    } else if (e.code === "ArrowLeft") {
        right = right + 10
        dog.style.right = right + "px"
        console.log("ArrowLeft Pressed");
    }
    else { console.log(e) }
}
