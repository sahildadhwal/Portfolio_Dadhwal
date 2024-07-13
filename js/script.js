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
        systemPreferencesModal.style.top = '500px';
        systemPreferencesModal.style.left = '900px';

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
        musicPlayerModal.style.top = '500px';
        musicPlayerModal.style.left = '1700px';

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

    // ************************* Drag Resume Viewer
    var resumeViewerModal = document.getElementById('resume-viewer');
    var resumeViewerCloseButton = resumeViewerModal.querySelector('.close');
    var resumeViewerModalHeader = resumeViewerModal.querySelector('.modal-header');

    var isResumeViewerDragging = false;
    var resumeViewerOffset = {x: 0, y: 0};

    // Show modal when clicking on Resume icon
    document.getElementById('resume-icon').onclick = function() {
        resumeViewerModal.style.display = 'block';
    }

    // Hide modal only when clicking on close button
    resumeViewerCloseButton.onclick = function() {
        resumeViewerModal.style.display = 'none';
    }

    // Function to handle mouse down event on modal header for dragging
    resumeViewerModalHeader.addEventListener('mousedown', function(e) {
        isResumeViewerDragging = true;
        // Calculate offset relative to the top-left corner of the modal
        resumeViewerOffset.x = e.clientX - resumeViewerModal.offsetLeft;
        resumeViewerOffset.y = e.clientY - resumeViewerModal.offsetTop;
    });

    // Function to handle mouse move event when dragging
    document.addEventListener('mousemove', function(e) {
        if (isResumeViewerDragging) {
            // Update modal position based on mouse movement
            resumeViewerModal.style.left = (e.clientX - resumeViewerOffset.x) + 'px';
            resumeViewerModal.style.top = (e.clientY - resumeViewerOffset.y) + 'px';
        }
    });

    // Function to handle mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isResumeViewerDragging = false;
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
        { src: "images/wallpaper/background1.jpg", alt: "Background 1" },
        { src: "images/wallpaper/background2.jpg", alt: "Background 2" },
        { src: "images/wallpaper/background3.jpg", alt: "Background 3" }
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
    const playPauseButton = document.getElementById("play-pause-btn");
    

    // Array of audio details
    const audioDetails = [
        { song: "Feel It", artist: "d4vd", src: "audio/Feel It by d4vd.mp3" },
        { song: "Meet Me Halfway", artist: "Black Eyed Peas", src: "audio/Meet Me Halfway by Black Eyed Peas.mp3" },
        { song: "Sweater Weather", artist: "The Neighbourhood", src: "audio/Sweater Weather by The Neighbourhood.mp3" },
        { song: "Trophies", artist: "Drake", src: "audio/Trophies by Drake.mp3" },
        { song: "Not Like Us", artist: "Kendrick Lamar", src: "audio/Not Like Us by Kendrick Lamar.mp3" }
    ];

    let currentAudioIndex = null;
    let currentAudioElement = null;
    let currentSelectedElement = null;

    // Function to create audio items
    function createAudioItems() {
        
        audioDetails.forEach((audio, index) => {
            const audioItem = document.createElement("div");
            audioItem.classList.add("audio-item");
            audioItem.innerHTML = `
                <p>${audio.song} - ${audio.artist}</p>
            `;
            
            audioDetailsContainer.appendChild(audioItem);

            // Add click event to select the audio
            audioItem.addEventListener("click", () => {
                if (currentAudioElement) {
                    currentAudioElement.pause();
                }
                if (currentSelectedElement) {
                    currentSelectedElement.classList.remove("selected");
                }

                currentAudioIndex = index;
                currentAudioElement = new Audio(audio.src);
                currentSelectedElement = audioItem;
                currentSelectedElement.classList.add("selected");

                playPauseButton.innerHTML = '<i class="fa fa-pause-circle"></i>';
                currentAudioElement.play();
            });
        });
    }

    playPauseButton.addEventListener("click", () => {
        if (currentAudioElement) {
            if (currentAudioElement.paused) {
                currentAudioElement.play();
                playPauseButton.innerHTML = '<i class="fa fa-pause-circle"></i>';
            } else {
                currentAudioElement.pause();
                playPauseButton.innerHTML = '<i class="fa fa-play-circle"></i>';
            }
        }

    });

    musicIcon.addEventListener("click", () => {
        musicPlayerModal.style.display = "block";
        audioDetailsContainer.innerHTML = "";
        createAudioItems();
    });
    
    
    /* Delete chuck if you want music to only stop if user presses pause. */
    // Stops music when user exits apple music app
    const closeModalMusicPlayer = musicPlayerModal.querySelector(".close");
    closeModalMusicPlayer.addEventListener("click", () => {
        musicPlayerModal.style.display = "none";
        audioDetailsContainer.innerHTML = ""; // Clear audio items when closing modal
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


document.addEventListener('DOMContentLoaded', function() {
    // Show resume viewer modal when clicking on resume icon
    document.getElementById('resume-icon').onclick = function() {
        document.getElementById('resume-viewer').style.display = 'block';
    }

    // Hide resume viewer modal when clicking on close button
    document.querySelector('#resume-viewer .close').onclick = function() {
        document.getElementById('resume-viewer').style.display = 'none';
    }
    
    
    // Open my linkedin profile when icon is clicked
    document.getElementById('linkedin-icon').onclick = function() {
        window.open('https://www.linkedin.com/in/sahildadhwal/', '_blank');
    }
});

