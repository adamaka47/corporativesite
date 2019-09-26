$(document).ready(function() {
	let $window = $(window);

	$('header[data-parallax="true"]').each(function(i, el) {
		let $this = $(this)
		$(window).scroll(function() {
			let yPos = ($window.scrollTop()) / $this.data('speed')
			console.log($this.data('speed'))
			let coords = '50%' - yPos + 'px'

			$this.css({backgroundPosition: coords})
		})
	});

});