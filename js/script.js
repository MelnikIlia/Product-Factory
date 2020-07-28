/* Switcher */
$(".feature-tabs__item").click(function () {
	event.preventDefault();
	$(".feature-tabs__item").removeClass("active");
	$(this).toggleClass("active");
});

$(".button--burger-menu").click(function () {
	$(this).toggleClass("active");
	if ($(".nav__menu").hasClass("toggle")) {
		$("body").removeClass("lock");
		$(".nav__menu").removeClass("toggle");
	} else {
		$("body").addClass("lock");
		$(".nav__menu").addClass("toggle");
	}
});

/* Accordion */
$(".faq-list__item-head").click(function () {
	event.preventDefault();
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).siblings(".faq-list__item-body").slideUp(200);
	} else {
		$(".faq-list__item-head")
			.removeClass("active")
			.siblings(".faq-list__item-body")
			.slideUp(200);
		$(this).addClass("active");
		$(this).siblings(".faq-list__item-body").slideDown(200);
	}
});

$("#register").click(function () {
	$(".modal-register").fadeIn("300").css("display", "flex");
	$(".form-sign-up").addClass("showed");
	$("body").addClass("lock");
});

$(".modal-close").click(function () {
	$(".form-sign-up").removeClass("showed");
	$(".modal-register").fadeOut("300");
	$("body").removeClass("lock");
});

/* Card Show start */
(function() {
	if(window.matchMedia("(max-width: 1024px)").matches){
		$(document).click(function(e) {
			!e.target.closest(".member-card")
				? $(".member-about").removeClass("show") : undefined;
		});
		$(".member-card").click(function () {
			event.preventDefault();
			$(".member-about").removeClass("show");
			$(this).find(".member-about").toggleClass("show");
		});
	}
}
)();
/* Card Show end */

/* Slider Slick */
$(document).ready(function () {
	$(".product-gallery").slick({
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
		]
	});
});

function elemMove(mediaQuery, what, from, to) {
	return window.matchMedia("(max-width: " + mediaQuery + "px)").matches
		? what.appendTo("." + to + "")
		: what.appendTo("." + from + "");
}

$(document).ready(function () {
	elemMove(
		1023,
		$("[data-move*='schedule']"),
		'schedule-duration',
		'schedule-line'
	);
	window.addEventListener("resize", function () {
		elemMove(
			1023,
			$("[data-move*='schedule']"),
			'schedule-duration',
			'schedule-line'
		);
	});
});