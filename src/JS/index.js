let img_1 = document.querySelector(".img-1");
let img_2 = document.querySelector(".img-2");
let img_3 = document.querySelector(".img-3");
let img_4 = document.querySelector(".img-4");
let img_5 = document.querySelector(".img-5");
let img_6 = document.querySelector(".img-6");
let img_Select = document.querySelector(".absoluteImage");
let IMAGE = ""

img_1.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-alex-wolf-mx-14358787.jpg"
	Select(IMAGE);
})



function Select(IMAGE){
	img_Select.innerHTML = `
	<img src=${IMAGE} alt="">
	`
	img_Select.classList.remove('hidden')
}