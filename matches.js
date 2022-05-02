// write js code here corresponding to matches.html

var masaiArr = JSON.parse(localStorage.getItem("schedule"));

masaiArr.forEach(function(el){
    var row = document.createElement("tr");

    var colm1 = document.createElement("td");
    colm1.innerText = el.match_number;

    var colm2 = document.createElement("td");
    colm2.innertext = el.teamA;

    var colm3 = document.createElement("td");
    colm3.innertext = el.teamB;

    var colm4 = document.createElement("td");
    colm4.innerText = el.match_date;

    var colm5 = document.createElement("td");
    colm5.innerText = el.match_venue;

    var colm6 = document.createElement("td");
    colm6.innerText = "Add as Favourites";
    colm6.style.color = "green";
    colm6.style.cursor = "pointer";
    colm6.addEventListener("click", addfavourites);

    var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

    function addfavourites(){
        event.preventDefault();

        var favouritesObj = {
            favouriteMatch : colm1.innerText,
            favouriteTeamA : colm2.innerText,
            favouriteTeamB : colm3.innerText,
            favouriteDate : colm4.innerText,
            favouriteVanue : colm5.innerText
        }
        favouritesArr.push(favouritesObj);
        localStorage.setItem("favourites", JSON.stringify(favouritesArr))
    }

    row.append(colm1, colm2, colm3, colm4, colm5, colm6);
    document.querySelector("tbody").append(row);
    console.log(masaiArr);
});