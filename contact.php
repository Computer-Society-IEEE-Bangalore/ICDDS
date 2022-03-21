<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Contact | ICDDS 2022</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Favicons -->
        <link href="img/favicon.ico" rel="icon">
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,500,700,900" rel="stylesheet"> 

        <!-- Bootstrap CSS File -->
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Libraries CSS Files -->
        <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="vendor/animate/animate.min.css" rel="stylesheet">
        <link href="vendor/ionicons/css/ionicons.min.css" rel="stylesheet">
        <link href="vendor/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

        <!-- Main Stylesheet File -->
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <!-- Header Start -->
            <?php include("includes/header.php"); ?>
        <!-- Header end -->

        <!-- Banner Section Start-->
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                 <h1 class="banner-header">
                                    Contact
                                </h1>
                            </div>
                            <div class="col-md-6">
                                 <p class="banner-nav">
                                    <span class="banner-box">
                                        <a href="index.html">Home</a>
                                        <a href="contact.html">Contact</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner Section end -->

        <!-- Contact Section Start -->
        <section id="contact">
            <div class="container">
                <div class="section-header">
                    <h3>Contact Us</h3>
                </div>
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    
                    <div class="col-md-8  form">
                        <form action="https://formspree.io/f/meqnzvwn" method="post" role="form" class="contactForm">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input name="name" type="text" class="form-control" placeholder="Your Name" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <input name="email" type="email" class="form-control" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <input name="subject" type="text" class="form-control" placeholder="Subject" required/>
                            </div>
                            <div class="form-group">
                                <textarea name="message" class="form-control" rows="6" placeholder="Message" required></textarea>
                            </div>
                            <div><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Section end -->

        <!-- Footer Start -->
            <?php include("includes/footer.php"); ?>
        <!-- #footer end -->

        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->

        <!-- JavaScript Libraries -->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/jquery/jquery-migrate.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/easing/easing.min.js"></script>
        <script src="vendor/superfish/hoverIntent.js"></script>
        <script src="vendor/superfish/superfish.min.js"></script>
        <script src="vendor/waypoints/waypoints.min.js"></script>
        <script src="vendor/owlcarousel/owl.carousel.min.js"></script>
        <script src="vendor/touchSwipe/jquery.touchSwipe.min.js"></script>

        <!-- Main Javascript File -->
        <script src="js/main.js"></script>

    </body>
</html>
