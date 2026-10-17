// EDIT THESE NAMES AND FILE PATHS to customize your 25 buttons.
const categories = [
  { name: "Category 1", videos: [
    { title: "Video 1", file: "videos/category1-video1.mp4" },
    { title: "Video 2", file: "videos/category1-video2.mp4" },
    { title: "Video 3", file: "videos/category1-video3.mp4" },
    { title: "Video 4", file: "videos/category1-video4.mp4" },
    { title: "Video 5", file: "videos/category1-video5.mp4" },
  ]},
  { name: "Category 2", videos: [
    { title: "Video 1", file: "videos/category2-video1.mp4" },
    { title: "Video 2", file: "videos/category2-video2.mp4" },
    { title: "Video 3", file: "videos/category2-video3.mp4" },
    { title: "Video 4", file: "videos/category2-video4.mp4" },
    { title: "Video 5", file: "videos/category2-video5.mp4" },
  ]},
  { name: "Category 3", videos: [
    { title: "Video 1", file: "videos/category3-video1.mp4" },
    { title: "Video 2", file: "videos/category3-video2.mp4" },
    { title: "Video 3", file: "videos/category3-video3.mp4" },
    { title: "Video 4", file: "videos/category3-video4.mp4" },
    { title: "Video 5", file: "videos/category3-video5.mp4" },
  ]},
  { name: "Category 4", videos: [
    { title: "Video 1", file: "videos/category4-video1.mp4" },
    { title: "Video 2", file: "videos/category4-video2.mp4" },
    { title: "Video 3", file: "videos/category4-video3.mp4" },
    { title: "Video 4", file: "videos/category4-video4.mp4" },
    { title: "Video 5", file: "videos/category4-video5.mp4" },
  ]},
  { name: "Category 5", videos: [
    { title: "Video 1", file: "videos/category5-video1.mp4" },
    { title: "Video 2", file: "videos/category5-video2.mp4" },
    { title: "Video 3", file: "videos/category5-video3.mp4" },
    { title: "Video 4", file: "videos/category5-video4.mp4" },
    { title: "Video 5", file: "videos/category5-video5.mp4" },
  ]},
];

const categoryList = document.getElementById("categoryList");
const player = document.getElementById("videoPlayer");
const emptyState = document.getElementById("emptyState");
let activeButton = null;

categories.forEach((category, categoryIndex) => {
  const section = document.createElement("section");
  section.className = "category";

  const heading = document.createElement("div");
  heading.className = "category-title";
  heading.textContent = category.name;
  section.appendChild(heading);

  category.videos.forEach((video, videoIndex) => {
    const button = document.createElement("button");
    button.className = "video-button";
    button.type = "button";
    button.innerHTML = `<span class="number">${String(videoIndex + 1).padStart(2, "0")}</span><span></span>`;
    button.lastElementChild.textContent = video.title;
    button.addEventListener("click", () => {
      if (activeButton) activeButton.classList.remove("active");
      activeButton = button;
      button.classList.add("active");

      player.src = video.file;
      player.style.display = "block";
      emptyState.style.display = "none";
      player.load();
      player.play().catch(() => {
        // Some browsers require another click before they allow playback.
      });
    });
    section.appendChild(button);
  });

  categoryList.appendChild(section);
});
