document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve form data
    var aadharNumber = document.getElementById('aadharNumber').value;
    var panNumber = document.getElementById('panNumber').value;
  
    // Perform basic validation
    if (aadharNumber.length !== 12) {
      alert('Please enter a valid Aadhar number.');
      return;
    }
  
    if (panNumber.length !== 10) {
      alert('Please enter a valid PAN card number.');
      return;
    }
  
    // Make an AJAX request to fetch basic information
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/getBasicInfo?aadharNumber=' + aadharNumber);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        // Populate form fields with fetched data
        document.getElementById('name').value = data.name;
        document.getElementById('fatherName').value = data.fatherName;
        document.getElementById('motherName').value = data.motherName;
      } else {
        alert('Failed to fetch basic information. Please try again later.');
      }
    };
    xhr.send();
  });
  