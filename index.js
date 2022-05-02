// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit", masaiPremier);

function masaiPremier(){
    event.preventDefault();

    var masaiArr = JSON.parse(localStorage.getItem("schedule")) || [];

    var obj = {
        match_number : masaiForm.matchNum.value,
        team_A : masaiForm.teamA.value,
        team_B : masaiForm.teamB.value,
        match_date : masaiForm.date.value,
        match_venue : masaiForm.venue.value
    }
    masaiArr.push(obj);
    
    localStorage.setItem("schedule", JSON.stringify(masaiArr));
}
