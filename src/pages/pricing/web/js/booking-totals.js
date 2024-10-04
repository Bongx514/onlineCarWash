// Get references to the form elements
const $serviceSelect = $('#service'),
    $carTypeSelect = $('#car_type'),
    $locationSelect = $('#location'),
    $dateInput = $('#date'),
    $timeInput = $('#time'),

// Get references to the cart summary display elements
    $selectedServiceText = $('#selected-service'),
    $selectedCarTypeText = $('#selected-car-type'),
    $selectedLocationText = $('#selected-location'),
    $selectedDateText = $('#selected-date'),
    $selectedTimeText = $('#selected-time'),
    $totalPriceText = $('#total-price');

// Function to calculate the total price
function calculateTotal() {
    const selectedServicePrice = parseFloat($serviceSelect.find('option:selected').data('price')) || 0,
        selectedCarTypeExtra = parseFloat($carTypeSelect.find('option:selected').data('extra')) || 0,
        selectedLocationExtra = parseFloat($locationSelect.find('option:selected').data('extra')) || 0,
        totalPrice = selectedServicePrice + selectedCarTypeExtra + selectedLocationExtra;

    $totalPriceText.text(`R${totalPrice.toFixed(2)}`);
}

// Event listener for service selection
$serviceSelect.on('change', function() {
    const selectedOption = $serviceSelect.find('option:selected').text();
    $selectedServiceText.text(selectedOption);
    calculateTotal();  // Update total price when service changes
});

// Event listener for car type selection
$carTypeSelect.on('change', function() {
    const selectedOption = $carTypeSelect.find('option:selected').text();
    $selectedCarTypeText.text(selectedOption);
    calculateTotal();  // Update total price when car type changes
});

// Event listener for location selection
$locationSelect.on('change', function() {
    const selectedOption = $locationSelect.find('option:selected').text();
    $selectedLocationText.text(selectedOption);
    calculateTotal();  // Update total price when location changes
});

// Event listener for date selection
$dateInput.on('change', function() {
    $selectedDateText.text($dateInput.val());
});

// Event listener for time selection
$timeInput.on('change', function() {
    $selectedTimeText.text($timeInput.val());
});