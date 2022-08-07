const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
const init = function(){
	let items = document.querySelectorAll('section');
	for (let i = 0; i < items.length; i++){
		items[i].style.background = "#" + randomColor();
	}
}
init();