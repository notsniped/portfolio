/* Heading card background image carousel */
const background_images = [
    "bg_1.jpg",
    "bg_2.jpg",
    "bg_3.jpg",
    "bg_4.jpg"
];
const bg_index = Math.floor(Math.random() * background_images.length);
const active_background = background_images[bg_index];
console.log(active_background)
try {
    document.getElementById("heading_container").style.backgroundImage = "url('resources/'" + active_background + "')";
}
catch {
    console.error("Couldn't load background image.")
}

/* Functions */
function fun_fact() {
    window.alert("Fun Fact: I was too lazy to make a carrd, so I made an entire website.")
}
