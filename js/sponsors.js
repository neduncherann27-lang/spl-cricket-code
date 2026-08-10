const sponsors = [
    "athidhi.jpg",
    "bw_gruppe.jpg",
    "curry_corner.jpg",
    "in_fincare.jpg",
    "king.jpg",
    "mora.jpg",
    "plasmaair.jpg",
    "soziale.jpg",
    "spice_on_wheel.jpg",
    "spiceland.jpg",
    "stuttgart_experts.jpg",
    "t1.jpg",
    "tkh.jpg",
    "tsv.jpg",
    "yaazh.jpg"
];

const container = document.getElementById("sponsors-container");
 
 


sponsors.forEach(sponsor => {
    const wrapper = document.createElement("div");
    wrapper.className = "sponsor-logo-wrap";

    const img = document.createElement("img");
    img.src = `images/sponsors/${sponsor}`;
    img.alt = sponsor.replace(".jpg", "");
    img.className = "sponsordiv";

    wrapper.appendChild(img);
    container.appendChild(wrapper);
});
