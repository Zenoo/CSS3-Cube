/* exported Cube */

/**
 * Cube Class
 */
class Cube{
	/**
     * Creates an instance of Cube
     */
	constructor(target, parameters){
		/**
		 * Cube elements' parent
		 * @type {Element}
		 */
		this.parent = target instanceof Element ? target : document.querySelector(target);

		this._parameters = parameters;

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
			<div class="css3-cube">
				<header class="cube-face" data-face="top"></header>
				<section class="cube-face" data-face="front"></section>
				<aside class="cube-face" data-face="right"></aside>
				<section class="cube-face" data-face="back"></section>
				<aside class="cube-face" data-face="left"></aside>
				<footer class="cube-face" data-face="bottom"></footer>
			</div>
		`;
	}

	/**
	 * Listen to mouse events
	 * @private
	 */
	_listen(){

	}
}