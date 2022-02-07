function solve() {

    let buttonOnScreen = document.querySelector('#add-new button');
    let movieList = document.querySelector('ul');
    let archive = document.querySelector('#archive ul');
    let buttonClear = document.querySelector('#archive button');


    buttonOnScreen.addEventListener('click', (event) => {
        event.preventDefault();
        let details = document.querySelectorAll('#container input');
        let movie = details[0].value;
        details[0].value = '';
        let hall = details[1].value;
        details[1].value = '';
        let ticketPrice = details[2].value;
        details[2].value = '';

        if (movie.trim() == '' && hall.trim() == '' && ticketPrice.trim() == '') {
            return
        }

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = movie;
        console.log(span);
        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;

        li.appendChild(span);
        li.appendChild(strong);
        let div = document.createElement('div');
        let strong2 = document.createElement('strong');

        strong2.textContent = `${Number(ticketPrice).toFixed(2)}`;

        div.appendChild(strong2);
        let input = document.createElement('input');

        input.setAttribute('placeholder', 'Tickets Sold');
        div.appendChild(input);
        let buttonElement = document.createElement('button');
        buttonElement.textContent = "Archive";

        buttonElement.addEventListener('click', (event) => {
            let div = event.target.parentElement;
            let ticketNumber = div.querySelector('input').value;
            div.querySelector('input').value = '';
            let totalPrice = 0;
            if (ticketNumber == '') {
                return;
            }

            totalPrice = Number(ticketNumber) * Number(div.querySelector('strong').textContent);
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            let strong = document.createElement('strong');
            newSpan.textContent = (div.parentElement.querySelector('span')).textContent;
            strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
            newLi.appendChild(newSpan);
            newLi.appendChild(strong);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (event) => {
                event.target.parentElement.remove();
            })
            newLi.appendChild(deleteButton);
            archive.appendChild(newLi);
        })
        div.appendChild(buttonElement);
        li.appendChild(div);
        movieList.appendChild(li);

        buttonClear.addEventListener('click', () => {
            archive.childNodes.forEach((node) => node.remove());
        })
    })
}