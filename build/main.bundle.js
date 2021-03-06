'use strict';

var getBeersAPI = function getBeersAPI() {
    return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var beers = response;
        var result = "";
        
       
        

        document.getElementById('result').innerHTML = result;
    });
};

var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name + 
                      "<br> <b>Tagline : </b>" + beers[i].tagline + 
                     
                      "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + 
                      "<br> <b>First Brewed : </b>" + beers[i].first_brewed + 
                      
                      "<br>" + 
                      "<image src =" + beers[i].image_url + " /><hr>";
        }
        
        
        document.getElementById('result').innerHTML = result;
    });
};

getBeersAPI();

var toSearch = function toSearch(name) {
    if (name != "") {
        getBeerAPIByName(name);
    } else {
        var result = "No result";
        document.getElementById('result').innerHTML = result;
    }
};
