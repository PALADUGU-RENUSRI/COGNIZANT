$(document).ready(function () {
  // Show and hide with fade
  $('#showEvent').click(function () {
    $('#eventCard').fadeIn();
  });

  $('#hideEvent').click(function () {
    $('#eventCard').fadeOut();
  });

  // Handle registration click
  $('#registerBtn').click(function () {
    $('#message').text('You are successfully registered for Jazz Night!');
  });
});
