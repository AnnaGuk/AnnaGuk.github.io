const tabs = document.querySelectorAll("[data-tab-value]");
const tabInfos = document.querySelectorAll("[data-tab-info]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const target = document.querySelector(tab.dataset.tabValue);

    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove("active");
    });
    target.classList.add("active");
  });
});

const imageThumbs = document.getElementById("image-thumbs");
const imageArray = Array.from({ length: 9 }, (_, i) => i + 1);
let currentImage = document.getElementById("current-image");

imageArray.forEach((imgNumber) => {
  const thumb = document.createElement("img");
  thumb.src = `./assets/fashion/img${imgNumber}.png`;
  thumb.alt = `Image ${imgNumber}`;
  thumb.classList.add("thumb");
  thumb.addEventListener("click", () => {
    currentImage.src = thumb.src;
    currentImage.alt = thumb.alt;
  });
  imageThumbs.appendChild(thumb);
});

const songsPlaylist = document.getElementById("songs");
const songsArray = Array.from({ length: 8 }, (_, i) => i + 1);
const songsList = {
  1: "50Cent-InDaClub",
  2: "Nelly-HotInHere",
  3: "GwenStefani-HollabackGirl",
  4: "BritneySpears-BabyOneMoreTime",
  5: "JustinTimberlake-CryMeARiver",
  6: "LinkinPark-Papercut",
  7: "LimpBizkit-Rollin",
  8: "Rammstein-DuHast",
};

songsArray.forEach((songIndex) => {
  const songbox = document.createElement("div");
  songbox.classList.add("songbox");

  let songImage = document.createElement("img");
  songImage.src = `./assets/music/${songIndex}.png`;
  songbox.appendChild(songImage);

  let musicAudio = document.createElement("audio");
  musicAudio.controls = true;
  let audioSource = document.createElement("source");
  audioSource.type = "audio/mpeg";
  audioSource.src = `./music/${songsList[songIndex]}.mp3`;
  musicAudio.appendChild(audioSource);
  songbox.appendChild(musicAudio);

  songsPlaylist.appendChild(songbox);
});
