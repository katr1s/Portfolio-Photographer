let img_1 = document.querySelector("#img-1");
let img_2 = document.querySelector("#img-2");
let img_3 = document.querySelector("#img-3");
let img_4 = document.querySelector("#img-4");
let img_5 = document.querySelector("#img-5");
let img_6 = document.querySelector("#img-6");
let img_Select = document.querySelector(".absoluteImage");
let IMAGE = ""

img_Select.addEventListener('click', function(){
	img_Select.classList.add("hidden");
})

img_1.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-alex-wolf-mx-14358787.jpg"
	Select(IMAGE);
})

img_2.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-valeria-boltneva-597200.jpg"
	Select(IMAGE);
})

img_3.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-kourosh-qaffari-1921168.jpg"
	Select(IMAGE);
})

img_4.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-marlene-leppänen-1183266.jpg"
	Select(IMAGE);
})

img_5.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-spolyakov-16762315.webp"
	Select(IMAGE);
})

img_6.addEventListener('click', function(){
	let IMAGE = "src/Assets/Work/pexels-spolyakov-16762316.webp"
	Select(IMAGE);
})


function Select(IMAGE){
	img_Select.innerHTML = `
	<img src=${IMAGE} alt="">
	`
	img_Select.classList.remove('hidden')
}