console.log("Spotify clone script loaded");

// === CONFIGURATION ===
const playlists = {
  "Angry_(mood)": ["song1.mp3", "song2.mp3"],
  "Bright_(mood)": ["song1.mp3", "song2.mp3"],
  "Chill_(mood)": ["song1.mp3", "song2.mp3"],
  "Dark_(mood)": ["dark.mp3"],
  "Diljit": ["diljit.mp3"],
  "Funky_(mood)": ["funky.mp3"],
  "Love_(mood)": ["love.mp3"],
  "Uplifting_(mood)": ["uplifting.mp3"],
  "cs": ["cs.mp3"],
  "karan aujla": ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"],
  "ncs": ["ncs.mp3"]
};

// === GLOBALS ===
let currentSong = new Audio();
let currentFolder = "";
let songs = [];
let currentIndex = 0;

// DOM Elements
const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const songInfo = document.querySelector(".songinfo");
const songTime = document.querySelector(".songtime");
const circle = document.querySelector(".circle");
const seekbar = document.querySelector(".seekbar");
const volumeInput = document.querySelector(".range input");
const volumeIcon = document.querySelector(".volume img");
const leftSidebar = document.querySelector(".left");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

// === HELPER FUNCTION ===
function formatTime(sec) {
  if (isNaN(sec)) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// === LOAD PLAYLIST CARDS ===
async function loadPlaylists() {
  const container = document.querySelector(".spotifyPlaylists .cardContainer");
  container.innerHTML = "";

  for (const folderName in playlists) {
    try {
      let info;
      try {
        const res = await fetch(`songs/${folderName}/info.json`);
        info = await res.json();
      } catch {
        info = { title: folderName, description: "No description available" };
      }

      const cover = `songs/${folderName}/cover.jpg`;
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.folder = folderName;
      card.innerHTML = `
        <div class="play">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
              stroke-linejoin="round"/>
          </svg>
        </div>
        <img src="${cover}" alt="${info.title}">
        <h2>${info.title}</h2>
        <p>${info.description}</p>
      `;
      card.addEventListener("click", () => loadSongsFromFolder(folderName));
      container.appendChild(card);
    } catch (err) {
      console.error(`Error loading playlist ${folderName}:`, err);
    }
  }
}

// === LOAD SONGS FOR A FOLDER ===
function loadSongsFromFolder(folderName) {
  currentFolder = folderName;
  songs = playlists[folderName].map(songName => ({
    name: songName,
    path: `songs/${folderName}/${songName}`
  }));
  currentIndex = 0;

  const songList = document.querySelector(".songList ul");
  songList.innerHTML = "";
  if (songs.length === 0) {
    songList.innerHTML = "<li>No songs found in this playlist</li>";
    return;
  }

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="info">
        <div>${song.name.replace(".mp3", "")}</div>
        <div>${folderName}</div>
      </div>
      <div class="playnow"><span>Play</span></div>
    `;
    li.addEventListener("click", () => {
      currentIndex = index;
      playMusic(song.path, song.name);
    });
    songList.appendChild(li);
  });

  playMusic(songs[0].path, songs[0].name);
}

// === PLAY MUSIC ===
function playMusic(path, name) {
  currentSong.src = path;
  currentSong.play();
  playButton.src = "img/pause.svg";
  songInfo.textContent = decodeURIComponent(name.replace(".mp3", ""));
  songTime.textContent = "00:00 / 00:00";

  currentSong.addEventListener("timeupdate", () => {
    songTime.textContent = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;
    circle.style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });
}

// === CONTROL BUTTONS ===
playButton.addEventListener("click", () => {
  if (currentSong.paused) {
    currentSong.play();
    playButton.src = "img/pause.svg";
  } else {
    currentSong.pause();
    playButton.src = "img/play.svg";
  }
});

previousButton.addEventListener("click", () => {
  if (songs.length === 0) return;
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playMusic(songs[currentIndex].path, songs[currentIndex].name);
});

nextButton.addEventListener("click", () => {
  if (songs.length === 0) return;
  currentIndex = (currentIndex + 1) % songs.length;
  playMusic(songs[currentIndex].path, songs[currentIndex].name);
});

// === SEEKBAR ===
seekbar.addEventListener("click", (e) => {
  if (!currentSong.duration) return;
  const percent = e.offsetX / seekbar.clientWidth;
  currentSong.currentTime = percent * currentSong.duration;
});

// === VOLUME ===
volumeInput.addEventListener("input", (e) => {
  currentSong.volume = e.target.value / 100;
  volumeIcon.src = currentSong.volume === 0 ? "img/mute.svg" : "img/volume.svg";
});

volumeIcon.addEventListener("click", () => {
  if (currentSong.volume > 0) {
    currentSong.volume = 0;
    volumeInput.value = 0;
    volumeIcon.src = "img/mute.svg";
  } else {
    currentSong.volume = 0.1;
    volumeInput.value = 10;
    volumeIcon.src = "img/volume.svg";
  }
});

// === HAMBURGER MENU ===
hamburger.addEventListener("click", () => {
  leftSidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  leftSidebar.style.left = "-130%";
});

// === INIT ===
document.addEventListener("DOMContentLoaded", async () => {
  await loadPlaylists();
});
