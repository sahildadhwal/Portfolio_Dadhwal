document.addEventListener('DOMContentLoaded', function() {
    // ************************* Drag System Preferences Tab 
    var systemPreferencesModal = document.getElementById('system-preferences');
    var systemPreferencesCloseButton = systemPreferencesModal.querySelector('.close');
    var systemPreferencesModalHeader = systemPreferencesModal.querySelector('.modal-header');

    var isSystemPreferencesDragging = false;
    var systemPreferencesOffset = {x: 0, y: 0};

    // Show modal when clicking on System Preferences icon
    document.getElementById('system-preferences-icon').onclick = function() {
        systemPreferencesModal.style.display = 'block';
    }

    // Hide modal only when clicking on close button
    systemPreferencesCloseButton.onclick = function() {
        systemPreferencesModal.style.display = 'none';
    }

    // Function to handle mouse down event on modal header for dragging
    systemPreferencesModalHeader.addEventListener('mousedown', function(e) {
        isSystemPreferencesDragging = true;
        // Calculate offset relative to the top-left corner of the modal
        systemPreferencesOffset.x = e.clientX - systemPreferencesModal.offsetLeft;
        systemPreferencesOffset.y = e.clientY - systemPreferencesModal.offsetTop;
    });

    // Function to handle mouse move event when dragging
    document.addEventListener('mousemove', function(e) {
        if (isSystemPreferencesDragging) {
            // Update modal position based on mouse movement
            systemPreferencesModal.style.left = (e.clientX - systemPreferencesOffset.x) + 'px';
            systemPreferencesModal.style.top = (e.clientY - systemPreferencesOffset.y) + 'px';
        }
    });

    // Function to handle mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isSystemPreferencesDragging = false;
    });

    // ************************* Drag Music Tab
    var musicPlayerModal = document.getElementById('music-player');
    var musicPlayerCloseButton = musicPlayerModal.querySelector('.close');
    var musicPlayerModalHeader = musicPlayerModal.querySelector('.modal-header');

    var isMusicPlayerDragging = false;
    var musicPlayerOffset = {x: 0, y: 0};

    // Show modal when clicking on Music icon
    document.getElementById('music-icon').onclick = function() {
        musicPlayerModal.style.display = 'block';
    }

    // Hide modal only when clicking on close button
    musicPlayerCloseButton.onclick = function() {
        musicPlayerModal.style.display = 'none';
    }

    // Function to handle mouse down event on modal header for dragging
    musicPlayerModalHeader.addEventListener('mousedown', function(e) {
        isMusicPlayerDragging = true;
        // Calculate offset relative to the top-left corner of the modal
        musicPlayerOffset.x = e.clientX - musicPlayerModal.offsetLeft;
        musicPlayerOffset.y = e.clientY - musicPlayerModal.offsetTop;
    });

    // Function to handle mouse move event when dragging
    document.addEventListener('mousemove', function(e) {
        if (isMusicPlayerDragging) {
            // Update modal position based on mouse movement
            musicPlayerModal.style.left = (e.clientX - musicPlayerOffset.x) + 'px';
            musicPlayerModal.style.top = (e.clientY - musicPlayerOffset.y) + 'px';
        }
    });

    // Function to handle mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isMusicPlayerDragging = false;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const systemPreferencesIcon = document.getElementById("system-preferences-icon");
    const systemPreferencesModal = document.getElementById("system-preferences");
    const closeModalButton = systemPreferencesModal.querySelector(".close");
    const desktopBackground = document.getElementById("desktop-background");
    const backgroundPreviews = document.getElementById("background-previews");
    const saveButton = document.getElementById("save-background-button");
    const applyButton = document.getElementById("apply-background-btn");
    
    const backgrounds = [
        { src: "images/background1.jpg", alt: "Background 1" },
        { src: "images/background2.jpg", alt: "Background 2" },
        { src: "images/background3.jpg", alt: "Background 3" }
    ];


    
    
    let selectedBackground = "";

    backgrounds.forEach(background => {
        const preview = document.createElement("div");
        preview.classList.add("background-preview");
        preview.innerHTML = `<img src="${background.src}" alt="${background.alt}" data-src="${background.src}">`;
        backgroundPreviews.appendChild(preview);

        preview.addEventListener("click", (event) => {
            const target = event.target;
            selectedBackground = target.getAttribute("data-src");

            const previews = backgroundPreviews.querySelectorAll("img");
            previews.forEach(img => img.style.border = "1px solid #ccc");
            target.style.border = "3px solid #007bff";
        });
    });

    systemPreferencesIcon.addEventListener("click", () => {
        systemPreferencesModal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        systemPreferencesModal.style.display = "none";
    });

    applyButton.addEventListener("click", () => {
        if (selectedBackground) {
            desktopBackground.style.backgroundImage = `url(${selectedBackground})`;
        }
    });

    saveButton.addEventListener("click", () => {
        if (selectedBackground) {
            desktopBackground.style.backgroundImage = `url(${selectedBackground})`;
            systemPreferencesModal.style.display = "none";
        }
    });

    // Music Player
    const musicIcon = document.getElementById("music-icon");
    const musicPlayerModal = document.getElementById("music-player");
    const audioDetailsContainer = document.getElementById("audio-details");

    // Array of audio details
    const audioDetails = [
        { song: "Feel It", artist: "d4vd", src: "audio/Feel It by d4vd.mp3" },
        { song: "Meet Me Halfway", artist: "Black Eyed Peas", src: "audio/Meet Me Halfway by Black Eyed Peas.mp3" },
        { song: "Sweater Weather", artist: "The Neighbourhood", src: "audio/Sweater Weather by The Neighbourhood.mp3" },
        { song: "Trophies", artist: "Drake", src: "audio/Trophies by Drake.mp3" },
        { song: "Not Like Us", artist: "Kendrick Lamar", src: "audio/Not Like Us by Kendrick Lamar.mp3" }
    ];

    // Function to create audio items
    function createAudioItems() {
        audioDetails.forEach((audio, index) => {
            const audioItem = document.createElement("div");
            audioItem.classList.add("audio-item");
            audioItem.innerHTML = `
                <p>${audio.song} - ${audio.artist}</p>
                <div class="audio-controls">
                    <audio src="${audio.src}" id="audio-${index}"></audio>
                    <button class="play-pause-btn" data-index="${index}">Play</button>
                </div>
            `;
            audioDetailsContainer.appendChild(audioItem);

            const audioElement = audioItem.querySelector(`#audio-${index}`);
            const playPauseBtn = audioItem.querySelector(".play-pause-btn");

            playPauseBtn.addEventListener("click", () => {
                if (audioElement.paused) {
                    audioElement.play();
                    playPauseBtn.textContent = "Pause";
                } else {
                    audioElement.pause();
                    playPauseBtn.textContent = "Play";
                }
            });
        });
    }

    musicIcon.addEventListener("click", () => {
        musicPlayerModal.style.display = "block";
        createAudioItems();
    });

    const closeModalMusicPlayer = musicPlayerModal.querySelector(".close");
    closeModalMusicPlayer.addEventListener("click", () => {
        musicPlayerModal.style.display = "none";
        audioDetailsContainer.innerHTML = ""; // Clear audio items when closing modal
    });

    window.addEventListener("click", (event) => {
        if (event.target === musicPlayerModal) {
            musicPlayerModal.style.display = "none";
            audioDetailsContainer.innerHTML = ""; // Clear audio items when closing modal
        }
    });

    // Mail Icon
    const mailIcon = document.getElementById("mail-icon");
    mailIcon.addEventListener("click", () => {
        openMailClient();
    });

    function openMailClient() {
        const email = "sahildadhwal2001@gmail.com";
        const subject = "I Came from your Portfolio! :D";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    }




    
});
