const examples = document.getElementsByClassName('home-example');

let index = Math.floor(Math.random() * examples.length);
examples[index].classList.add('visible');

function changeExample(increment) {
	examples[index].classList.remove('visible');
	index = Math.abs((index + increment) % examples.length);
	examples[index].classList.add('visible');
}

document.getElementById('previous-button').onclick = () => { changeExample(-1) }
document.getElementById('next-button').onclick = () => { changeExample(1) }

