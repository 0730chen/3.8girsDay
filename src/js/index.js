var log = function(){
		console.log.apply(console, arguments)
	}


	var windowWidth = window.screen.width 
	var windowHeight = window.screen.height

	function createSnow(){
		var left = 0
		var top = 0

		var left_random = Math.random()*windowWidth
		var top_random = Math.random()*windowHeight
		var div = document.createElement('div')
		div.className = 'snow'
		div.style.transform = 'scale('+(Math.random())+')'

		document.body.append(div)

		setInterval(function(){
			div.style.left = left_random + left +'px'
			div.style.top = top_random + top + 'px'
			left += 0.2
			top += 0.2

			if(left_random + left >= windowWidth) {
                left_random = Math.random()
                left = 0
			}
			if(top_random +top >= windowHeight){
				top_random =Math.random()
				top = 0
			}
		}, 10)
	}
	for(var i = 0; i < 200; i++){
		createSnow()
	}

	var button = document.querySelector('button')
	var bg = document.querySelector('body')
	log(bg)
	button.addEventListener('click', function(){
		if(bg.classList[0] == 'beijing') {
			bg.classList.remove('beijing')
		} else {
			bg.classList.add('beijing')
		}
	})

  