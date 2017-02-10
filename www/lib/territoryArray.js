function Territory(red, green, blue, strength, value, LatLng) {
            
    this.red = red; 
    this.green = green;
    this.blue = blue;
    this.strength = strength;
    this.value = value;
    this.LatLng = LatLng;
}

function myMap() {
                        
    myLatLng = {lat: 46.5, lng: -84.3};
                        
    var territories = localStorage.getItem("nearby");
    territories = JSON.parse(territories);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });
                        
    var i;
    for(i=0; i<territories.length; i++){
                    
        var marker = new google.maps.Marker({
        position: territories[i].LatLng,
        map: map,
        title: 'Hello World!'
        });
    }
}

function clearExpiredTerritory(){
    //pull from server
    //pull from local
}

function addNewTerritory(Territory){
    //write to server
    //write to local
}

function getTerritoryArray(){
    //read from server
    //write to local
}

function fakeTerritories(){

    var territories = [
    new Territory(128, 34, 59, 5, 20, {lat: 46.5, lng: -84.3}),
    new Territory(128, 34, 59, 5, 20, {lat: 46.4, lng: -84.4}),
    new Territory(128, 34, 59, 5, 20, {lat: 46.5, lng: -84.5}),
    new Territory(128, 34, 59, 5, 20, {lat: 46.4, lng: -84.25}),
    new Territory(128, 34, 59, 5, 20, {lat: 46.6, lng: -84.35}),
    new Territory(128, 34, 59, 5, 20, {lat: 46.45, lng: -84.325}),
    ];
    
    localStorage.setItem("nearby", JSON.stringify(territories));
}