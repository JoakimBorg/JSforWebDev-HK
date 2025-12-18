// DOM Selection
const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const subjectSelect = document.getElementById('subject');
const messageTextarea = document.getElementById('message');
const submitBtn = document.querySelector('.form-submit-btn');
const resetBtn = document.querySelector('.form-reset-btn');

// Validera namn
function validateName(input) {
    const value = input.value.trim();
    return value === "" ? true : /^[A-Za-zÅÄÖåäö]+$/.test(value);
}

// Validera email
function validateEmail(input) {
    const value = input.value.trim();
    // Omöjligt att läsa detta, men tog från internet
    return value === "" ? true : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

let charCount = 0;

function validateMessage(input) {
	const string = input.value;
    charCount = string.length;
    return string === "" ? true : charCount >= 20;
}

function showError(input, message) {
    const p = document.createElement('p');
    p.textContent = message;
    p.style.color = "#ff0000ff";
    p.className = "input-error-message";
    input.parentNode.insertBefore(p, input.nextSibling);
}

function clearError(input) {
    const next = input.nextSibling;
    if (next && next.classList && next.classList.contains("input-error-message")) {
        next.remove();
    }
}

function clearForm() {
	// TODO: Rensa alla fält
}

// Form Submission 
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

// Reset
resetBtn.addEventListener('click', function() {
	// TODO: Rensa felmeddelanden och räknare
});

// Event listeners för realtidsuppdateringar
firstNameInput.addEventListener('input', function() {
    if (!validateName(firstNameInput)) {
        clearError(firstNameInput);
        showError(firstNameInput, "Ogiltiga tecken i förnamnet.")
    } else {
        clearError(firstNameInput);
    }
});
lastNameInput.addEventListener('input', function() {
	if (!validateName(lastNameInput)) {
        clearError(lastNameInput);
        showError(lastNameInput, "Ogiltiga tecken i efternamnet.")
    } else {
        clearError(lastNameInput);
    }
});
emailInput.addEventListener('input', function() {
	if (!validateEmail(emailInput)) {
        clearError(emailInput);
        showError(emailInput, "Fel format på mailadressen.")
    } else {
        clearError(emailInput);
    }
});
messageTextarea.addEventListener('input', function() {
	if (!validateMessage(messageTextarea)) {
        clearError(messageTextarea);
        showError(messageTextarea, `Fel antal tecken: ${charCount}/20`)
    } else {
        clearError(messageTextarea);
    }
});
