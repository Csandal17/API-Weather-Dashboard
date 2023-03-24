
const weatherAPIURL = "https://api.openweathermap.org";
const weatherAPIKey = "0ef3e776f233b1d22295acf8ce5352b5";
let searchInput = $("#search-input")
let searchForm = $("search-form");

function fetchCoord(){
    let queryURL = 
}

function submitSearchForm(event){

    event.preventDefault();
    let search = (searchInput.val().trim())

    fetchCoord(search);

}


searchForm.on("submit", submitSearchForm);






