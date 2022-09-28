function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
    mobile: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
  });
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function comps() {
  var yellow = document.querySelector(".r1bottom");
  var black = document.querySelector(".t1right");
  var white = document.querySelector(".t1left");
  var rec = document.querySelector("#rec");
  var cir = document.querySelector("#cir");
  var tri = document.querySelector("#tri");
  yellow.addEventListener("mouseover", () => {
    tri.style.scale = "1.5";
    rec.style.scale = "0.6";
    cir.style.scale = "0.6";
    tri.style.backgroundColor = "rgb(255, 244, 128)";
  });
  white.addEventListener("mouseover", () => {
    tri.style.scale = "0.6";
    rec.style.scale = "1.5";
    cir.style.scale = "0.6";
    rec.style.backgroundColor = "rgb(255, 255, 255)";
  });
  black.addEventListener("mouseover", () => {
    tri.style.scale = "0.6";
    rec.style.scale = "0.6";
    cir.style.scale = "1.5";
    cir.style.backgroundColor = "rgb(255, 174, 220)";
  });
  document.querySelector(".p1left").addEventListener("mouseover", () => {
    tri.style.backgroundColor = "rgb(255, 244, 128)";
    rec.style.backgroundColor = "rgb(255, 255, 255)";
    cir.style.backgroundColor = "rgb(255, 174, 220)";
  });
  document.querySelector(".p1left").addEventListener("mouseleave", () => {
    cir.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    rec.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    tri.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
  });
  white.addEventListener("mouseleave", () => {
    tri.style.scale = "1";
    rec.style.scale = "1";
    cir.style.scale = "1";
    cir.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    rec.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    tri.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
  });
  yellow.addEventListener("mouseleave", () => {
    tri.style.scale = "1";
    rec.style.scale = "1";
    cir.style.scale = "1";
    cir.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    rec.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    tri.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
  });
  black.addEventListener("mouseleave", () => {
    tri.style.scale = "1";
    rec.style.scale = "1";
    cir.style.scale = "1";
    cir.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    rec.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
    tri.style.backgroundColor = "rgba(255, 255, 255, 0.381)";
  });
}
function triggers() {
  gsap.to("#page1 .p1top", {
    opacity: "0",
    transform: "translateY(5vh)",
    scrollTrigger: {
      trigger: "#page1 .p1top",
      scroller: "#main",
      start: "center 20%",
      end: "center 0%",
      scrub: true,
    },
  });
  gsap.to("#textrot #ig", {
    transform: "rotateZ(179deg)",
    scrollTrigger: {
      trigger: "#textrot",
      scroller: "#main",
      start: "center 100%",
      end: "center -20%",
      scrub: true,
    },
  });
  document.querySelectorAll(".crafts").forEach((elem) => {
    gsap.to(elem, {
      marginRight: "50vw",
      scrollTrigger: {
        trigger: elem,
        scroller: "#main",
        start: "top 100%",
        end: "center 40%",
        scrub: true,
      },
    });
  });
  document.querySelectorAll(".overcrafts").forEach((elem) => {
    gsap.to(elem, {
      marginLeft: "50vw",
      scrollTrigger: {
        trigger: elem,
        scroller: "#main",
        start: "top 100%",
        end: "center 40%",
        scrub: true,
      },
    });
  });
}
locoTrigger();
triggers();
comps();
