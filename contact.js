// DOM Selection
const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const subjectSelect = document.getElementById('subject');
const messageTextarea = document.getElementById('message');
const submitBtn = document.querySelector('.form-submit-btn');
const resetBtn = document.querySelector('.form-reset-btn');

// Character counter element (to be created in JS or HTML)
let charCounter;

// Validera namn
function validateName(input) {
    const value = input.value.trim();
    
    // Omöjligt att läsa detta, men tog från internet
    return /^[A-Za-zÅÄÖåäö]+$/.test(value);
}

// Validera email
function validateEmail(input) {
    const value = input.value.trim();

    // Omöjligt att läsa detta, men tog från internet
    return /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(value);
}

function validateMessage(input) {
	const string = input.value;
    return length(string) >= 20;
}

function showError(input, message) {
	// TODO: Visa felmeddelande
}

function clearError(input) {
	// TODO: Ta bort felmeddelande
}

function clearForm() {
	// TODO: Rensa alla fält
}

// Character Counter
function updateCharCounter() {
	// TODO: Visa charactercounter
}

// Form Submission Handler
form.addEventListener('submit', function(event) {
	event.preventDefault();
    if (!validateName(firstNameInput)) {
        // TODO: Error message 
    }

    if (!validateName(lastNameInput)) {
        // TODO: Error message
    }

    if (!validateEmail(emailInput)) {
        // TODO: Error message
    }
	
});

// Reset Handler
resetBtn.addEventListener('click', function() {
	// TODO: Rensa felmeddelanden och räknare
});

// Event listeners för realtidsvalidering och räknare
firstNameInput.addEventListener('input', function() {
	// TODO: Validera förnamn i realtid
});
lastNameInput.addEventListener('input', function() {
	// TODO: Validera efternamn i realtid
});
emailInput.addEventListener('input', function() {
	// TODO: Validera e-post i realtid
});
messageTextarea.addEventListener('input', function() {
	updateCharCounter();
	// TODO: Validera meddelande i realtid
});
