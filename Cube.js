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
		this.parent.classList.add('css3-cube');
		this.parent.innerHTML = `
			<header class="cube-top"></header>
			<section class="cube-front"></section>
			<aside class="cube-right"></aside>
			<section class="cube-back"></section>
			<aside class="cube-left"></aside>
			<footer class="cube-bottom"></footer>
		`;
	}

	/**
	 * Listen to mouse events
	 * @private
	 */
	_listen(){

	}
}