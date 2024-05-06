$(document).ready(function() {
    // Function to load places from the API
    function loadPlaces() {
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search/",
            contentType: "application/json",
            data: JSON.stringify({}),
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
                console.error("Error loading places:", error);
            }
        });
    }

    // Initial load of places
    loadPlaces();
});

