 const APP_CONFIG = {
    CLUB_NAME: "🏏 Stuttgart Premier League",
    EMAIL: "info@thundercc.com",
    PHONE: "+1 123 456 7890",
	CLUB_NAME_WELCOME: "Welcome to Stuttgart Premier League",
	SPL_DEC_1: "Stuttgart Premier League (SPL)",
	SPL_DEC_2: "is a cricket league that brings together cricket enthusiasts, talented players, and competitive teams to celebrate the spirit of the game. The league promotes sportsmanship, teamwork, and excellence while providing a platform for players to showcase their skills and passion for cricket.",
	TITLE_SPONSOR: {
		NAME: "Your Brand Here",
		LOGO: "images/title-sponsor.png",
		URL: "https://www.example.com",
		DESC: "Proud title sponsor of the Stuttgart Premier League — backing grassroots cricket, community spirit and every player chasing their dream on the pitch."
	},
	SPL_DEC_3: "SPL organizes exciting matches, tournaments, and cricketing events that foster community engagement and healthy competition. With a commitment to fair play and player development, the league aims to grow cricket and create memorable experiences for players, supporters, and fans."
 };

   
   
/* Gallery data — grouped by year.
   Add or remove photos freely: the slideshow speed adapts to the count. */
const GALLERY_YEARS = [
  {
    year: "2026",
    photos: [
      { src: "images/gallery-2.jpg", alt: "Teams lined up before a match", caption: "SPLT10 - Enjoy the game and chase your dreams" },
      { src: "images/gallery-3.jpg", alt: "Teams lined up before a match", caption: "SPLT10 - Self-belief and hard work will always earn you success." },
      { src: "images/gallery-4.jpg", alt: "Teams lined up before a match", caption: "SPLT10 - Talent wins games, teamwork wins tournaments" },
      { src: "images/gallery-5.jpg", alt: "Teams lined up before a match", caption: "SPLT10 - Every run counts. Every ball matters" }
    ]
  },
  {
    year: "2027",
    photos: [
      { src: "images/spl-banner.jpg", alt: "Team celebrating with the trophy", caption: "Coming Soon" },
      { src: "images/spl-banner.jpg", alt: "Cricketers under floodlights", caption: "Coming Soon" }
    ]
  },
  {
    year: "2028",
    photos: [
      { src: "images/spl-banner.jpg", alt: "Team celebrating with the trophy", caption: "Coming Soon" },
      { src: "images/spl-banner.jpg", alt: "Cricketers under floodlights", caption: "Coming Soon" }
    ]
  }
];   

/* Videos data — the strip under the player.
   Two supported shapes:

   YouTube video:
     { id: "YOUTUBE_ID", title: "...", meta: "..." }

   Your own source file (local folder or any direct URL):
     { src: "videos/final.mp4", poster: "images/1.jpg", title: "...", meta: "..." }
     - local file  -> put the .mp4 in  public/spl/videos/  and use "videos/final.mp4"
     - remote file -> "https://cdn.example.com/final.mp4"
     - poster is the thumbnail shown in the bar and before playback (optional)
*/
const VIDEOS = [
  { src: "videos/spl_1.mp4", poster: "images/spl-banner.jpg", title: "SPL 2026 — Season Highlights", meta: "Highlights" },
  {  src: "videos/spl_2.mp4", poster: "images/spl-banner.jpg", title: "SPL 2026 — Season Highlights", meta: "Highlights" }/*,
  { id: "dQw4w9WgXcQ", title: "Best Catches of the Season", meta: "Fielding" },
  { id: "dQw4w9WgXcQ", title: "Top 10 Sixes", meta: "Batting" },
  { id: "dQw4w9WgXcQ", title: "Opening Day Full Match", meta: "Full match" },
  { id: "dQw4w9WgXcQ", title: "Team Captains Interview", meta: "Interview" }*/
];

