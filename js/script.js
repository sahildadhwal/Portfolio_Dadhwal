document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('system-preferences');
    var closeButton = document.getElementsByClassName('close')[0];
    var modalHeader = document.getElementsByClassName('modal-header')[0];
    var backgroundPreviews = document.getElementById('background-previews');

    var isDragging = false;
    var offset = {x: 0, y: 0};

    // Show modal when clicking on System Preferences icon
    document.getElementById('system-preferences-icon').onclick = function() {
        modal.style.display = 'block';
    }

    // Hide modal only when clicking on close button
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Function to handle mouse down event on modal header for dragging
    modalHeader.addEventListener('mousedown', function(e) {
        isDragging = true;
        // Calculate offset relative to the top-left corner of the modal
        offset.x = e.clientX - modal.offsetLeft;
        offset.y = e.clientY - modal.offsetTop;
    });

    // Function to handle mouse move event when dragging
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            // Update modal position based on mouse movement
            modal.style.left = (e.clientX - offset.x) + 'px';
            modal.style.top = (e.clientY - offset.y) + 'px';
        }
    });

    // Function to handle mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Dynamically generate background previews
    var backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
    backgrounds.forEach(function(background) {
        var preview = document.createElement('div');
        preview.classList.add('background-preview');
        var img = document.createElement('img');
        img.src = 'images/' + background;
        img.alt = background;
        preview.appendChild(img);
        backgroundPreviews.appendChild(preview);

        // Add click event listener to apply selected background
        preview.addEventListener('click', function() {
            // Remove active class from all previews
            var previews = document.querySelectorAll('.background-preview');
            previews.forEach(function(p) {
                p.classList.remove('active');
            });
            // Add active class to the clicked preview
            preview.classList.add('active');
        });
    });

    // Apply selected background without closing modal
    document.getElementById('apply-background-btn').onclick = function() {
        var selectedPreview = document.querySelector('.background-preview.active img');
        if (selectedPreview) {
            var selectedBackground = selectedPreview.alt;
            document.getElementById('desktop-background').style.backgroundImage = 'url(\'images/' + selectedBackground + '\')';
        }
    };

    
    // Apply selected background without closing modal
    document.getElementById('save-background-button').onclick = function() {
        var selectedPreview = document.querySelector('.background-preview.active img');
        if (selectedPreview) {
            var selectedBackground = selectedPreview.alt;
            document.getElementById('desktop-background').style.backgroundImage = 'url(\'images/' + selectedBackground + '\')';
        }
        modal.style.display = 'none'; // close tab after save, unlike apply
    };



});
