(function () {
	'use strict';

	const images = document.querySelectorAll('img');

	for (let i = 0; i < images.length; i++) {
		console.log(images[i].src);
		images[i].addEventListener('click', function () {
			document.getElementById('overlay').style.backgroundImage = `url(${images[i].src})`;
			document.getElementById('overlay').style.display = 'block';
			document.querySelector('main').style.opacity = '0.25';
			document.querySelector('header').style.opacity = '0.25';
		});
	}

	document.getElementById('overlay').addEventListener('click', function () {
		this.style.display = 'none';
		document.querySelector('main').style.opacity = '1';
		document.querySelector('header').style.opacity = '1';
	});
})();
