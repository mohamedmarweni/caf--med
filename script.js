// This function will be executed when the page loads
function onLoad() {
  // Add some interactivity to the page
  document.querySelector("h1").addEventListener("click", function() {
    alert("Hello, world!");
  });
}

// Call the onLoad function when the page loads
window.onload = onLoad;