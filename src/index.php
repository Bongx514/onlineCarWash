<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="web/css/output.css">
    <link rel="stylesheet" href="web/css/component/_navbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>

    <?php include("components/navbar.html")?>

    <?php include("components/hero.html")?>

    <section class="bg-blue-600 py-12">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
            <!-- Left Side Content -->
            <div class="text-center md:text-left">
                <h2 class="text-3xl font-extrabold text-white mb-4">Book a House Call for Your Car Wash!</h2>
                <p class="text-lg text-blue-200 mb-6">No need to leave home! Let us come to you and give your car the care it deserves, right at your doorstep. Choose your preferred day and time, and we'll handle the rest.</p>
                <a href="./pages/pricing/layout/booking-page.php" class="bg-white text-blue-600 font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-100 transition duration-300">
                    Book Now
                </a>
            </div>
            
            <!-- Right Side Image (Car) -->
           
        </div>
    </section>

    <?php include("components/services.html")?>

    <?php include("components/pricing.html")?>

    <?php include("components/events.html")?>

    <?php include("components/footer.html")?>

</body>

<script src="web/js/service-details.js"></script>
</html>