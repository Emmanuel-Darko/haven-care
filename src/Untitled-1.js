<!-- <script>
  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
      
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
</script> -->







<!-- <div class="w3-row-padding w3-section slideanim">
<div class="w3-col l3 m6 slideanim">
  <img src="images/hc-3.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A good companion to the aged">
</div>
<div class="w3-col l3 m6 slideanim">
  <img src="images/hc-4.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Nurse">
</div>
<div class="w3-col l3 m6 slideanim">
  <img src="images/hc-6.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Nurse">
</div>
<div class="w3-col l3 m6 slideanim">
  <img src="images/hc-5.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Poster">
</div>
</div>
</div> -->

<!-- End Page Content -->