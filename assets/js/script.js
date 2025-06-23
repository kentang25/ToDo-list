$(document).ready(function(){
    $('#btn-todo').click(function(){
        $('#to_do').toggleClass('d-none');
    });

    $('#btn-work').click(function(){
        $('#work').toggleClass('d-none');
    });

    $('#btn-goals').click(function(){
        $('#goals').toggleClass('d-none');
    });

    $('#red1').click(function(){
        $('#to_do').css('background-color', 'red');
    });

    $('#yellow1').click(function(){
        $('#to_do').css('background-color', 'yellow');
    });

    $('#blue1').click(function(){
        $('#to_do').css('background-color', 'blue');
    });

    // work
    $('#red2').click(function(){
        $('#work').css('background-color', 'red');
    });

    $('#yellow2').click(function(){
        $('#work').css('background-color', 'yellow');
    });

    $('#blue2').click(function(){
        $('#work').css('background-color', 'blue');
    });

    // goals

    $('#red3').click(function(){
        $('#goals').css('background-color', 'red');
    });

    $('#yellow3').click(function(){
        $('#goals').css('background-color', 'yellow');
    });

    $('#blue3').click(function(){
        $('#goals').css('background-color', 'blue');
    });
});

const inputText = document.getElementById('inputText');
const listText = document.getElementById('listTask');
// const days = document.getElementById('itemDays');

// // console.log(days);

// // setInterval(myTimer, 1000);

// // function myTimer() {
// //     const d = new Date();
// //     document.getElementById("date").innerHTML = d.toLocaleTimeString();
// // }


// listText.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);


function addTask() {


    // const newDays = days.value;
    const newTaks = inputText.value.trim();
    if (newTaks !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newTaks;
        listItem.classList.add('li_task');

        console.log(listItem);

        // console.log(listDays);
        // days.addEventListener('click', () => {

        // })

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });


        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.marginLeft = '10px';
        buttonDelete.addEventListener('click', (event) => {
            event.stopPropagation();
            listItem.remove();
        });




        listItem.appendChild(buttonDelete);

        listText.appendChild(listItem);

        inputText.value = '';
    }

    
}