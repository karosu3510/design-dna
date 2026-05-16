/* Codrops Scroll 3D Grid clone */
window.SCROLL_3D_GRID_DOC = `<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>On-Scroll 3D Grid Animations | Codrops</title>
		<meta name="description" content="On-scroll animations for perspective image grids with different layouts." />
		<meta name="keywords" content="on scroll animation, 3d, image grid, perspective, gsap, javascript, css grid" />
		<meta name="author" content="Codrops" />
		<link rel="stylesheet" href="https://use.typekit.net/hky5sxh.css">
		
		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	<style>
*,
*::after,
*::before {
	box-sizing: border-box;
}

:root {
	font-size: 16px;
	--color-text: #fff;
	--color-bg: #000;
	--color-link: #fff;
	--color-link-hover: #907030;
	--color-title: #907030;
	--perspective: 1500px;
	--grid-item-ratio: 1.5;
	--grid-width: 100%;
	--grid-height: auto;
	--grid-gap: 2vw;
	--grid-columns: 4;
	--grid-inner-scale: 1;
}

body {
	margin: 0;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: "moret-variable", serif;
	font-variation-settings: "ital" 0, "wght" 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Page Loader */
.js .loading::before,
.js .loading::after {
	content: '';
	position: fixed;
	z-index: 1000;
}

.js .loading::before {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;

}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	cursor: pointer;
}

a:hover {
	color: var(--color-link-hover);
	outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:not(.card__image):focus {
	/* Provide a fallback style for browsers
	 that don't support :focus-visible */
	outline: none;
	background: lightgrey;
}

a:not(.card__image):focus:not(:focus-visible) {
	/* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
	background: transparent;
}

a:not(.card__image):focus-visible {
	/* Draw a very noticeable focus style for
	 keyboard-focus on browsers that do support
	 :focus-visible */
	outline: 2px solid red;
	background: transparent;
}

.unbutton {
	background: none;
	border: 0;
	padding: 0;
	margin: 0;
	font: inherit;
	cursor: pointer;
}

.unbutton:focus {
	outline: none;
}

main {
	position: relative;
	overflow: hidden;
	width: 100%;
}

.frame {
	position: relative;
	width: 100%;
	padding: 1rem;
	display: grid;
	grid-template-columns: 100%;
	grid-template-areas: 'back' 'prev' 'sponsor';
	grid-gap: 0.5rem;
	justify-items: start;
	align-self: start;
	justify-self: start;
	pointer-events: none;
	align-items: center;
	text-transform: uppercase;
	font-size: 0.85rem;
	background: var(--color-bg-alt);
}

body #cdawrap {
    justify-self: start;
}

.frame a {
	pointer-events: auto;
}

.frame a:not(.frame__title-back) {
	white-space: nowrap;
	overflow: hidden;
	position: relative;
}

.frame a:not(.frame__title-back)::before {
	content: '';
	height: 1px;
	width: 100%;
	background: currentColor;
	position: absolute;
	top: 90%;
	transition: transform 0.3s;
	transform-origin: 0% 50%;
}

.frame a:not(.frame__title-back):hover::before {
	transform: scaleX(0);
	transform-origin: 100% 50%;
}

.frame__title {
	grid-area: title;
	display: flex;
}

.frame__title-main {
	font-size: inherit;
	margin: 0;
	font-weight: inherit;
}

.frame__title-back {
	position: relative;
	display: flex;
	align-items: flex-end;
	margin-bottom: 0.15rem;
}

.frame__title-back span {
	display: none;
}

.frame__title-back svg {
	fill: currentColor;
}

.frame__prev {
	grid-area: prev;
}

.intro {
	height: calc(100vh - 3rem);
    text-align: center;
    place-items: center;
    display: grid;
    margin-bottom: 30vh;
    background: linear-gradient(0deg, transparent, var(--color-bg-alt));
}

.intro__title {
    place-items: center;
    margin: 0;
    line-height: .9;
    display: grid;
    margin-top: 15vh;
    font-weight: 400;
}

.intro__title-pre {
	font-weight: 300;
    font-size: clamp(2rem,8vw,5rem);
    color: var(--color-title);
    text-transform: uppercase;
}

.intro__title-sub {
    font-size: clamp(1.5rem,20vw,8rem);
    max-width: 15ch;
    margin: 0 auto;
}

.intro__info {
	max-width: 15ch;
    opacity: .6;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    position: relative;
    align-self: end;
}

.intro__info::after {
	content: "";
	width: 1px;
	height: 2rem;
	background: #fff;
	position: absolute;
	top: 100%;
	left: 50%;
}

.card-wrap {
	margin-top: 5vh;
	display: grid;
	grid-gap: 2rem;
	grid-auto-flow: row;
	grid-template-columns: 250px;
}

.card__image {
	display: block;
	border-radius: 7px;
	background-size: cover;
	background-position: 50% 50%;
	width: 100%;
	height: auto;
	aspect-ratio: 4 / 3;
	filter: contrast(0.8);
}

.credits {
	font-size: 1.5rem;
	text-align: center;
	margin: 50vh auto 0;
	padding-bottom: 50vh;
}

.content {
	position: relative;
	margin-bottom: 20vh;
}

.content--spacing {
	margin-bottom: 100vh;
}

.content__title {
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: 50%;
	left: 50%;
	margin: -50vh 0 0 -50vw;
	padding: 0 10vw;
	display: grid;
	place-items: center;
	text-align: center;
	font-weight: 300;
	font-size: clamp(1.5rem, 15vw, 6.5rem);
}

.content__title--top {
	align-items: start;
}

.content__title--bottom {
	align-items: end;
}

.content__title--left {
	justify-items: start;
	text-align: left;
}

.content__title--right {
	justify-items: end;
	text-align: right;
}

.outro {
	display: grid;
	place-items: center;
	margin: 40vh 0;
}

.grid {
	display: grid;
	place-items: center;
	padding: 2rem;
	width: 100%;
	perspective: var(--perspective);
}

.grid-wrap {
	height: var(--grid-height);
	width: var(--grid-width);
	display: grid;
	grid-template-columns: repeat(var(--grid-columns),1fr);
	gap: var(--grid-gap);
	transform-style: preserve-3d;
}

.grid__item {
	aspect-ratio: var(--grid-item-ratio);
	width: 100%;
	height: auto;
	overflow: hidden;
	position: relative;
	border-radius: 8px;
	display: grid;
	place-items: center;
}

.grid__item-inner {
	position: relative;
	width: calc(1 / var(--grid-inner-scale) * 100%);
	height: calc(1 / var(--grid-inner-scale) * 100%);
	background-size: cover;
	background-position: 50% 50%;
}

@media screen and (min-width: 53em) {
	.frame {
		grid-template-columns: auto auto auto 1fr;
		grid-template-areas: 'title prev ... sponsor';
		align-content: space-between;
		justify-items: start;
		grid-gap: 2rem;
	}
	.frame__demos {
		justify-self: end;
	}

	.content--outro {
		height: 100vh;
		justify-content: center;
	}

	.card-wrap {
		grid-template-columns: repeat(3,250px);
	}

	body #cdawrap {
	    justify-self: end;
	}
}


html,body{background:#000;}
body{overflow:auto;}
main{min-height:720px;}
.frame{position:fixed;z-index:50;top:0;left:0;right:0;background:linear-gradient(to bottom,rgba(0,0,0,.78),transparent);}
.intro{height:720px;margin-bottom:26vh;}
.intro__title{margin-top:10vh}.intro__title-pre{font-size:clamp(2rem,6vw,4.4rem)}.intro__title-sub{font-size:clamp(3rem,13vw,7rem)}
.content{margin-bottom:30vh;}.content--spacing{margin-bottom:72vh}.content__title{font-size:clamp(2.2rem,9vw,5.4rem);z-index:3;pointer-events:none;text-shadow:0 1px 8px rgba(0,0,0,.5)}
.grid{padding:1.4rem}.grid-wrap{will-change:transform}.grid__item{border-radius:8px;will-change:transform,filter}.grid__item-inner{will-change:transform}
.credits{margin:30vh auto 0;padding-bottom:30vh}

</style>
</head>
	<body class="loading">
		<main>
			<div class="frame">
				<a class="frame__back" href="https://tympanus.net/codrops/?p=73075">Back to the article</a>
				<a class="frame__prev" href="http://tympanus.net/Development/GridFlowEffect/">Previous demo</a>
			</div>
			<div class="intro"> 
				<h1 class="intro__title"> 
					<span class="intro__title-pre">On-Scroll</span> 
					<span class="intro__title-sub">Perspective Grid Animations</span> 
				</h1> 
				<span class="intro__info">Scroll moderately to fully experience the animations</span> 
			</div>
			<section class="content">				
				<div class="grid grid--1">
					<div class="grid-wrap">
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/1.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/2.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/3.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/4.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/7.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/9.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/11.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/12.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/15.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/16.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/17.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/20.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/22.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/24.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/25.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/26.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/27.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/28.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/29.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/30.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/31.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/32.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/33.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/34.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/35.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/36.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/37.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/38.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/39.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/40.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/41.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/42.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/43.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/44.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/45.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/46.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/47.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/48.jpg)"></div></div>
					</div>
				</div>
				<h3 class="content__title content__title--right content__title--top">Fleeting moments, <br>existence's dance.</h3>
			</section>
			<section class="content">
				<div class="grid grid--2">
					<div class="grid-wrap">
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/1.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/2.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/3.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/4.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/7.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/9.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/11.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/12.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/15.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/16.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/17.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/20.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/22.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/24.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/25.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/26.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/27.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/28.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/29.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/30.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/31.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/32.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/33.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/34.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/35.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/36.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/37.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/38.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/39.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/40.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/41.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/42.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/43.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/44.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/45.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/46.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/47.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/48.jpg)"></div></div>
					</div>
				</div>
				<h3 class="content__title">Impermanence <br>guides life's river.</h3>
			</section>
			<section class="content content--spacing">
				<div class="grid grid--3">
					<div class="grid-wrap">
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/29.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/37.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/15.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/32.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/41.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/12.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/27.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/1.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/46.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/35.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/20.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/39.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/25.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/2.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/44.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/43.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/17.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/26.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/11.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/7.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/33.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/30.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/16.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/31.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/24.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/36.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/42.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/3.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/38.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/9.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/4.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/40.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/28.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/22.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/34.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/47.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/45.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/48.jpg)"></div></div>
					</div>
				</div>
				<h3 class="content__title content__title--left content__title--bottom">Embrace now, <br>tomorrow may fade.</h3>
			</section>
			<section class="content content--spacing">
				<div class="grid grid--4">
					<div class="grid-wrap">
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/3.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/16.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/24.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/9.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/7.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/15.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/17.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/4.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/1.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/2.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/11.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/20.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/22.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/12.jpg)"></div></div>
					</div>
				</div>
				<h3 class="content__title content__title--right">Now unfolds <br>eternity's grace</h3>
			</section>
			<section class="content content--spacing">
				<div class="grid grid--5">
					<div class="grid-wrap">
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/29.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/37.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/15.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/32.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/41.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/12.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/27.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/1.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/46.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/35.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/20.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/39.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/25.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/2.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/44.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/43.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/17.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/26.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/11.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/7.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/33.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/30.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/16.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/31.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/24.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/36.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/42.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/3.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/38.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/9.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/4.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/40.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/28.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/22.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/34.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/47.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/45.jpg)"></div></div>
						<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/48.jpg)"></div></div>
					</div>
				</div>
				<h3 class="content__title">An infinite universe<br> of moments unfolding</h3>
			</section>
			<section class="content content--spacing">
			<div class="grid grid--6">
				<div class="grid-wrap">
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/18.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/5.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/8.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/43.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/34.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/21.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/39.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/6.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/13.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/47.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/10.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/45.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/27.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/31.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/28.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/30.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/36.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/14.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/23.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/35.jpg)"></div></div>
					<div class="grid__item"><div class="grid__item-inner" style="background-image:url(./scroll-3d-grid-img/19.jpg)"></div></div>
				</div>
			</div>
			<h3 class="content__title">Seasons shift, <br>moments flow.</h3>
			</section>
			<section class="outro">
				<h2 class="outro__title">More you might like</h2>
				<div class="card-wrap">
					<div class="card">
						<a href="http://tympanus.net/Development/ScrollBasedLayoutAnimations/" class="card__image" style="background-image:url(https://tympanus.net/codrops/wp-content/uploads/2023/07/scrollbased.jpg"></a>
						<h3 class="card__title"><a href="http://tympanus.net/Development/ScrollBasedLayoutAnimations/">Scroll-Based Layout Animations</a></h3>
					</div>
					<div class="card">
						<a href="http://tympanus.net/Development/OnScrollFilter/" class="card__image" style="background-image:url(https://tympanus.net/codrops/wp-content/uploads/2023/07/onscrollfilter_feat-2.jpg)"></a>
						<h3 class="card__title"><a href="http://tympanus.net/Development/OnScrollFilter/">On-Scroll SVG Filter Effect</a></h3>
					</div>
					<div class="card">
						<a href="http://tympanus.net/Tutorials/OnScrollPathAnimations/" class="card__image" style="background-image:url(https://tympanus.net/codrops/wp-content/uploads/2022/06/OnScrollShapeAnimation_feat.jpg)"></a>
						<h3 class="card__title"><a href="http://tympanus.net/Tutorials/OnScrollPathAnimations/">How to Animate SVG Shapes on Scroll</a></h3>
					</div>
				</div>
			</section>
			<p class="credits">Made by <a href="https://twitter.com/codrops">@codrops</a></p>
		</main>
		
		
		
		
		
		
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.16/dist/lenis.min.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script>
<script>
// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};


// Helper function that lets you dynamically figure out a grid's rows/columns as well as further refine those with "odd" or "even" ones
// https://greensock.com/forums/topic/34808-how-can-i-animate-the-odd-and-even-columns-rows-of-a-grid-with-gsapto/?do=findComment&comment=174346
const getGrid = selector => {
	let elements = gsap.utils.toArray(selector),
		bounds,
		getSubset = (axis, dimension, alternating, merge) => {
		  	let a = [], 
			  	subsets = {},
			  	onlyEven = alternating === "even",
			  	p;
			bounds.forEach((b, i) => {
				let position = Math.round(b[axis] + b[dimension] / 2),
					subset = subsets[position];
				subset || (subsets[position] = subset = []);
				subset.push(elements[i]);
			});
			for (p in subsets) {
				a.push(subsets[p]);
			}
			if (onlyEven || alternating === "odd") {
				a = a.filter((el, i) => !(i % 2) === onlyEven);
			}
		  	if (merge) {
				let a2 = [];
				a.forEach(subset => a2.push(...subset));
				return a2;
		  	}
		  	return a;
		};
	elements.refresh = () => bounds = elements.map(el => el.getBoundingClientRect());
	elements.columns = (alternating, merge) => getSubset("left", "width", alternating, merge);
	elements.rows = (alternating, merge) => getSubset("top", "height", alternating, merge);
	elements.refresh();

	return elements;
}


// Import the necessary function for preloading images
// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

// All elements with class .grid
const grids = document.querySelectorAll('.grid');

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (grid, animationType) => {
	// Child elements of grid
	const gridWrap = grid.querySelector('.grid-wrap');
	const gridItems = grid.querySelectorAll('.grid__item');
	const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
	
	// Define GSAP timeline with ScrollTrigger
	const timeline = gsap.timeline({
	  	defaults: { ease: 'none' },
	  	scrollTrigger: {
			trigger: gridWrap,
			start: 'top bottom+=5%',
			end: 'bottom top-=5%',
			scrub: true
	  	}
	});
	
	// Apply different animations based on type
	switch(animationType) {
		
		case 'type1':

			// Set some CSS related style values
			grid.style.setProperty('--perspective', '1000px');
			grid.style.setProperty('--grid-inner-scale', '0.5');

			timeline
			.set(gridWrap, {
				rotationY: 25
			})
			.set(gridItems, {
				z: () => gsap.utils.random(-1600,200)
			})
			.fromTo(gridItems, {
				xPercent: () => gsap.utils.random(-1000,-500)
			}, {
				xPercent: () => gsap.utils.random(500,1000)
			}, 0)
			.fromTo(gridItemsInner, {
				scale: 2
			}, {
				scale: .5
			}, 0)
			
			break;

	  	case 'type2':
			
			// Set some CSS related style values
			grid.style.setProperty('--grid-width', '160%');
			grid.style.setProperty('--perspective', '2000px');
			grid.style.setProperty('--grid-inner-scale', '0.5');
			grid.style.setProperty('--grid-item-ratio', '0.8');
			grid.style.setProperty('--grid-columns', '6');
			grid.style.setProperty('--grid-gap', '14vw');

		  	timeline
		  	.set(gridWrap, {
				rotationX: 20
			})
			.set(gridItems, {
				z: () => gsap.utils.random(-3000,-1000)
			})
			.fromTo(gridItems, {
				yPercent: () => gsap.utils.random(100,1000),
				rotationY: -45,
				filter: 'brightness(200%)'
			}, {
				ease: 'power2',
				yPercent: () => gsap.utils.random(-1000,-100),
				rotationY: 45,
				filter: 'brightness(0%)'
			}, 0)
			.fromTo(gridWrap, {
				rotationZ: -5,
			}, {
				rotationX: -20,
				rotationZ: 10,
				scale: 1.2
			}, 0)
			.fromTo(gridItemsInner, {
				scale: 2
			}, {
				scale: 0.5
			}, 0)

			break;
	  
		case 'type3':
			
			// Set some CSS related style values
			grid.style.setProperty('--grid-width', '105%');
			grid.style.setProperty('--grid-columns', '8');
			grid.style.setProperty('--perspective', '1500px');
			grid.style.setProperty('--grid-inner-scale', '0.5');
			
			timeline
			.set(gridItems, {
				transformOrigin: '50% 0%',
				z: () => gsap.utils.random(-5000,-2000),
				rotationX: () => gsap.utils.random(-65,-25),
				filter: 'brightness(0%)'
			})	
			.to(gridItems, {
				xPercent: () => gsap.utils.random(-150,150),
				yPercent: () => gsap.utils.random(-300,300),
				rotationX: 0,
				filter: 'brightness(200%)'
			}, 0)
			.to(gridWrap, {
				z: 6500
			}, 0)
			.fromTo(gridItemsInner, {
				scale: 2
			}, {
				scale: 0.5
			}, 0);
			
			break;

		case 'type4':
			
			// Set some CSS related style values
			grid.style.setProperty('--grid-width', '50%');
			grid.style.setProperty('--perspective', '3000px');
			grid.style.setProperty('--grid-item-ratio', '0.8');
			grid.style.setProperty('--grid-columns', '3');
			grid.style.setProperty('--grid-gap', '1vw');

			timeline
			.set(gridWrap, {
				transformOrigin: '0% 50%',
				rotationY: 30,
				xPercent: -75
			})
			.set(gridItems, {
				transformOrigin: '50% 0%'
			})
			.to(gridItems, {
				duration: 0.5,
				ease: 'power2',
				z: 500,
				stagger: 0.04
			}, 0)
			.to(gridItems, {
				duration: 0.5,
				ease: 'power2.in',
				z: 0,
				stagger: 0.04
			}, 0.5)
			.fromTo(gridItems, {
				rotationX: -70,
				filter: 'brightness(120%)'
			}, {
				duration: 1,
				rotationX: 70,
				filter: 'brightness(0%)',
				stagger: 0.04
			}, 0)
			
			break;

		case 'type5':

			// Set some CSS related style values
			grid.style.setProperty('--grid-width', '120%');
			grid.style.setProperty('--grid-columns', '8');
			grid.style.setProperty('--grid-gap', '0');
			
			const gridObj = getGrid(gridItems);

			timeline
			.set(gridWrap, {
				rotationX: 50
			})
			.to(gridWrap, {
				rotationX: 30
			})
			.fromTo(gridItems, {
				filter: 'brightness(0%)'
			}, {
				filter: 'brightness(100%)'
			}, 0)
			.to(gridObj.rows('even'), {
				xPercent: -100,
				ease: 'power1'
			}, 0)
			.to(gridObj.rows('odd'), {
				xPercent: 100,
				ease: 'power1'
			}, 0)
			.addLabel('rowsEnd', '>-=0.15')
			.to(gridItems, {
				ease: 'power1',
				yPercent: () => gsap.utils.random(-100, 200),
			}, 'rowsEnd');
			break;

		case 'type6':

			// Set some CSS related style values
			grid.style.setProperty('--perspective', '2500px');
			grid.style.setProperty('--grid-width', '100%');
			grid.style.setProperty('--grid-gap', '6');
			grid.style.setProperty('--grid-columns', '3');
			grid.style.setProperty('--grid-item-ratio', '1');
			
			timeline
			.fromTo(gridItems, {
				transformOrigin: '50% 200%',
				rotationX: 0,
				yPercent: 400,
			}, {
				yPercent: 0,
				rotationY: 360,
				opacity: 0.2,
				scale: 0.8,
				stagger: 0.03,
			})

			break;
	  	
		default:
			console.error('Unknown animation type.');
			break;
	}
}

// Apply animations to each grid
const scroll = () => {
	grids.forEach((grid, i) => {
		// Determine animation type
		let animationType;
		switch (i % 6) {
			case 0:
				animationType = 'type1';
				break;
			case 1:
				animationType = 'type2';
				break;
			case 2:
				animationType = 'type3';
				break;
			case 3:
				animationType = 'type4';
				break;
			case 4:
				animationType = 'type5';
				break;
			case 5:
				animationType = 'type6';
				break;
		}
		applyAnimation(grid, animationType);
	});
}

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages('.grid__item-inner').then(() => {
	initSmoothScrolling();
	scroll();
	document.body.classList.remove('loading');
});
setTimeout(()=>document.body.classList.remove('loading'),1800);
</script>
<script>
(function(){let dir=1;function go(){const max=Math.max(0,document.documentElement.scrollHeight-innerHeight);if(!max)return;let y=scrollY+dir*innerHeight*.85;if(y>=max-20)dir=-1;if(y<=20)dir=1;scrollTo({top:Math.max(0,Math.min(max,y)),behavior:'smooth'});}setTimeout(go,1800);setInterval(go,3600);})();
</script></body>
</html>
`;
