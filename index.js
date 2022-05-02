// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit", masaiPremier);

function masaiPremier(){
    event.preventDefault();

    var masaiArr = JSON.parse(localStorage.getItem("schedule")) || [];

    var obj = {
        match_number : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        match_date : masaiForm.date.value,
        match_venue : masaiForm.venue.value
    }
    console.log(obj);
    masaiArr.push(obj);
    console.log(masaiArr);
    localStorage.setItem("schedule", JSON.stringify(masaiArr));
}
