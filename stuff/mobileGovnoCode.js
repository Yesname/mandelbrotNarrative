function turnMobile(){
	let allLayers = document.getElementsByClassName('layers');
	for (let i = 0; i < allLayers.length; i++){
		allLayers[i].classList.add('mobile');
	}
	if (allLayers[0].classList.contains('zero')){
		allLayers[0].classList.add('zeromobile');
	}
}