function toggleOut() {

    $(document).ready(function() {
      $('#expand-ico, #expand-txt').stop();
      console.log("mouse in")
      $('#expand-ico, #expand-txt').fadeOut('fast');

      $('.side-menu-bar').addClass('side-menu-bar-expand');
      $('#nav, .menu-item').addClass('unhide');
    })
  }

  function toggleIn() {
    $(document).ready(function() {
      $('#expand-ico, #expand-txt').stop();

      console.log("mouse out")
      $('#nav, .menu-item').removeClass('unhide');
      $('.side-menu-bar').removeClass('side-menu-bar-expand');
      $('#expand-ico, #expand-txt').fadeIn('slow');

      //setTimeout(function(){
      document.getElementById('test').scrollTop = -100;

      //}, 500)

    })
  }