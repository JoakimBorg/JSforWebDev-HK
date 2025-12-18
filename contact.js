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
    return value.length === 0 ? true : /^[A-Za-zÅÄÖåäö]+$/.test(value);
}

// Validera email
function validateEmail(input) {
    const value = input.value.trim();
    // Regex taget från nätet
    return value.length === 0 ? true : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

let charCount = 0;

function validateMessage(input) {
    const string = input.value.trim();
    charCount = string.length;
    return string.length >= 20;
}

function showError(input, message) {
    clearError(input); // Ta bort ev. tidigare felmeddelande först
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
    form.reset();
    // Ta bort felmeddelanden
    clearError(firstNameInput);
    clearError(lastNameInput);
    clearError(emailInput);
    clearError(messageTextarea);
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
	charCount = 0;
    clearForm();
});

// Event listeners för realtidsuppdateringar
firstNameInput.addEventListener('input', function() {
    if (!validateName(firstNameInput)) {
        showError(firstNameInput, "Ogiltiga tecken i förnamnet.")
    } else {
        clearError(firstNameInput);
    }
});
lastNameInput.addEventListener('input', function() {
	if (!validateName(lastNameInput)) {
        showError(lastNameInput, "Ogiltiga tecken i efternamnet.")
    } else {
        clearError(lastNameInput);
    }
});
emailInput.addEventListener('input', function() {
	if (!validateEmail(emailInput)) {
        showError(emailInput, "Fel format på mailadressen.")
    } else {
        clearError(emailInput);
    }
});
messageTextarea.addEventListener('input', function() {
	if (!validateMessage(messageTextarea)) {
        showError(messageTextarea, `Fel antal tecken: ${charCount}/20`)
    } else {
        clearError(messageTextarea);
    }
});
