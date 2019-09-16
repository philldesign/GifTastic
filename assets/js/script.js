//javascript, jQuery

list = [];

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=qQ0LQq49j0vnEylR5TyfMMEiuCje5z0c&limit=5");
xhr.done(function (data) {
    console.log("success got data", data)
});

var title = "The%20Lord+Of+The+Rings";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=qQ0LQq49j0vnEylR5TyfMMEiuCje5z0c&limit=5";



function rendergifs(list) {
    $("#gif-list").empty(); // empties out the html

    // render our todos to the page
    for (var i = 0; i < list.length; i++) {
        // Then set the to-do "value" as text to this <p> element.
        var gifitem = $("<button>");
        gifitem.attr("data-gif", i);
        gifitem.addClass("load-gif");


        gifitem.text(list[i]);

        // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
        // Give your button a data attribute called data-to-do and a class called "checkbox".
        // Lastly add a checkmark inside.

        // Add the button and to do item to the to-dos div
        $("#gif-list").append(gifitem);
    }
}

$("#add-gif").on("click", function (event) {
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it as a variable
    var gifname = $("#gif").val().trim();

    // Adding our new todo to our local list variable and adding it to local storage
    list.push(gifname);

    // Update the todos on the page
    rendergifs(list);

    // Clear the textbox when done
    $("#gif").val("");
    rendergifs(list);

});

var title = "The%20Lord+Of+The+Rings";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=qQ0LQq49j0vnEylR5TyfMMEiuCje5z0c&limit=5";

    $(document).on("click", ".load-gif", function() {
        var gifnumber = $(this).attr("data-gif");
        console.log(gifnumber);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.Runtime);
            // $("#gif-list").text(response);
            // $("#gif-list").append(response);
            $("#gif-list").append($("<div> id= 'gifimg' "));
            
        

        });



    });

