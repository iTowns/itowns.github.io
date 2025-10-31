const modals = document.getElementsByClassName('modal');

for (let modal of modals) {
	const id = modal.id.split('-modal')[0];
	const modalWrapper = document.getElementById(`${id}-modal-wrapper`);
	const displayButton = document.getElementById(`${id}-display-button`);
	const hideButton = document.getElementById(`${id}-hide-button`);

	const onClickOutside = (e) => {
		if (!modal.contains(e.target)){
			hideModal();
		}
	};
	const onKeyUp = (e) => {
		if (e.key === 'Escape') {
			hideModal();
		}
	}

	const showModal = () => {
		modalWrapper.classList.add('active');
		document.body.classList.add('stop-scrolling');
		setTimeout(
			() => {
				window.addEventListener('click', onClickOutside);
				window.addEventListener('keyup', onKeyUp);
			},
			100,
		);
	}

	const hideModal = () => {
		modalWrapper.classList.remove('active');
		document.body.classList.remove('stop-scrolling');
		window.removeEventListener('click', onClickOutside);
		window.removeEventListener('keypress', onKeyUp);
	}

	displayButton.onclick = () => { showModal(); }
	hideButton.onclick = () => { hideModal(); }
}

