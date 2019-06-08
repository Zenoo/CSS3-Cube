# CSS3 Cube

A canvas-free, CSS3 only Cube

[![Demo](https://github.com/Zenoo/CSS3-Cube/raw/master/cube-demo.gif)](https://jsfiddle.net/Zenoo0/krn7ygd3/)

### Doc

* **Installation**

Simply import CSS3 Cube into your HTML.
```HTML
<link rel="stylesheet" href="https://unpkg.com/css3-cube@0.1.2/Cube.min.css">
<script src="https://unpkg.com/css3-cube@0.1.2/Cube.min.js"></script>	
```
* **How to use**

Create a new [`Cube`](https://zenoo.github.io/CSS3-Cube/Cube.html) object with the targeted node as the first parameter :
```
let cube = new Cube('#yourNode', options);
// OR
let cube = new Cube(element, options);
```
* **Options**

```js
{
  ratio: 2 // Ratio at which mousemoves will impact the rotation of the cube
}
```

* **Example**

See this [JSFiddle](https://jsfiddle.net/Zenoo0/krn7ygd3/) for a working example

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](https://zenoo.fr)