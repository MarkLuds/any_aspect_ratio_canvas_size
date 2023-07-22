function setCanvasStlyeSize(canvas, canvas_orientation, canvas_orientation_multi, browser_fit){

	const canvas_orientation_multi_inv = 1 / canvas_orientation_multi;

	let width = canvas.width;
	let height = canvas.height;
	if( browser_fit === 'true' || browser_fit === true ){		
		width = window.innerWidth;
		height = window.innerHeight;		
	} else {
		if( canvas_orientation === 'vert' ){
			if( window.innerHeight < window.innerWidth * canvas_orientation_multi){		
				width = Math.round(window.innerHeight * canvas_orientation_multi_inv);
				height = window.innerHeight;
			} else {
				width = window.innerWidth;
				height = Math.round(window.innerWidth * canvas_orientation_multi);
			}

		} else if( canvas_orientation === 'horiz' ){
			
			if( window.innerWidth < window.innerHeight * canvas_orientation_multi){			
				width = window.innerWidth;
				height = Math.round(window.innerWidth * canvas_orientation_multi_inv);
			} else {
				width = Math.round(window.innerHeight * canvas_orientation_multi);
				height = window.innerHeight;
			}		

		} else if( canvas_orientation === 'square' ){
			if( window.innerWidth < window.innerHeight ){	
				width = window.innerWidth;
				height = window.innerWidth;
			} else {
				width = window.innerHeight;
				height = window.innerHeight;
			}		
		}

		if( canvas.width < width ){
			if( canvas_orientation === 'vert' ){
				width = canvas.width;
				height = Math.round(width * canvas_orientation_multi);
			}
			else if( canvas_orientation === 'horiz' ){
				width = canvas.width;
				height = Math.round(width * canvas_orientation_multi_inv);
			}
			else if( canvas_orientation === 'square' ){
				width = canvas.width;
				height = canvas.height;
			}
		}

		if( canvas.height < height ){
			if( canvas_orientation === 'vert' ){
				height = canvas.height;
				width = Math.round(height * canvas_orientation_multi_inv);
			}
			else if( canvas_orientation === 'horiz' ){
				height = canvas.height;
				width = Math.round(height * canvas_orientation_multi);
			}
			else if( canvas_orientation === 'square' ){
				width = canvas.width;
				height = canvas.height;
			}
		}
	}
	
	canvas.style.width = width+"px";
	canvas.style.height = height+"px";
}