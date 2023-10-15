// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hireForm = document.getElementById('hireForm');
    
    if (hireForm) {
        hireForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(hireForm);
            
            // Handle form data as needed (e.g., send it to a server)
            console.log('Form submitted with data:', formData);
        });
    }
});
