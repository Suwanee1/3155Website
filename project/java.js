/* Javascript used to create the slideshow at the top of the index page */ 
setInterval(function() {
  $('#slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide');
}, 5000);

 /* Use of accordion function to better allow the user to view the data
    one section at a time */
$(function() {
  $("#accordion").accordion();
})

/* Enables a popup that tells the user to checkout the newest drops in the table
   letting them know if anything cool ir droppings, and then takes them to the page. */
var choice; 
    setTimeout(	function() {
      if (confirm("Do you want to see the latest drops? If so, click 'ok'!") == true) {
        window.location.href = "Drop.html";
      } 
      document.getElementById("msg").innerHTML = choice;
    }, 5000);

  
  