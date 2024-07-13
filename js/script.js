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
        // SETTINGS SPAWN
        systemPreferencesModal.style.top = '500px';
        systemPreferencesModal.style.left = '1200px';
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
        // MUSIC SPAWN
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
        // SET RESUME SPAWN HERE        

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

    // ************************* Drag Photo Gallery
    var photosGalleryModal = document.getElementById('photos-gallery');
    var photosGalleryCloseButton = photosGalleryModal.querySelector('.close');
    var photosGalleryModalHeader = photosGalleryModal.querySelector('.modal-header');

    var isPhotosGalleryDragging = false;
    var photosGalleryOffset = {x: 0, y: 0};

    // Show modal when clicking on Photos icon
    document.getElementById('photos-icon').onclick = function() {
        photosGalleryModal.style.display = 'block';
        // PHOTOS SPAWN
        photosGalleryModal.style.top = '400px';
        photosGalleryModal.style.left = '500px';
    }

    // Hide modal only when clicking on close button
    photosGalleryCloseButton.onclick = function() {
        photosGalleryModal.style.display = 'none';
    }




    // Function to handle mouse down event on modal header for dragging
    photosGalleryModalHeader.addEventListener('mousedown', function(e) {
        isPhotosGalleryDragging = true;
        // Calculate offset relative to the top-left corner of the modal
        photosGalleryOffset.x = e.clientX - photosGalleryModal.offsetLeft;
        photosGalleryOffset.y = e.clientY - photosGalleryModal.offsetTop;
    });

    // Function to handle mouse move event when dragging
    document.addEventListener('mousemove', function(e) {
        if (isPhotosGalleryDragging) {
            // Update modal position based on mouse movement
            photosGalleryModal.style.left = (e.clientX - photosGalleryOffset.x) + 'px';
            photosGalleryModal.style.top = (e.clientY - photosGalleryOffset.y) + 'px';
        }
    });

    // Function to handle mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isPhotosGalleryDragging = false;
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
    
    

    const backgrounds = [];
    const numberOfBackgrounds = 12; // Adjust this number as needed

    for (let i = 1; i <= numberOfBackgrounds; i++) {
        backgrounds.push({ src: `images/wallpaper/background${i}.jpg`, alt: `Background ${i}` });
    }






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

    let currentAudioElement = null;
    let currentSelectedElement = null;

    // Function to create audio items
    function createAudioItems() {
        
        audioDetails.forEach((audio) => {
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
        currentAudioElement.pause();
        playPauseButton.innerHTML = '<i class="fa fa-play-circle"></i>';
        

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









//
//
//
// 

document.addEventListener("DOMContentLoaded", () => {
    // Array of photo details
    const photos = [];
    const numberOfPhotos = 20; // Adjust this number as needed

    for (let i = 1; i <= numberOfPhotos; i++) {
        photos.push({ src: `images/photos/photo${i}.jpg`, alt: `Photo ${i}` });
    }





    // Function to preload images
    function preloadImages(sources) {
        sources.forEach(source => {
            var image = new Image();
            image.src = source.src;
        });
    }

    // Function to create photo items in the gallery
    function createPhotoGallery() {
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = ""; // Clear previous content if any

        photos.forEach(photo => {
            const photoItem = document.createElement("div");
            photoItem.classList.add("photo-item");

            // Create image preview
            const imgPreview = document.createElement("div");
            imgPreview.classList.add("photo-preview");
            imgPreview.style.backgroundImage = `url(${photo.src})`;

            photoItem.appendChild(imgPreview);

            // Add event listener to log clicked photo
            photoItem.addEventListener("click", () => {
                console.log(`Clicked on ${photo.alt}`);
                // Optionally, perform actions like displaying full-size image
            });

            gallery.appendChild(photoItem);
        });
    }

    // Preload images before displaying the gallery
    preloadImages(photos);

    // Show photos gallery modal when clicking on Photos icon
    const photosIcon = document.getElementById("photos-icon");
    const photosGalleryModal = document.getElementById("photos-gallery");

    photosIcon.addEventListener("click", () => {
        photosGalleryModal.style.display = "block";
        createPhotoGallery();
    });

    // Hide photos gallery modal when clicking on close button
    const closePhotosButton = photosGalleryModal.querySelector(".close");
    closePhotosButton.addEventListener("click", () => {
        photosGalleryModal.style.display = "none";
        // Optionally clear gallery content here
    });
});
