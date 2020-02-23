var buttonMessage = document.querySelector(".button-message");
var formPopup = document.querySelector(".form-message");
var closeForm = formPopup.querySelector(".form-message-close");

var form = formPopup.querySelector("form");
var youName = formPopup.querySelector("[name=name]");
var email = formPopup.querySelector("[name=email]");
var fieldText = formPopup.querySelector("[name=field-text]");

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("field-text]");
  } 
    catch (err) {
    isStorageSupport = false;
}

buttonMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
    
    if (storage) {
    	fieldText.value = storage;
    }

    youName.focus();
});

closeForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	formPopup.classList.remove("modal-show");
	formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!youName.value || !email.value || !fieldText.value) {
	   evt.preventDefault();
	   formPopup.classList.remove("modal-error");
	   formPopup.offsetWidth = formPopup.offsetWidth;
	   formPopup.classList.add("modal-error");
    } else {
    	if (isStorageSupport) {
    	localStorage.setItem("field-text", fieldText.value);
       }
    }
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (formPopup.classList.contains("modal-show")) {
			formPopup.classList.remove("modal-show")
			formPopup.classList.remove("modal-error");
		}
	}
});
