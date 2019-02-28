/* exported Cube */

/**
 * Cube Class
 */
class Cube{
	/**
     * Creates an instance of Cube
	 * @param {String|Element} target           The element that will contain the Cube
	 * @param {Object}         parameters       Parameters holder
	 * @param {Number}         parameters.ratio Ratio at which mousemoves will impact the rotation of the cube
     */
	constructor(target, parameters){
		/**
		 * Cube elements' parent
		 * @type {Element}
		 */
		this.parent = target instanceof Element ? target : document.querySelector(target);

		this._parameters = {
			ratio: 2,
			...parameters
		};

		this._build();
		this._listen();
	}

	/**
	 * Build the Cube
	 * @private
	 */
	_build(){
		this.parent.classList.add('css3-cube-wrapper');
		this.parent.innerHTML = `
			<div class="css3-cube" style="transform: translateZ(-50px) rotateX(0deg) rotateY(0deg);">
				<header class="cube-face" data-face="top"></header>
				<section class="cube-face" data-face="front"></section>
				<aside class="cube-face" data-face="right"></aside>
				<section class="cube-face" data-face="back"></section>
				<aside class="cube-face" data-face="left"></aside>
				<footer class="cube-face" data-face="bottom"></footer>
			</div>
		`;

		this.element = this.parent.firstElementChild;
	}

	/**
	 * Listen to mouse events
	 * @private
	 */
	_listen(){
		const origin = {
			x: 0,
			y: 0
		},
		rotation = {
			x: 0,
			y: 0
		};
		let dragging = false;

		// Start events
		const handleMousedown = e => {
			dragging = true;

			// Remember the drag origin
			origin.x = e.pageX;
			origin.y = e.pageY;

			// Remember the drag original rotation
			rotation.x = +this.element.style.transform.replace(/^.*rotateX\((-?\d+)deg\).*$/u, '$1');
			rotation.y = +this.element.style.transform.replace(/^.*rotateY\((-?\d+)deg\).*$/u, '$1');
		};
		
		this.parent.addEventListener('mousedown', handleMousedown);
		this.parent.addEventListener('dragstart', handleMousedown);

		// Move events
		const handleMouseMove = e => {
			if(dragging){
				const mouseDifference = {
					x: (e.pageX - origin.x) * this._parameters.ratio,
					y: (e.pageY - origin.y) * this._parameters.ratio
				};

				this.element.style.transform = `translateZ(-50px) rotateX(${rotation.x - mouseDifference.y}deg) rotateY(${rotation.y + mouseDifference.x}deg)`;
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('dragover', handleMouseMove);

		// End events
		const handleMouseUp = () => {
			dragging = false;
		};

		this.element.addEventListener('dragend', handleMouseUp);
		window.addEventListener('mouseup', handleMouseUp);

		window.addEventListener('mouseout', e => {
			if(e.relatedTarget === null) dragging = false;
		});
	}
}