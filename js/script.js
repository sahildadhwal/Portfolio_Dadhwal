// JavaScript to show and hide modal
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('system-preferences');
    var closeButton = document.getElementsByClassName('close')[0];

    // Show modal when clicking on System Preferences icon
    document.getElementById('system-preferences-icon').onclick = function() {
        modal.style.display = 'block';
    }

    // Hide modal when clicking on close button
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Hide modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Apply selected background
    document.getElementById('apply-background-btn').onclick = function() {
        var backgroundSelect = document.getElementById('background-select');
        var selectedBackground = backgroundSelect.value;
        document.getElementById('desktop-background').style.backgroundImage = 'url(\'../images/' + selectedBackground + '\')';
        modal.style.display = 'none'; // Close modal after applying background
    }
});
