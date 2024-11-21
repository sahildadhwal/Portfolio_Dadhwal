document.addEventListener('DOMContentLoaded', function() {
    // Modal setup function to reduce code duplication
    function setupModal(modalId, iconId, initialPosition = { left: 0, top: 0 }) {
        const modal = document.getElementById(modalId);
        const closeButton = modal.querySelector('.close');
        const modalHeader = modal.querySelector('.modal-header');
        let isDragging = false;
        let offset = { x: 0, y: 0 };

        // Show modal when clicking on icon
        document.getElementById(iconId).onclick = function() {
            modal.style.display = 'block';
            
            // Set spawn position
            const modalWidth = modal.offsetWidth;
            const modalHeight = modal.offsetHeight;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Calculate maximum allowable positions
            const maxLeft = viewportWidth - modalWidth;
            const maxTop = viewportHeight - modalHeight;
            
            // Adjust positions if they exceed viewport bounds
            let desiredLeft = Math.min(initialPosition.left, maxLeft);
            let desiredTop = Math.min(initialPosition.top, maxTop);
            
            // Set modal position
            modal.style.left = `${desiredLeft}px`;
            modal.style.top = `${desiredTop}px`;
        }

        // Hide modal
        closeButton.onclick = function() {
            modal.style.display = 'none';
        }

        // Dragging functionality
        modalHeader.addEventListener('mousedown', function(e) {
            isDragging = true;
            offset.x = e.clientX - modal.offsetLeft;
            offset.y = e.clientY - modal.offsetTop;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                modal.style.left = (e.clientX - offset.x) + 'px';
                modal.style.top = (e.clientY - offset.y) + 'px';
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    }

    // Setup each modal with its initial position
    setupModal('system-preferences', 'system-preferences-icon', { left: 800, top: 200});
    setupModal('music-player', 'music-icon', { left: 1000, top: 300 });
    setupModal('resume-viewer', 'resume-icon', { left: 0, top: 0 });
    setupModal('photos-gallery', 'photos-icon', { left: 400, top: 100 });
    setupModal('project-modal', 'projects-icon', { left: 50, top: 100 });
    setupModal('snake-modal', 'snake-icon', { left: 500, top: 50 });
});

/// END DRAG BLOCK


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
        backgrounds.push({ src: `/images/wallpaper/background${i}.jpg`, alt: `Background ${i}` });
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

    // Double click does the same as apply. 
    // Add double-click event listener to apply the background
    backgroundPreviews.addEventListener("dblclick", () => {
        desktopBackground.style.backgroundImage = `url(${selectedBackground})`;
        
    });

    // Apply does the same as Save, it just doesnt close the tab
    applyButton.addEventListener("click", () => {
        if (selectedBackground) {
            desktopBackground.style.backgroundImage = `url(${selectedBackground})`;
        }
    });

    // Save will apply and close the tab 
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
        { song: "Feel It", artist: "d4vd", src: "/audio/Feel It by d4vd.mp3" },
        { song: "Meet Me Halfway", artist: "Black Eyed Peas", src: "/audio/Meet Me Halfway by Black Eyed Peas.mp3" },
        { song: "Sweater Weather", artist: "The Neighbourhood", src: "/audio/Sweater Weather by The Neighbourhood.mp3" },
        { song: "Trophies", artist: "Drake", src: "/audio/Trophies by Drake.mp3" },
        { song: "Not Like Us", artist: "Kendrick Lamar", src: "/audio/Not Like Us by Kendrick Lamar.mp3" }
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

    // Open my REMINDERS TASK MANAGER APP when icon is clicked
    document.getElementById('task-manager-icon').onclick = function() {
        window.open('https://github.com/sahildadhwal/iOS-Projects/tree/main/TaskManager', '_blank');
    }

});

document.addEventListener("DOMContentLoaded", () => {
    // Array of photo details
    const photos = [];
    const numberOfPhotos = 20; // Adjust this number as needed

    for (let i = 1; i <= numberOfPhotos; i++) {
        photos.push({ src: `/images/photos/photo${i}.jpg`, alt: `Photo ${i}` });
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





// PROJECTS FOLDER
// JavaScript to show and close modals
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}



window.addEventListener('DOMContentLoaded', () => {
    const setBodyHeight = () => {
        document.body.style.height = `${window.innerHeight}px`;
    };

    // Set initial body height
    setBodyHeight();

    // Update body height when window is resized
    window.addEventListener('resize', setBodyHeight);
});
