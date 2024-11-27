// Date countdown
var counter = document.getElementById("countdown");

const comp_date = new Date("4/5/23");
const current_date = new Date();

const diff = Math.ceil((comp_date-current_date) / (1000 * 60 * 60 * 24)); 

if (diff > 0){
    counter.innerHTML = diff + " days away to our Provincial Championship 🥳";
} else {
    counter.innerHTML = "Currently at our Provincial Championship 🥳";
}

// Autotyper for the landing page text
var autoTyper = new Typed("#intro-text", {
    strings: ["Builders...", "Programmers...", "Business People...", "Viking Robotics."],
    backSpeed: 25,
    typeSpeed: 25
})