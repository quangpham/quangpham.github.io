jQuery(".owl-carousel.owl-services").owlCarousel({
	items   : 4,
	margin  : 30,
	nav     : false,
	navText : ['', ''],
	dots    : true,
	loop    : true,
	responsive : {
		0: {
			items   : 1
		},
		768: {
			items   : 2
		},
		992: {
			items   : 3
		}
	}
});

jQuery(".owl-carousel.owl-testimonials2").owlCarousel({
	items   : 1,
	nav     : false,
	navText : ['', ''],
	dots    : true
}).on('changed.owl.carousel', function(event) {
    window.sendDataToMongolab("website", {ext_url: "testimonials " + event.item.index.toString()} );
});

jQuery(".owl-carousel.owl-thumbs").owlCarousel({
	items   : 3,
	margin  : 30,
	nav     : true,
	navText : ['', ''],
	dots    : false,
	loop    : false,
	responsive : {
		0: {
			items : 2
		},
		768: {
			items : 3
		},
		992: {
			items : 4
		}
	}
});

jQuery(".owl-carousel.owl-clients").owlCarousel({
	items   : 4,
	margin  : 30,
	nav     : true,
	navText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	dots    : false,
	loop    : true,
	responsive : {
		0: {
			items   : 2
		},
		768: {
			items   : 3
		},
		992: {
			items   : 4
		}
	}
}).on('changed.owl.carousel', function(event) {
    window.sendDataToMongolab("website", {ext_url: "clients " + event.item.index.toString()} );
});

jQuery(".owl-carousel.owl-slider").owlCarousel({
	items   : 1,
	nav     : true,
	navText : ['', ''],
	loop    : true
});