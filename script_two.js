const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function takes text you type and finds all fruit names that match it. 
function search(str) {
    const inputValue = str.toLowerCase(); // convert string to lowercase
    return fruit.filter(fruitname => fruitname.toLowerCase().includes(inputValue));
}


// function to handle keyup events in the search field.
// when you type something, this function clears old suggestions and finds new ones based on what you typed.
function searchHandler(e) {
    const inputValue = e.target.value.trim(); // get trimmed input value.

    // clear prev suggestions
    suggestions.innerHTML = "";

    // check if input val is not empty
    if(inputValue) { // if there is input val
        // get filtered results
        const results = search(inputValue);
        // show new suggestions
        showSuggestions(results);
    }
}

// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');
// this function creates a lists of suggestion based on the matches and shows them below the search box. 
function showSuggestions(results) {
	// if there are no results, end function. 
	if(results.length === 0) {
		return;
	}
	// create li suggestion and append it to the ul suggestions list.
	results.forEach(res => {
		let li = document.createElement('li'); // create new <li> for each res in result. 
		li.textContent = res; // populate the li's text content with the res.
		suggestions.appendChild(li); // append new <li> with res in it to the suggestions dropdown <ul>
	});
}


// when you click a suggestion, this function puts the clicked fruit name onto the searchbox and clears suggestions. 
function useSuggestion(e) {
	if(e.target.tagName === 'LI') { // if li is clicked 
		input.value = e.target.textContent; // populate the value of the input with textContent of li clicked. 
	}

	// after suggestion is selected, empty suggestions. 
	suggestions.innerHTML = ""; 
}


// event listener for keyup events to the input field.
input.addEventListener('keyup', searchHandler);
// event listener for click events to the ssuggestions list. 
suggestions.addEventListener('click', useSuggestion);