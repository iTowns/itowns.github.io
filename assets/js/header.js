document.getElementById('header-open-menu-button').onclick = () => {
	document.getElementById('header-hidable-menu')
		.classList.add('displayed');
	document.body.classList.add('stop-scrolling');
}

document.getElementById('header-close-menu-button').onclick = () => {
	document.getElementById('header-hidable-menu')
		.classList.remove('displayed');
	document.body.classList.remove('stop-scrolling');
}

let timer;

window.addEventListener('resize', () => {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	} else {
		document.getElementById('header-hidable-menu')
			.classList.add('stop-transition');
	}
	timer = setTimeout(
		() => {
			document.getElementById('header-hidable-menu')
				.classList.remove('stop-transition');
			timer = null;
		},
		100,
	);
});

