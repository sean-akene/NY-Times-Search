var apiKey = "vTaardkFwNH51VGKGPuS35v7owZ3FNix";

function searchArticles(query, numberOfRecords, startYear = "", endYear = "") {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "api-key=" + apiKey + "&"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


    });
}

function defaultValues() {
    $('#endyear').val('');
    $('#startyear').val('');
    $('#searchterm').val('');
    $('#select-number').val('5');
}

$("#clear-btn").on("click", function () {
    defaultValues();
});


$('#search-btn').on("click", function () {
    var searchTerm = $('#searchterm').val();
    var startYear = parseInt($('#startyear').val());
    var endYear = parseInt($('#endyear').val());
    var numOfRecords = $("#select-number").val();
    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);
    console.log(numOfRecords);

});