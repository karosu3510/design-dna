/* Codrops Text Repetition Effect clone */
window.TEXT_REPETITION_EFFECT_DOC = `<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Text Repetition Scroll Effect | Demo 1 | Codrops</title>
		<meta name="description" content="An on-scroll animation that shows repeated fragments of a big text as seen on the website of Dr. Dabber." />
		<meta name="keywords" content="on-scroll, animation, typography, text, duplication, repetition, css" />
		<meta name="author" content="Codrops" />
		<link rel="stylesheet" href="https://use.typekit.net/fxx5dng.css">
		
		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	<style>
*,
*::after,
*::before {
	box-sizing: border-box;
}

:root {
	font-size: 15px;
}

body {
	margin: 0;
	--color-text: #fff;
	--color-bg: #000;
	--color-link: #fff;
	--color-link-hover: #fff;
	--font-size-s: 13vw;
	--font-size-m: 16vw;
	--font-size-l: 24vw;
	--font-size-xl: 26vw;
	--font-family: widescreen-ex, sans-serif;
	--font-weight: 900;
	--content-offset: 20vh;
	--font-case: uppercase;
	--color-rep-text: var(--color-text);
	--color-rep-text-main: var(--color-text);
	--color-rep-outline: var(--color-text);
	--color-rep-bg: var(--color-bg);
	/* Adjust these depending on your font */
	--font-factor: 0.059; 
	--font-line: 0.745;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: halyard-micro, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
	overflow-y: scroll;
}

.demo-2 {
	--color-bg: #8d8e98;
	--content-offset: 10vh;
	--font-family: widescreen-mixed, sans-serif;
	--font-size-l: 20vw;
	--font-size-xl: 24vw;
}

.demo-3 {
	--color-bg: #525fdc;
	--content-offset: 10vh;
	--color-rep-bg: transparent;
}

.demo-4 {
	--color-bg: #1f1d1c;
	--color-text: #d14521;
	--color-rep-text: #d14521;
	--content-offset: 10vh;
	--font-family: bely-display, serif;
	--font-weight: 400;
	--font-factor: 0.059; 
	--font-line: 0.745;
	--font-case: lowercase;
	--color-rep-bg: transparent;
	--font-size-xl: 34vw;
}

.demo-5 {
	--color-bg: #c5c3c7;
	--color-text: #b61e1e;
	--color-link: #000;
	--content-offset: 10vh;
	--color-rep-bg: transparent;
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
}

a:hover {
	color: var(--color-link-hover);
	outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
	/* Provide a fallback style for browsers
	 that don't support :focus-visible */
	outline: none;
	background: lightgrey;
}

a:focus:not(:focus-visible) {
	/* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
	background: transparent;
}

a:focus-visible {
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
}

.unbutton:focus {
	outline: none;
}

main {
	padding: 1.5rem 2rem 0;
}

.frame {
	text-align: center;
}

.frame__title {
	margin: 0;
	font-size: 1rem;
	font-weight: 500;
}

.frame__links {
	margin: 0.5rem 0 2rem;
}

.frame__links a:not(:last-child) {
	margin-right: 1rem;
}

.hover-line,
.cda-sponsor-link {
	white-space: nowrap;
	overflow: hidden;
	position: relative;
}

.hover-line::before,
.cda-sponsor-link::before {
	content: '';
	height: 1px;
	width: 100%;
	background: currentColor;
	position: absolute;
	top: 92%;
	transition: transform 0.3s;
	transform-origin: 0% 50%;
}

.hover-line:hover::before,
.cda-sponsor-link:hover::before {
	transform: scaleX(0);
	transform-origin: 100% 50%;
}

.content {
	margin: var(--content-offset) 0 0 0;
	display: flex;
	flex-direction: column;	
	align-items: center;
}

.content p {
	hyphens: auto;
	max-width: 500px;
	font-size: 1.25rem;
	line-height: 1.8;
	margin: 10vh auto;
}

p.footer {
	padding-top: 25vh;
	font-size: 1rem;
	opacity: 0.5;
}

.content__title--size-s {
	--size: var(--font-size-s);
}

.content__title--size-m {
	--size: var(--font-size-m);
}

.content__title--size-l {
	--size: var(--font-size-l);
}

.content__title--size-xl {
	--size: var(--font-size-xl);
}

.content__title {
	font-size: var(--size);
	margin: 0;
	display: grid;
	font-family: var(--font-family);
	font-weight: var(--font-weight);
	text-transform: var(--font-case);
	cursor: default;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.content__title--left {
	margin-right: auto;
}

.content__title--right {
	margin-left: auto;
}

.text-rep span {
	color: var(--color-rep-text-main);
	grid-area: 1 / 1 / 2 / 2;
	background: var(--color-rep-bg);
	line-height: var(--font-line);
	padding-bottom: calc(var(--font-factor)* var(--size));
	will-change: transform;
}

.text-rep span:not(:last-child) {
	color: var(--color-rep-text);
}

.demo-2 .text-rep span,
.demo-3 .text-rep span:not(:last-child) {
	-webkit-text-stroke: 1px var(--color-rep-outline);
	text-stroke: 1px var(--color-rep-outline);
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	color: transparent;
}

.demo-3 .text-rep span,
.demo-4 .text-rep span,
.demo-5 .text-rep span {
	padding-bottom: 0;
}

@media screen and (min-width: 53em) {
	.frame {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-template-areas: 'title demos demos sponsor' 'links links links links';
		grid-column-gap: 3vw;
		grid-row-gap: 1rem;
		justify-content: space-between;
		text-align: left;
	}
	.frame__title {
		grid-area: title;
	}
	.frame__links {
		margin: 0;
		grid-area: links;
	}
	.frame__links--demos {
		grid-area: demos;
	}
}


html,body{min-height:720px;background:#000;}
body{overflow-y:auto;scroll-behavior:smooth;}
main{min-height:720px;padding:18px 24px 0;}
.frame{font-size:12px;position:relative;z-index:5;}
.content{margin-top:14vh;}
.content p{font-size:1.05rem;line-height:1.62;max-width:440px;margin:7.5vh auto;}
.content__title{transform:translateZ(0);}
.content__title--size-l{--size:22vw}.content__title--size-xl{--size:25vw}.content__title--size-m{--size:15vw}.content__title--size-s{--size:12vw}
.text-rep span{letter-spacing:-.045em;}
body::after{content:"";position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 40%,transparent 0,rgba(0,0,0,.28) 72%);}
@media(max-width:900px){.content__title--size-l{--size:20vw}.content__title--size-xl{--size:23vw}}

</style>
</head>
	<body class="demo-1 loading">
		<main data-scroll-container>
			<div class="frame">
				<h1 class="frame__title">Text Repetition Scroll Effect from <a class="hover-line" href="https://experience.drdabber.com/product/stella">Dr. Dabber</a></h1>
				<nav class="frame__links">
					<a class="hover-line" href="http://tympanus.net/Development/LinesToLayout/">Previous demo</a>
					<a class="hover-line" href="https://tympanus.net/codrops/?p=63187">Article</a>
					<a class="hover-line" href="https://github.com/codrops/TextRepetitionEffect">GitHub</a>
				</nav>
				<nav class="frame__links frame__links--demos">
					<a href="index.html" class="current">Demo 1</a>
					<a class="hover-line" href="index2.html">Demo 2</a>
					<a class="hover-line" href="index3.html">Demo 3</a>
					<a class="hover-line" href="index4.html">Demo 4</a>
					<a class="hover-line" href="index5.html">Demo 5</a>
				</nav>
			</div>
			<div class="content">
				<p>These selected cases of various forms of changes of consciousness all throw a certain light upon our case. Naef's case presents two hysteriform eclipses of memory, one of which is marked by the appearance of delusions, and the other by its long duration, contraction of the field of consciousness, and desire to wander. The peculiar associated impulses are specially clear in the cases of Proust and Mesnet. In our case the impulsive tearing up of the flowers, the digging up of the graves, form a parallel.</p>
				<h2 class="content__title content__title--size-l" data-text-rep>Boca</h2>
				<p>The continuity of consciousness which the patient presents in the individual attacks recalls the behaviour of the consciousness in MacNish's case; hence our case may be regarded as a transient phenomenon of alternating consciousness. The dreamlike hallucinatory content of the limited consciousness in our case does not, however, justify an unqualified assignment to this group of double consciousness. </p>
				<h2 class="content__title content__title--size-s" data-text-rep>Soulmate</h2>
				<p>The hallucinations in the second state show a certain creativeness which seems to be conditioned by the auto-suggestibility of this state. In Mesnet's case we noticed the appearance of hallucinatory processes from simple stimulation of touch. The patient's subconsciousness employs simple perceptions for the automatic construction of complicated scenes which then take possession of the limited consciousness. A somewhat similar view must be taken about our patient's hallucinations; at least, the external conditions which gave rise to the appearance of the hallucinations seem to strengthen our supposition.</p>
				<h2 class="content__title content__title--size-m content__title--left" data-text-rep>Maui</h2>
				<h2 class="content__title content__title--size-m content__title--right" data-text-rep>Wowie</h2>
				<p>The walk in the cemetery induces the vision of the skeletons; the meeting with the three boys arouses the hallucination of children buried alive whose voices the patient hears at night-time.[12] She arrived at the cemetery in a somnambulic state, which on this occasion was specially intense in consequence of her having taken alcohol. She performed actions almost instinctively about which her subconsciousness nevertheless did receive certain impressions.</p>
				<h2 class="content__title content__title--size-xl" data-text-rep>Kush</h2>
				<p>These lapses of memory, which at first seem without content, gain a content by means of accidental auto-suggestion, and this content builds itself up automatically to a certain extent. It achieves no further development, probably on account of the improvement now beginning, and finally it disappears altogether as recovery sets in. Binet and Féré have made numerous experiments on the implanting of suggestions in states of partial sleep.</p>
				<p class="footer">From <a class="hover-line" href="https://www.gutenberg.org/files/48225/48225-h/48225-h.htm">Collected Papers on Analytical Psychology</a> by C. G. Jung</p>
				<p>
					<a class="hover-line" href="index2.html" class="current">Demo 2</a>
				</p>
			</div>
		</main>
		
		
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script>
/**
 * Preload fonts
 * @param {String} id
 */
const preloadFonts = id => {
    return new Promise((resolve) => {
        if (!window.WebFont) { resolve(); return; }
        WebFont.load({ typekit: { id }, active: resolve, inactive: resolve });
        setTimeout(resolve, 1200);
    });
};

/**
 * Gets the height of an element without counting with the padding
 * @param {Element} el
 */
const getHeight = el => {
    const computedStyle = getComputedStyle(el);

    let elementHeight = el.clientHeight;  // height with padding
    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    return elementHeight;
}


/**
 * Class representing an element with multiple text child elements that translate up/down when scrolling
 */
class RepeatTextScrollFx {
    // DOM elements
	DOM = {
		// main element ([data-text-rep])
		el: null,
        // all text spans except the last one (this will be the centered one and doesn't translate
        words: null,
	}
	totalWords = 9;
    tyIncrement = 12;
	delayIncrement = 0.1;
    scrollTimeline;
    observer;

    /**
	 * Constructor.
	 * @param {NodeList} Dom_el - main element ([data-text-rep])
	 */
	constructor(Dom_el) {
		this.DOM.el = Dom_el;
        this.layout();
        this.setBoundaries();
        this.createScrollTimeline();
        this.createObserver();

        window.addEventListener('resize', () => this.setBoundaries());
	}
    /**
     * Creates the text spans inside the main element
     */
    layout() {
        const halfWordsCount = Math.floor(this.totalWords/2);
        let innerHTML = '';
	    
        for (let i = 0; i < this.totalWords; ++i) {
            
            let ty;
	        let delay;
            
			if ( i === this.totalWords-1 ) {
				ty = 0;
				delay = 0;
			}
			else if ( i < halfWordsCount ) {
				ty = halfWordsCount*this.tyIncrement-this.tyIncrement*i;
				delay = this.delayIncrement*(halfWordsCount-i)-this.delayIncrement
				
			}
			else {
				ty = -1*(halfWordsCount*this.tyIncrement-(i-halfWordsCount)*this.tyIncrement);
				delay = this.delayIncrement*(halfWordsCount- (i-halfWordsCount) )-this.delayIncrement
			}
			
			innerHTML += \`<span data-delay="\${delay}" data-ty="\${ty}">\${this.DOM.el.innerHTML}</span>\`;
		}
		
		this.DOM.el.innerHTML = innerHTML;
		this.DOM.el.classList.add('text-rep');

        this.DOM.words = [...this.DOM.el.querySelectorAll('span')].slice(0, -1);
    }
    /**
     * sets the padding bottom and margin top given the amount that the words will translate up/down
     */
    setBoundaries() {
        // Set up the margin top and padding bottom values
        const paddingBottomMarginTop = getHeight(this.DOM.el) * Math.floor(this.totalWords/2) * this.tyIncrement/100;
		gsap.set(this.DOM.el, {
			marginTop: paddingBottomMarginTop,
			paddingBottom: paddingBottomMarginTop
		});
    }
    /**
     * gsap animation timeline
	 * translates the text spans when the element enters the viewport
     */
    createScrollTimeline() {
        this.scrollTimeline = gsap.timeline({paused: true})
		
        .to(this.DOM.words, {
			duration: 1,
			ease: 'power1',
			yPercent: (_,target) => target.dataset.ty,
			delay: (_,target) => target.dataset.delay
		})
    }
    /**
     * Intersection Observer 
	 * Updates the timeline progress when the element is in the viewport
     */
    createObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px',
            threshold: 0
        };
        
		// credits: from https://medium.com/elegant-seagulls/parallax-and-scroll-triggered-animations-with-the-intersection-observer-api-and-gsap3-53b58c80b2fa
		this.observer = new IntersectionObserver(entry => {
			if (entry[0].intersectionRatio > 0) {
				
				if ( !this.isLoaded ) {
					this.isLoaded = true;
				}
				gsap.ticker.add(this.progressTween);

			} 
			else {

				if ( this.isLoaded ) {
					gsap.ticker.remove(this.progressTween);
				}
				else {
					this.isLoaded = true;
					// add and remove immediately
					gsap.ticker.add(this.progressTween, true);
				}
				
			}
		}, observerOptions);

        this.progressTween = () => {
			// Get scroll distance to bottom of viewport.
			const scrollPosition = (window.scrollY + window.innerHeight);
			// Get element's position relative to bottom of viewport.
			const elPosition = (scrollPosition - this.DOM.el.offsetTop);
			// Set desired duration.
			const durationDistance = (window.innerHeight + this.DOM.el.offsetHeight);
			// Calculate tween progresss.
			const currentProgress = (elPosition / durationDistance);
			// Set progress of gsap timeline.
			this.scrollTimeline.progress(currentProgress);
		}
		
		this.observer.observe(this.DOM.el);
    }
}
// Preload images and fonts and remove loader
preloadFonts('fxx5dng').then(() => {
	
	// Apply the effect on these elements
	document.querySelectorAll('[data-text-rep]').forEach(textEl => {
		new RepeatTextScrollFx(textEl);
	});

	document.body.classList.remove('loading');
	setTimeout(() => document.body.classList.remove('loading'), 50);

});
setTimeout(()=>document.body.classList.remove('loading'),1600);
</script>
<script>
setTimeout(()=>{ const el=document.querySelector('[data-text-rep]'); if(el) window.scrollTo({top:el.offsetTop-window.innerHeight*0.34,behavior:'smooth'}); },2100);
setInterval(()=>{ const hs=[...document.querySelectorAll('[data-text-rep]')]; if(!hs.length)return; const el=hs[Math.floor(Math.random()*hs.length)]; window.scrollTo({top:Math.max(0,el.offsetTop-window.innerHeight*0.35),behavior:'smooth'}); },5200);
</script></body>
</html>
`;
