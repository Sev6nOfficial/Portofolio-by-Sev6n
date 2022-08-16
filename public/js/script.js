console.log("Initiating css animator...");

$(".buton").hover(
  function () {
    $(this).removeClass("flipInX");
    $(this).addClass("swing");
  },
  function () {
    $(this).removeClass("swing");
    // $(this).addClass('flipInX')
  }
);
/*
 $('.judul').hover(
     function () {
         $(this).removeClass('pulse slower infinite')
     },
     function () {
         $(this).addClass('pulse slower infinite')
     }
 )
*/
console.log("Initiating particles.js...");

particlesJS.load("particles", "../particlesjs-config.json", function () {
  console.log("particles.js config loaded");
});
particlesJS.load("particles2", "../particlesjs-config.json", function () {
  console.log("particles.js config loaded");
});
particlesJS.load("particles3", "../particlesjs-config.json", function () {
  console.log("particles.js config loaded");
});
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// 404 page js
anime({
  targets: ".row svg",
  translateY: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
});

anime({
  targets: "#zero",
  translateX: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
  scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
  rotateY: { value: "+=180", delay: 200 },
});