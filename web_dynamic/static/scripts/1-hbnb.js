// Export the function to initialize amenities functionality
export function initializeAmenities() {
    // Define an object to store checked amenities
    var amenitiesChecked = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // If checkbox is checked, store Amenity ID in the amenitiesChecked object
        if ($(this).is(':checked')) {
            amenitiesChecked[amenityId] = amenityName;
        } else {
            // If checkbox is unchecked, remove Amenity ID from the amenitiesChecked object
            delete amenitiesChecked[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesList = Object.values(amenitiesChecked).join(", ");
        $('.amenities h4').text("Amenities: " + amenitiesList);
    });
}
