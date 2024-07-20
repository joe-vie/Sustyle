// Make y2k row default start at the right


// y2k
document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector(".scroll-container-y2k");
  container.scrollLeft = container.scrollWidth - container.clientWidth;
});

// grunge
document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector(".scroll-container-grunge");
  container.scrollLeft = container.scrollWidth - container.clientWidth;
});
