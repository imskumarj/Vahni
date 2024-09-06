// Function to retrieve fire department data from local storage
function getFireDepartments() {
    return JSON.parse(localStorage.getItem('fireDepartments')) || [];
}

// Function to add a new fire department to local storage
function addFireDepartment(data) {
    const fireDepartments = getFireDepartments(); // Retrieve existing fire departments
    fireDepartments.push(data); // Append new fire department data
    localStorage.setItem('fireDepartments', JSON.stringify(fireDepartments)); // Save back to local storage
}
