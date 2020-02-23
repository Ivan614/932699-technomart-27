var btnGoodsBuy = document.querySelectorAll(".button-goods-buy");
var popupOrder = document.querySelector(".popup-order");
var closeOrder = popupOrder.querySelector(".popup-order-close");
var btnOrderContinue = popupOrder.querySelector(".button-popup-order-continue");

btnGoodsBuy.forEach(function (entry) {
    entry.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.add("modal-show");
   });
});

closeOrder.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.remove("modal-show");
});

btnOrderContinue.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupOrder.classList.contains("modal-show")) {
			popupOrder.classList.remove("modal-show")
		}
	}
});

