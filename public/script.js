document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Ensure that username and password are not empty
  if (!username || !password) {
      document.getElementById('message').innerText = "Please enter both username and password.";
      return;
  }
  
  // Send user data to the server
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert("Oops! Server didn't respond at that moment. Please try again later !");
      document.getElementById('message').innerText = ""; // Clear message on success
      document.getElementById('loginForm').reset(); // Reset form fields
    } else {
      document.getElementById('message').innerText = "Login Failed!";
    }
  })
  .catch(error => {
    // Handle any errors (e.g., server not responding)
    document.getElementById('message').innerText = "Oops! Server didn't respond. Please try again later.";
  });
});
