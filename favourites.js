// write js code here corresponding to favourites.html

var favouritesArr = JSON.parse(localStorage.getItem("favourites"));

favouritesArr.forEach(function(el){

    var row1 = document.createElement("tr");

    var col1 = document.createElement("td");
    col1.innerText = el.favouriteMatch;

    var col2 = document.createElement("td");
    col2.innertext = el.favouriteTeamA;

    var col3 = document.createElement("td");
    col3.innertext = el.favouriteTeamB;

    var col4 = document.createElement("td");
    col4.innerText = el.favouriteDate;

    var col5 = document.createElement("td");
    col5.innerText = el.favouriteVanue;

    var col6 = document.createElement("td");
    col6.innerText = "Delete";
    col6.style.color = "red";
    col6.style.cursor = "pointer";
    col6.addEventListener("click", deleteMatch);

    function deleteMatch(){
        event.target.parentNode.remove();
    }

    row1.append(col1, col2, col3, col4, col5, col6);
    document.querySelector("tbody").append(row1);
});
