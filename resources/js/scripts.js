$(document).ready(function() {
   /*Navigation scroll*/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); 
    
    
    $('.js-need-website').click(function() {
        var content = 'Details of project: %0A%0A When do you need it:';
        generateEmail('I need a website', content)
        
    });
    
    $('.js-need-hire').click(function() {
        var content = 'Details of project: %0A%0AExpected budget: %0A%0ATimeline: %0A%0ARemarks:';
        generateEmail('Im looking for hire', content)
    });
     
    function generateEmail(subject, body) {
        var subject = subject;
        var email = 'mailto:juliusgutierrez@ymail.com?subject=' + subject + '&body=' +body;
        location.href = email;
    }
});