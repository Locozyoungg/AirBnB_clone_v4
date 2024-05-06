$(document).ready(function() {
    // Function to load places from the API
    function loadPlaces() {
        // Your AJAX request to load places from API
    }

    // Initial load of places
    loadPlaces();

    // Event listener for Apply Filters button click
    $("#apply-filters").click(function() {
        // Gather selected amenity IDs
        var selectedAmenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            selectedAmenities.push($(this).data('id'));
        });

        // Make AJAX request to places_search endpoint with selected amenities
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search/",
            contentType: "application/json",
            data: JSON.stringify({"amenities": selectedAmenities}),
            success: function(data) {
                // Clear existing places
                $(".places").empty();

                // Loop through places and create article tags
                data.forEach(function(place) {
                    var placeHTML = '<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guests</div><div class="number_rooms">' + place.number_rooms + ' Rooms</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div></div><div class="description">' + place.description + '</div></article>';
                    $(".places").append(placeHTML);
                });
            },
            error: function(xhr, status, error) {
                console.error("Error applying filters:", error);
            }
        });
    });
});

