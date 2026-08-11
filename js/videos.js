/* Stuttgart Premier League — video player + scrollable video bar
   Supports two kinds of entries in VIDEOS (see js/constants.js):

   1) YouTube:      { id: "YOUTUBE_ID", title, meta }
   2) Own source:   { src: "videos/final.mp4", poster: "images/1.jpg", title, meta }
      `src` may be a local path inside this folder (videos/final.mp4)
      or any external/direct URL (https://cdn.example.com/final.mp4).
*/
(function () {
  var frameEl = document.getElementById("videoFrame");
  var fileEl = document.getElementById("videoFile");
  var titleEl = document.getElementById("videoTitle");
  var metaEl = document.getElementById("videoMeta");
  var barEl = document.getElementById("videoBar");
  if (!frameEl || !fileEl || !barEl || typeof VIDEOS === "undefined") return;

  var current = 0;

  function isFile(v) {
    return !!v.src;
  }

  function thumb(v) {
    if (isFile(v)) return v.poster || "images/spl-banner.jpg";
    return "https://i.ytimg.com/vi/" + v.id + "/mqdefault.jpg";
  }

  function play(i, autoplay) {
    current = i;
    var v = VIDEOS[i];

    if (isFile(v)) {
      // stop the YouTube player and hide it
      frameEl.src = "";
      frameEl.hidden = true;
      fileEl.hidden = false;
      if (v.poster) fileEl.poster = v.poster;
      fileEl.src = v.src;
      fileEl.title = v.title;
      fileEl.load();
      if (autoplay) {
        var p = fileEl.play();
        if (p && p.catch) p.catch(function () {});
      }
    } else {
      fileEl.pause();
      fileEl.removeAttribute("src");
      fileEl.load();
      fileEl.hidden = true;
      frameEl.hidden = false;
      frameEl.src =
        "https://www.youtube-nocookie.com/embed/" + v.id +
        "?rel=0&modestbranding=1" + (autoplay ? "&autoplay=1" : "");
      frameEl.title = v.title;
    }

    titleEl.textContent = v.title;
    metaEl.textContent = v.meta + " · video " + (i + 1) + " of " + VIDEOS.length;
    renderBar();
  }

  function renderBar() {
    barEl.innerHTML = "";
    VIDEOS.forEach(function (v, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "video-chip" + (i === current ? " active" : "");
      btn.setAttribute("aria-current", i === current);
      btn.innerHTML =
        '<span class="video-thumb"><img src="' + thumb(v) + '" alt="' + v.title + '" loading="lazy" /><span class="video-play">&#9654;</span></span>' +
        '<span class="video-chip-text"><span class="video-chip-title">' + v.title + '</span>' +
        '<span class="video-chip-meta">' + v.meta + '</span></span>';
      btn.addEventListener("click", function () { play(i, true); });
      barEl.appendChild(btn);
    });
  }

  document.getElementById("videoBarPrev").addEventListener("click", function () {
    barEl.scrollBy({ left: -barEl.clientWidth * 0.8, behavior: "smooth" });
  });
  document.getElementById("videoBarNext").addEventListener("click", function () {
    barEl.scrollBy({ left: barEl.clientWidth * 0.8, behavior: "smooth" });
  });

  play(0, false);
})();
