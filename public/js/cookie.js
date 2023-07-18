window.addEventListener("message", function(event) {
  // Parse the received data
  console.log("Received message from: " + event.origin);  // Debug line
  console.log("Received message: " + event.data);  // Debug line
  var data = JSON.parse(event.data);
  // Save the data to localStorage
  localStorage.setItem('name', data.name);
  var name = localStorage.getItem('name');
  console.log("name =" + data.name);
  console.log(name);
  
});
