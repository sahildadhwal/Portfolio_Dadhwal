document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('system-preferences');
    var closeButton = document.getElementsByClassName('close')[0];
    var modalHeader = document.getElementsByClassName('modal-header')[0];

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

    // Apply selected background
    document.getElementById('apply-background-btn').onclick = function() {
        var backgroundSelect = document.getElementById('background-select');
        var selectedBackground = backgroundSelect.value;
        document.getElementById('desktop-background').style.backgroundImage = 'url(\'../images/' + selectedBackground + '\')';
        modal.style.display = 'none'; // Close modal after applying background
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

    // Prevent modal from closing when clicking outside or pressing Escape key
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            event.stopPropagation(); // Prevent propagation of the click event
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            event.stopPropagation(); // Prevent propagation of the Escape key press
        }
    });
});
