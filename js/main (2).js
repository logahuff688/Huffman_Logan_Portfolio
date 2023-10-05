(() => {
  // variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // functions
  function modelLoaded() {
    hotspots.forEach((hotspot, index) => {
      hotspot.style.display = "block";
      hotspot.addEventListener("click", () => toggleAnnotation(index));
    });
  }

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  function toggleAnnotation(index) {
    const selected = document.querySelector(`#hotspot-${index + 1}`);
    const isVisible = selected.style.visibility === "visible";
    gsap.to(selected, 1, { visibility: isVisible ? "hidden" : "visible" });
  }

  // Event Listener
  model.addEventListener("load", modelLoaded);
})();