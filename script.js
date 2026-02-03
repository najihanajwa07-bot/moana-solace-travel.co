var charIndex = 0; 
var typingSpeed = 50; 

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");

  setTimeout(function () {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
  }, 2500);
}

function showInfo(place) {
  var infoData = {
    beach: {
      title: "Lalomanu Beach",
      text: "The sand here is like sugar! Lalomanu is the perfect place to relax and enjoy the sunrise.",
      bg: "pixel_beach.png" 
    },
    trench: {
      title: "To Sua Ocean Trench",
      text: "Be careful on the ladder! This natural swimming hole is 30 meters deep and filled with sea water.",
      bg: "pixel_trench.png"
    },
    museum: {
      title: "Museum of Samoa",
      text: "Learn about our rich history and ancient navigators.",
      bg: "pixel_museum.png"
    },
    village: {
      title: "Samoan Village",
      text: "Experience the Fa'a Samoa (The Samoan Way) in our traditional village.",
      bg: "pixel_village.png"
    },
    culture: {
      title: "Fiafia Night",
      text: "Enjoy the rhythm of the drums and the fire knife dance!",
      bg: "pixel_culture.png"
    }
  };

  if (infoData[place]) {
    // Hide map
    document.getElementById("game-container").classList.add("hidden");
    
    // Show location screen
    var screen = document.getElementById("location-screen");
    screen.classList.remove("hidden");

    // SET BACKGROUND - THE FIXED LINE
    screen.style.backgroundImage = "url('" + infoData[place].bg + "')";
    
    document.getElementById("loc-title").innerText = infoData[place].title;

    // Reset and start typewriter
    document.getElementById("loc-text").innerHTML = ""; 
    charIndex = 0; 
    typeEffect(infoData[place].text, "loc-text");
  }
}

function typeEffect(text, elementId) {
  if (charIndex < text.length) {
    document.getElementById(elementId).innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(function() {
      typeEffect(text, elementId);
    }, typingSpeed);
  }
}

function goBackToMap() {
  document.getElementById("location-screen").classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");
}