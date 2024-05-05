$(document).ready(function() {
    // Function to load places from the API
    function loadPlaces() {
        // Your AJAX request to load places from API
    }

    // Initial load of places
    loadPlaces();

    // Event listener for Apply Filters button click
    $("#apply-filters").click(function() {
        // Your logic for applying filters
    });

    // Event listener for toggling reviews
    $("#toggle-reviews").click(function() {
        var buttonText = $(this).text();
        if (buttonText === "show") {
            // Fetch and display reviews
            // For demonstration purposes, let's just display a sample review
            var sampleReview = '<div class="review">Sample Review Content</div>';
            $(".reviews").append(sampleReview);
            $(this).text("hide");
        } else {
            // Hide reviews
            $(".review").remove();
            $(this).text("show");
        }
    });
});

