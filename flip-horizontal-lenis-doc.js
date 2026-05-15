/* Flip Plugin GSAP - Horizontal Scroll Lenis */
window.FLIP_HORIZONTAL_LENIS_DOC = `<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
<title>Flip Plugin GSAP - Horizontal Scroll Lenis</title>
<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  
  
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'>
  
<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  color: #333;
  background-color: #fff;
  font-family: Satoshi, sans-serif;
  font-size: .9rem;
  line-height: 1em;
  overflow: hidden;
}

img {
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: clip;
}
.lenis.lenis-smooth iframe {
  pointer-events: none;
}
.gallery_image:nth-child(odd){
  transform: translateY(30%);
}	
.gallery_image:nth-child(even){
  transform: translateY(-30%);
}
.paragraph{
  width: 100%; /* or specific width */
  display: block;
  white-space: normal;
}
.line, .word, .line-wrap, .char-wrap{
  overflow: hidden;
}
.line-wrap, .char-wrap{
  display: inline-block;
}
.cursor{
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 9999;
  pointer-events: none;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 0;
}
.cursor.is-visible{
  opacity: 1;
} 
.cursor.is-open .cross_button{
  transform: rotateZ(360deg);
}
.cross_button{
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  transform: rotateZ(45deg);
}
.cross_button::after,
.cross_button::before{
  content: "";
  position: absolute;
  background-color: black;
  top: 50%;
  left: 50%;
  width: calc(100% - 0.75rem);
  height: 1.1px;
}
.cross_button::after{
  transform: translate(-50%, -50%) rotateZ(-45deg);
}
.cross_button::before{
  transform: translate(-50%, -50%) rotateZ(45deg);
}

.content:nth-child(even) .content_title-top{
  justify-content: flex-end;
 }
 .content:nth-child(even) .content_title-bottom{
  justify-content: flex-start;  
 }
 .content:nth-child(even) .content_text-left {   
  justify-content: flex-start;  
 }  
 .content:nth-child(even) .content_text-right {
  justify-content: flex-end;  
 }

.section_content {
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
}

.section_content.is-hidden {
  z-index: 0;
}

.button_reference {
  z-index: 20;
  grid-column-gap: .25rem;
  grid-row-gap: .25rem;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: #252525;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: .25rem;
  justify-content: flex-start;
  align-items: baseline;
  padding: .5rem .75rem;
  font-family: Inconsolata, monospace;
  font-size: .8rem;
  line-height: 1em;
  text-decoration: none;
  display: flex;
}

.button_reference.fix-bottom-left {
  position: fixed;
  bottom: .5rem;
  left: .5rem;
}

.code_js, .code_css {
  display: none;
}

.div-block {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
}

.content_wrapper {
  aspect-ratio: 16 / 9;
  cursor: pointer;
  width: 50vw;
  position: relative;
}

.text-block {
  position: absolute;
  bottom: 330.2px;
}

.title-small {
  text-transform: uppercase;
  font-family: Generalsans, Tahoma, sans-serif;
  font-size: clamp(.9rem, .9vw, 2.5rem);
  font-weight: 600;
  line-height: 1.1;
  overflow: hidden;
}

.content {
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
}

.gallery {
  grid-column-gap: 7.5vw;
  grid-row-gap: 7.5vw;
  flex-flow: row;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
}

.gallery_image {
  aspect-ratio: 1;
  cursor: pointer;
  height: 45vh;
}

.scroll-wrapper {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  overflow: hidden;
}

.content_text-right {
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  flex-flow: column;
  width: 17vw;
  height: 100%;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  padding-left: 1em;
  display: flex;
  position: absolute;
  left: 100%;
}

.content_text-left {
  grid-column-gap: .25rem;
  grid-row-gap: .25rem;
  text-align: right;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 17vw;
  height: 100%;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  padding-right: 1em;
  display: flex;
  position: absolute;
  right: 100%;
}

.content_title-top {
  mix-blend-mode: difference;
  filter: invert();
  justify-content: flex-start;
  align-items: center;
  width: 105%;
  margin-left: 2em;
  display: flex;
  position: absolute;
  bottom: calc(100% - 1.5vw);
}

.content_title-bottom {
  color: #000;
  mix-blend-mode: difference;
  filter: invert();
  justify-content: flex-end;
  align-items: center;
  width: 105%;
  margin-left: 2em;
  display: flex;
  position: absolute;
  top: calc(100% - 1.75vw);
  left: 0%;
}

.title-big {
  color: #000;
  font-family: Generalsans, Tahoma, sans-serif;
  font-size: 6vw;
  line-height: .8em;
}

.nav {
  z-index: 100;
  position: fixed;
  inset: 0% 0% auto;
}

.nav_top-wrapper {
  z-index: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2vw;
  display: flex;
  position: relative;
}

.nav_top {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
}

.nav_link {
  color: #000;
  font-family: Generalsans, Tahoma, sans-serif;
  font-size: .8rem;
  text-decoration: none;
  overflow: hidden;
}

.body {
  line-height: 1.1em;
}

.scroll-content {
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  width: -moz-fit-content;
  width: fit-content;
  height: 100%;
  padding-left: 35vw;
  padding-right: 35vw;
  display: flex;
}

.image_container {
  width: 100%;
  height: 100%;
}

.is-hidden {
  visibility: hidden;
}

.paragraph {
  font-size: clamp(.9rem, .9vw, 2.5rem);
  line-height: 1.1;
  overflow: hidden;
}

@media screen and (max-width: 991px) {
  .content_text-right, .content_text-left {
    width: 20vw;
  }
}

@media screen and (max-width: 767px) {
  .content_wrapper {
    width: 75vw;
  }

  .gallery_image {
    width: 50vw;
    height: auto;
  }

  .content_text-right, .content_text-left {
    display: none;
  }

  .content_title-top, .content_title-bottom {
    width: 100%;
    margin-left: 0;
  }
}


@font-face {
  font-family: 'Satoshi Italic';
  src: url('https://moussamamadou.github.io/flip-plugin-horizontal-scroll/fonts/Satoshi-VariableItalic.ttf') format('truetype');
  font-weight: 300 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('https://moussamamadou.github.io/flip-plugin-horizontal-scroll/fonts/Satoshi-Variable.ttf') format('truetype');
  font-weight: 300 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Generalsans Italic';
  src: url('https://moussamamadou.github.io/flip-plugin-horizontal-scroll/fonts/GeneralSans-VariableItalic.ttf') format('truetype');
  font-weight: 200 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Generalsans';
  src: url('https://moussamamadou.github.io/flip-plugin-horizontal-scroll/fonts/GeneralSans-Variable.ttf') format('truetype');
  font-weight: 200 700;
  font-style: normal;
  font-display: swap;
}
</style>

  <script>
  window.console = window.console || function(t) {};
</script>

  
  

<style>
html,body{width:1100px;height:720px;min-height:720px;overflow:hidden;background:#fff}
body{position:relative}
.nav_top-wrapper{padding:18px 24px}
.button_reference.fix-bottom-left{bottom:14px;left:14px}
.content_wrapper{width:52vw}
.gallery_image{height:46vh}
.cursor{position:fixed;left:0;top:0}
@media(max-width:1200px){.title-big{font-size:6.2vw}.content_text-left,.content_text-right{width:18vw}.gallery{grid-column-gap:7vw}}
</style>
</head>

<body>
  <a href="https://webflow.com/made-in-webflow/website/slideshow-hero-section-06-8a0fb35c1369d" target="_blank"
    class="button_reference fix-bottom-left w-inline-block">
    <div>Clonable on <strong>Webflow</strong></div>
  </a>
  <nav class="nav">
    <div class="nav_top-wrapper">
      <div class="nav_top">
        <a href="https://www.moussamamadou.com/" class="nav_link">MOUSSA</a>
        <a href="mailto:moussa.mamadou@outook.com" class="nav_link">CONTACT</a>
      </div>
    </div>
  </nav>
  <div class="cursor" data-cursor="container">
    <div class="cross_button"></div>
  </div>  <div class="scroll-wrapper" data-scroll="wrapper">
    <section class="scroll-content" data-scroll="content">
      <div class="gallery">
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 9"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9.jpg 4480w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 6"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6.jpg 3763w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 8"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8.jpg 3456w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 12"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12.jpg 4000w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 5"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5.jpg 3648w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 10"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10.jpg 4000w">
          </div>
        </div>
        <div class="gallery_image" data-gallery="image-wrapper">
          <div class="image_container" data-gallery="image">
            <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 900px" alt="Photo 4"
              srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4.jpg 4016w">
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="section_content" data-content="section">
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">CONFIDENCE</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">CHARISMA</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">CHARM</div>
          <div class="paragraph">Sharp wit, warm smile a magnetic presence. He walks in, and the room seems to pause, by
            his quiet strength.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">Presence</div>
          <div class="paragraph">Striking confidence, captivating charm, and elegance in every glance. A timeless blend
            of poise and presence, effortlessly charismatic.</div>
        </div>
        <div class="image_container" data-content="image">
          <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-9.jpg 4480w"
            alt="Photo 9">
        </div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">WISDOM</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">INTELLECT</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">BRILLIANCE</div>
          <div class="paragraph">Quick mind, deep thoughts, a scholarly presence. His ideas illuminate the room, guided
            by penetrating insight.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">knowledge</div>
          <div class="paragraph">Deep understanding, thoughtful insights, and clarity in every word. A masterful blend
            of experience and intuition, naturally enlightening.</div>
        </div>
        <div class="image_container" data-content="image">
          <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-6.jpg 3763w"
            alt="Photo 6">
        </div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">KINDNESS</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">GENEROSITY</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">Giving</div>
          <div class="paragraph">Open heart, helping hands, a benevolent force. His presence brings comfort, marked by
            selfless grace.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">Compassion</div>
          <div class="paragraph">Gentle spirit, nurturing soul, and warmth in every action. A beautiful harmony of
            empathy and understanding, naturally caring.</div>
        </div>
        <div class="image_container" data-content="image"><img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-8.jpg 3456w"
            alt="Photo 8"></div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">CREATIVITY</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">ARTISTRY</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">Expression</div>
          <div class="paragraph">Fluid style, bold vision, a creative soul. He transforms the ordinary, through his
            unique perspective.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">Innovation</div>
          <div class="paragraph">Boundless imagination, artistic flair, and vision in every creation. A stunning fusion
            of originality and skill, naturally inspiring.</div>
        </div>
        <div class="image_container" data-content="image"><img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-12.jpg 4000w"
            alt="Photo 12"></div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">LEADERSHIP</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">INFLUENCE</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">Impact</div>
          <div class="paragraph">Strong presence, clear purpose, a guiding light. He shapes the path forward, through
            determined leadership.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">Guidance</div>
          <div class="paragraph">Natural authority, inspiring presence, and direction in every decision. A powerful
            combination of vision and influence, naturally commanding</div>
        </div>
        <div class="image_container" data-content="image"><img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-5.jpg 3648w"
            alt="Photo 5"></div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">GRACE</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">ELEGANCE</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">SOPHISTICATION</div>
          <div class="paragraph">Smooth demeanor, cultured taste, a refined presence. He elevates any setting, with
            natural elegance.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">POLISH</div>
          <div class="paragraph">Refined movement, sophisticated manner, and style in every gesture. A perfect balance
            of poise and dignity, naturally flowing.</div>
        </div>
        <div class="image_container" data-content="image">
          <img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-10.jpg 4000w"
            alt="Photo 10">
        </div>
      </div>
    </div>
    <div class="content is-hidden" data-content="details">
      <div class="content_wrapper" data-content="details-wrapper">
        <div class="content_title-top" data-content="text-top">
          <div class="title-big">PASSION</div>
        </div>
        <div class="content_title-bottom" data-content="text-bottom">
          <div class="title-big">INTENSITY</div>
        </div>
        <div class="content_text-left" data-content="text-left">
          <div class="title-small">Drive</div>
          <div class="paragraph">Fierce determination, endless energy, a dynamic force. He ignites inspiration, through
            passionate pursuit.</div>
        </div>
        <div class="content_text-right" data-content="text-right">
          <div class="title-small">Enthusiasm</div>
          <div class="paragraph">Burning drive, intense focus, and fire in every pursuit. An explosive blend of energy
            and dedication, naturally motivating.</div>
        </div>
        <div class="image_container" data-content="image"><img src="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4.jpg" loading="lazy" sizes="50vw"
            srcset="https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-500.jpg 500w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-800.jpg 800w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-1080.jpg 1080w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-1600.jpg 1600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-2000.jpg 2000w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4-p-2600.jpg 2600w, https://moussamamadou.github.io/flip-plugin-horizontal-scroll/images/photo-4.jpg 4016w"
            alt="Photo 4"></div>
      </div>
    </div>
  </section>
  <script src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js'></script>
<script src='https://unpkg.com/lenis@1.1.16/dist/lenis.min.js'></script>
<script src='https://unpkg.com/split-type'></script>
    <script id="rendered-js" >
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(Flip);

  // Cache DOM elements
  const scrollWrapper = document.querySelector('[data-scroll="wrapper"]');

  // Initialize smooth scrolling
  const lenis = new Lenis({
    autoRaf: true,
    wrapper: scrollWrapper,
    content: document.querySelector('[data-scroll="content"]'),
    orientation: 'horizontal',
    lerp: 0.05,
    wheelMultiplier: 0.85,
    smoothWheel: true,
    smoothTouch: true,
    touchMutliplier: 2 });


  const galleryImagesWrapper = document.querySelectorAll('[data-gallery="image-wrapper"]');
  const galleryImages = document.querySelectorAll('[data-gallery="image"]');

  const sectionContent = document.querySelector('[data-content="section"]');
  const contents = document.querySelectorAll('[data-content="details"]');
  const contentWrappers = document.querySelectorAll('[data-content="details-wrapper"]');
  const contentWrapperImages = document.querySelectorAll('[data-content="details-wrapper"] .image_container');

  const cursor = document.querySelector('[data-cursor="container"]');

  // State management
  let listOfSplits = [];
  let currentOpenIndex = null;
  let isAnimating = false;
  let currentAnimation = null;
  let rafId = null;
  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;

  // Initialize content
  scrollWrapper.classList.remove('is-hidden');

  contents.forEach((content, index) => {
    content.classList.add('is-hidden');
    listOfSplits[index] = initializeSplitText(content);
  });
  contentWrapperImages.forEach(image => image.remove());

  // Improved cursor movement with RAF
  function updateCursor() {
    cursorX += (targetX - cursorX) * 0.15;
    cursorY += (targetY - cursorY) * 0.15;
    cursor.style.transform = \`translate3d(\${cursorX}px, \${cursorY}px, 0)\`;
    rafId = requestAnimationFrame(updateCursor);
  }

  function handleMouseMove(e) {
    const cursorBounds = cursor.getBoundingClientRect();
    targetX = e.clientX - cursorBounds.width * 3 / 4;
    targetY = e.clientY - cursorBounds.height * 3 / 4;
    if (!rafId) {
      rafId = requestAnimationFrame(updateCursor);
    }
  }

  // Touch support
  function handleTouchStart(e, index) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      handleImageClick(index);
    }
  }

  function handleImageClick(index) {
    if (currentOpenIndex === null) {
      openContent(index);
    }
  }

  function handleWrapperClick(index) {
    if (currentOpenIndex === index) {
      hideContent(index);
    }
  }

  function initializeSplitText(content) {
    if (!content) return null;

    const contentTitleTop = content.querySelectorAll('[data-content="text-top"] div');
    const contentTitleBottom = content.querySelectorAll('[data-content="text-bottom"] div');
    const contentTextLeft = content.querySelectorAll('[data-content="text-left"] div');
    const contentTextRight = content.querySelectorAll('[data-content="text-right"] div');

    const titleTopSplits = Array.from(
    contentTitleTop,
    n => new SplitType(n, { types: 'chars' }));


    const titleBottomSplits = Array.from(
    contentTitleBottom,
    n => new SplitType(n, { types: 'chars' }));


    titleTopSplits[0]?.chars?.forEach(char => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('char-wrap');
      char.parentNode.insertBefore(wrapper, char);
      wrapper.appendChild(char);
    });

    const textLeftSplits = Array.from(
    contentTextLeft,
    n => new SplitType(n, { types: 'lines' }));


    const textRightSplits = Array.from(
    contentTextRight,
    n => new SplitType(n, { types: 'lines' }));


    [textLeftSplits, textRightSplits].forEach(splits => {
      splits.forEach(split => {
        split.lines?.forEach(line => {
          const wrapper = document.createElement('div');
          wrapper.classList.add('line-wrap');
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });
      });
    });

    return {
      titleTopSplits,
      titleBottomSplits,
      textLeftSplits,
      textRightSplits };

  }

  // Optimized open animation with will-change
  const openContent = index => {
    if (isAnimating) return;

    isAnimating = true;
    isOpening = true;
    contents[index].classList.remove('is-hidden');
    const currentWrapper = contentWrappers[index];
    const splits = listOfSplits[index];

    // Add will-change to optimize animations
    splits.titleTopSplits[0].chars.forEach(char => {
      char.style.willChange = 'transform, clip-path';
    });

    currentAnimation = gsap.timeline({
      duration: 1.25,
      ease: 'power4.inOut',
      onStart: () => {
        sectionContent.classList.remove('is-hidden');
      },
      onComplete: () => {
        isAnimating = false;
        currentOpenIndex = index;
        lenis.stop();
        scrollWrapper.classList.add('is-hidden');
        cursor.classList.add('is-open');
        currentAnimation = null;
        isOpening = false;
        // Clean up will-change
        splits.titleTopSplits[0].chars.forEach(char => {
          char.style.willChange = 'auto';
        });
      } });


    currentAnimation.
    addLabel('start', 0).
    addLabel('texts', 0.5).
    add(() => {
      const flipState = Flip.getState(galleryImages[index]);
      currentWrapper.appendChild(galleryImages[index]);

      Flip.from(flipState, {
        duration: 1.25,
        ease: 'power4.inOut' });

    }, 'start').
    to(
    gsap.utils.
    toArray(galleryImagesWrapper).
    filter((img, i) => i !== index),
    {
      clipPath: 'inset(100% 0 0 0)',
      duration: 0.75,
      ease: 'power3.inOut' },

    0).

    fromTo(
    [splits.titleTopSplits[0].elements, splits.titleTopSplits[0].elements],
    {
      xPercent: 15 },

    {
      xPercent: 0,
      duration: 1,
      ease: 'power3.out' },

    'start+=1.25').

    fromTo(
    [splits.titleTopSplits[0].chars, splits.titleBottomSplits[0].chars],
    {
      clipPath: 'inset(0 100% 0 0)',
      xPercent: 10 },

    {
      clipPath: 'inset(0 0% 0 0)',
      xPercent: 0,
      duration: 0.75,
      ease: 'power3.out' },

    'start+=1.25').

    fromTo(
    [
    ...splits.textLeftSplits.flatMap(split => split.lines),
    ...splits.textRightSplits.flatMap(split => split.lines)],

    {
      yPercent: 100,
      opacity: 0 },

    {
      yPercent: 0,
      opacity: 1,
      stagger: 0.025 },

    'start+=1.2');

  };

  // Rest of your original hideContent function remains the same
  const hideContent = index => {
    if (isAnimating || currentOpenIndex === null) return;

    isAnimating = true;
    const currentWrapper = contentWrappers[index];
    const splits = listOfSplits[index];
    lenis.start();
    scrollWrapper.classList.remove('is-hidden');

    currentAnimation = gsap.timeline({
      duration: 1.25,
      ease: 'power4.inOut',
      onComplete: () => {
        isAnimating = false;
        currentOpenIndex = null;
        currentAnimation = null;
        cursor.classList.remove('is-open');
        sectionContent.classList.add('is-hidden');
        contents[index].classList.add('is-hidden');
      } });


    currentAnimation.
    addLabel('start', 0).
    fromTo(
    [
    splits.titleTopSplits[0].elements,
    splits.titleBottomSplits[0].elements],

    {
      xPercent: 0 },

    {
      xPercent: 10,
      ease: 'power3.out',
      duration: 1 },

    'start').

    fromTo(
    [splits.titleTopSplits[0].chars, splits.titleBottomSplits[0].chars],
    {
      clipPath: 'inset(0 0% 0 0)',
      xPercent: 0 },

    {
      clipPath: 'inset(0 100% 0 0)',
      xPercent: 10,
      ease: 'power3.out',
      duration: 0.75 },

    'start').

    to(
    [
    ...splits.textLeftSplits.flatMap(split => split.lines),
    ...splits.textRightSplits.flatMap(split => split.lines)],

    {
      yPercent: 100,
      stagger: 0.025,
      duration: 0.75 },

    'start').

    add(() => {
      const contentWrapperImage =
      currentWrapper.querySelector('.image_container');
      if (!contentWrapperImage) return;
      const flipState = Flip.getState(contentWrapperImage);
      galleryImagesWrapper[index].appendChild(contentWrapperImage);
      Flip.from(flipState, {
        duration: 1.25,
        ease: 'power3.inOut' });

    }, 'start+=0.25').
    to(
    gsap.utils.toArray(galleryImagesWrapper).filter((img, i) => i !== index),
    {
      clipPath: 'inset(0% 0 0 0)' }).


    set(galleryImagesWrapper, {
      clipPath: 'none' });

  };

  // Event Listeners
  galleryImagesWrapper.forEach((image, index) => {
    image.addEventListener('click', () => handleImageClick(index));
    image.addEventListener('touchstart', e => handleTouchStart(e, index));
    image.addEventListener('mouseenter', () =>
    cursor.classList.add('is-visible'));

    image.addEventListener('mouseleave', () =>
    cursor.classList.remove('is-visible'));

  });

  contentWrappers.forEach((content, index) => {
    content.addEventListener('click', () => handleWrapperClick(index));
    content.addEventListener('mouseenter', () =>
    cursor.classList.add('is-visible'));

    content.addEventListener('mouseleave', () =>
    cursor.classList.remove('is-visible'));

  });

  // Cleanup function
  function cleanup() {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('mousemove', handleMouseMove);
  }
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('unload', cleanup);
});

  </script>

  
</body>

</html>
`;
