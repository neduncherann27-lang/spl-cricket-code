/* Stuttgart Premier League — year-based auto-sliding gallery   */
(function () {
  var tabsEl = document.getElementById("yearTabs");
  var slidesEl = document.getElementById("slides");
  var dotsEl = document.getElementById("dots");
  var metaEl = document.getElementById("sliderMeta");
  var sliderEl = document.getElementById("slider");
  if (!tabsEl || !slidesEl) return;

  var yearIndex = 0;
  var slide = 0;
  var timer = null;
  var paused = false;

  // Slide duration is derived from how many images the year has:
  // fewer images linger longer, larger sets move faster (2.2s–6s).
  function slideDuration(count) {
    return Math.min(6000, Math.max(2200, 9000 / Math.max(count, 1)));
  }

  function photos() {
    return (GALLERY_YEARS[yearIndex] && GALLERY_YEARS[yearIndex].photos) || [];
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    GALLERY_YEARS.forEach(function (entry, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "year-tab" + (i === yearIndex ? " active" : "");
      btn.setAttribute("aria-pressed", i === yearIndex);
      btn.innerHTML = entry.year + '<span class="count">' + entry.photos.length + "</span>";
      btn.addEventListener("click", function () {
        yearIndex = i;
        slide = 0;
        render();
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderSlides() {
    var list = photos();
    slidesEl.innerHTML = "";
    list.forEach(function (photo) {
      var fig = document.createElement("figure");
      fig.className = "slide";
      fig.innerHTML =
        '<img src="' + photo.src + '" alt="' + photo.alt + '" loading="lazy" />' +
        '<figcaption>' + photo.caption + "</figcaption>";
      slidesEl.appendChild(fig);
    });
    slidesEl.style.transform = "translateX(-" + slide * 100 + "%)";
  }

  function renderDots() {
    var list = photos();
    dotsEl.innerHTML = "";
    list.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (i === slide ? " active" : "");
      dot.setAttribute("aria-label", "Go to photo " + (i + 1));
      dot.addEventListener("click", function () { go(i); });
      dotsEl.appendChild(dot);
    });
    var d = slideDuration(list.length) / 1000;
    metaEl.textContent = list.length + " photos · auto-sliding every " + d.toFixed(1) + "s";
  }

  function go(next) {
    var count = photos().length;
    if (!count) return;
    slide = ((next % count) + count) % count;
    slidesEl.style.transform = "translateX(-" + slide * 100 + "%)";
    renderDots();
    restart();
  }

  function restart() {
    if (timer) clearInterval(timer);
    var count = photos().length;
    if (paused || count < 2) return;
    timer = setInterval(function () { go(slide + 1); }, slideDuration(count));
  }

  function render() {
    renderTabs();
    renderSlides();
    renderDots();
    restart();
  }

  document.getElementById("prevBtn").addEventListener("click", function () { go(slide - 1); });
  document.getElementById("nextBtn").addEventListener("click", function () { go(slide + 1); });
  sliderEl.addEventListener("mouseenter", function () { paused = true; restart(); });
  sliderEl.addEventListener("mouseleave", function () { paused = false; restart(); });

  // Optional text from constants.js
  var clubName = document.getElementById("clubName");
  if (clubName && typeof APP_CONFIG !== "undefined") clubName.innerHTML = APP_CONFIG.CLUB_NAME;

  render();
})();
