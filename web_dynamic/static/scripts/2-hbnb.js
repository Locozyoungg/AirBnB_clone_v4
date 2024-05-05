$(document).ready(function() {
    // Function to check API status
    function checkApiStatus() {
        $.get("http://0.0.0.0:5001/api/v1/status/", function(data, status) {
            if (status === "success" && data.status === "OK") {
                // If API status is OK, add class 'available' to div#api_status
                $("#api_status").addClass("available");
            } else {
                // If API status is not OK, remove class 'available' from div#api_status
                $("#api_status").removeClass("available");
            }
        });
    }

    // Initial check on page load
    checkApiStatus();

    // Check API status every 5 seconds
    setInterval(checkApiStatus, 5000);
});

