$(document).ready(function() {
    const $dayInput = $("#day");
    const $monthInput = $("#month");
    const $yearInput = $("#year");
    const $errorLabels = $(".error");
    const $submitButton = $("#submit");
    const $resultSpans = $("span");

    const today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    function showError(index, message) {
        $errorLabels.eq(index).html(message);
    }

    function calculateAge() {
        let years = todayYear - $yearInput.val();
        let months = todayMonth - $monthInput.val();
        let days = todayDay - $dayInput.val();

        if (days < 0) {
            days += 30;
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        $resultSpans.eq(0).html(years);
        $resultSpans.eq(1).html(months);
        $resultSpans.eq(2).html(days);
    }

    $submitButton.on("click", function() {
        let isValid = true;
        
        if ($dayInput.val() === "") {
            showError(0, "This field is required");
            isValid = false;
        } else if ($dayInput.val() <= 0 || $dayInput.val() > 31) {
            showError(0, "Must be a valid day");
            isValid = false;
        } else {
            showError(0, "");
        }

        if ($monthInput.val() === "") {
            showError(1, "This field is required");
            isValid = false;
        } else if ($monthInput.val() <= 0 || $monthInput.val() > 12) {
            showError(1, "Must be a valid month");
            isValid = false;
        } else {
            showError(1, "");
        }

        if ($yearInput.val() === "") {
            showError(2, "This field is required");
            isValid = false;
        } else if ($yearInput.val() > todayYear) {
            showError(2, "Must be a valid year");
            isValid = false;
        } else {
            showError(2, "");
        }

        if (isValid) {
            calculateAge();
        }
    });
});


