$(document).ready(function () {

    // $(".submit").on("click", function (event) {
        // event.preventDefault()

        var initialBreweryURL = "https://api.openbrewerydb.org/breweries?by_city={cityname}&by_state={state}";
        var city = "minneapolis";
        var state = "Minnesota";

        var cityBreweryURL = initialBreweryURL.replace("{cityname}", city);
        var stateBreweryURL = cityBreweryURL.replace("{state}",state);
        
        var breweryURL = stateBreweryURL;

        console.log(breweryURL);

        // ajax for zomato
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=minneapolis&entity_type=city&q=burgers",
            dataType: 'json',
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('user-key',
                    'd88928eafacfec3391be0d039bd9daa4');
            },
        }).then(function (response) {
            console.log(response);
        });
    };

        
// ajax for brewery
    $.ajax({
        url: breweryURL,
        method: "GET"
    }).then(function(response){
        // var theResult = response;
        // console.log(theResult);
    });
});
    });
