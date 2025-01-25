const form = document.getElementById('sweet-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = form.querySelector('input[type="radio"][name="choice"]:checked');

    if (selected) {
        if (selected.id === 'yes') {
            alert("You picked correctly");
        } else {
            alert("You are wrong they are gross.");
        }
    }
})