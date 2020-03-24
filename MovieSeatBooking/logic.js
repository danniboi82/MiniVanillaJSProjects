let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//Save Selected movie index/price
function setMovieData(index, price) {
    localStorage.setItem('selectedMovieIndex', index);
    localStorage.setItem('selectedMoviePrice', price);
}

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //Copy selectedSeats to array => map thru array => return new array of indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsTotal = selectedSeats.length;
    count.innerText = selectedSeatsTotal;
    total.innerText = selectedSeatsTotal * ticketPrice;
}

//Movie select event
movieSelect.addEventListener('change', (e) => {
    console.log(e.target.selectedIndex, e.target.value);
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});


//Seat click event
container.addEventListener('click', (e) => {

    if (e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
})