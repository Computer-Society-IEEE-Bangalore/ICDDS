<link href="css/style.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script type="text/javascript">
  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
  </script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  .dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
  </style>
<!-- Header Start -->
 <header id="header">
        <div class="container-fluid">
            <div id="logo" class="pull-left">
                <!-- Uncomment below if you prefer to use text logo -->
                <h2><a href="/" class="scrollto">ICDDS</a></h2> 
                <!-- <a href="/">ICDDS <img src="img/logo.png" alt="Logo" /></a> -->
            </div>
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li class="menu-active"><a href="index.php">Home</a></li>
                    <!-- <li><a href="about.php">About</a></li> -->
                    <li><a href="#">Committee</a>

                    <ul class="nav-dropdown">
            <li><a href="Organizing-Committee.php">Organizing Committee</a></li>
            <li><a href="Program-Committee.php">Program Committee</a></li>
            
          </ul>
</li>

                    <li><a href="agenda.php">Agenda</a></li>

                    <li><a href="#">For Authors</a>
          <ul class="nav-dropdown">
            <li><a href="Foundational-Research-Track.php">Foundational Research Track</a></li>
            <li><a href="Data-Science-and-System-Research.php">Data Science and System Research</a></li>
            <li><a href="Data-Science-and-Applications-Track.php">Data Science and Applications Track</a></li>
          </ul>
        </li>

                    <li><a href="venue.php">Venue</a></li>
                    <!-- <li><a href="ticket.html">Tickets</a></li> -->
                    <li><a href="contact.php">Contact</a></li>
                    <!-- <li><a href="login.html">Login</a></li> -->
                </ul>
            </nav><!-- #nav-menu-container -->
        </div>
    </header>
    <!-- #header end -->