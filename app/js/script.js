// Form functionality goes here
$(function() {

    MktoForms2.whenReady(function(form) {
        // Setting the value of the First Name, Last Name and Email fields
        form.vals({ "FirstName": "Laura", "LastName": "Simion", "Email": "laura.simion2015@gmail.com" });
    });


    //displaying the h2 element (display is set as "none" by default in the _globals.sass file)
    function displayTitle() {
        $("#second_title").toggle();
    }
    displayTitle();

});