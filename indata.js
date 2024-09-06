// Function to retrieve institution data from local storage
function getInstitutions() {
    return JSON.parse(localStorage.getItem('institutions')) || [];
}

// Function to add a new institution to local storage
function addInstitution(data) {
    const institutions = getInstitutions(); // Retrieve existing institutions
    institutions.push(data); // Append new institution data
    localStorage.setItem('institutions', JSON.stringify(institutions)); // Save back to local storage
}
