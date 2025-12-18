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

function showError(input, message, green = false) {
    clearError(input); // Ta bort ev. tidigare felmeddelande först
    const p = document.createElement('p');
    p.textContent = message;
    if (!green) {
        p.style.color = "#ff0000ff";
    } else if (green) {
        p.style.color = "#00ff51ff";
    }
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
    let validated = false;
	event.preventDefault();
    if (!validateName(firstNameInput)) {
        showError(firstNameInput, "Ogiltiga tecken i förnamnet.");
    } else if  (!validateName(lastNameInput)) {
        showError(lastNameInput, "Ogiltiga tecken i efternamnet.");
    } else if (!validateEmail(emailInput)) {
        showError(emailInput, "Fel format på mailadressen.");
    } else if (!validateMessage(messageTextarea)) {
        showError(messageTextarea, `${charCount}/20 - Ej tillräckligt många tecken.`)
    } else {
        validated = true;
    }
	
    if (validated) {
        alert("Formulär skickat!");
        clearForm();
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
        showError(messageTextarea, `${charCount}/20 - Ej tillräckligt många tecken.`)
    } else {
        showError(messageTextarea, `${charCount}/20 - Godkänt antal tecken.`, true);
    }
});
