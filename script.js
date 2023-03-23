$(document).ready(function() {
    let categories; // Define the categories variable outside the ajax function
    let percentageScore; // Define percentageScore as a global variable
    let wrongAnswers = []; // Define an array to store the questions the user got wrong
  
    // Load the quiz categories on the page
    $.ajax({
      url: "https://opentdb.com/api_category.php",
      method: "GET",
      success: function(response) {
        // Handle the response from the API
        categories = response.trivia_categories;
  
        // Add each category to the dropdown menu
        categories.forEach(function(category) {
          let option = $("<option>").attr("value", category.id).text(category.name);
          $("#category-select").append(option);
        });
      },
 // Add an event listener to the category dropdown menu
    $("#category-select").on("change", function() {
      // Get the selected category ID
      categoryId = $(this).val();
