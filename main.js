let list = [null,null,null,null,null];
let number;
let range = 100;
async function number_generator(){
    number = Math.floor(Math.random() * range) + 1;
    for (i = 0; i <= number; i++){
        document.getElementById("number-generator").innerText = i;
        await new Promise(r => setTimeout(r, 10));

        if (i === number){
            document.getElementById("number-generator").innerText = number;
        }
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generate_list(){
    delete_list();
    list.forEach((item, index) => {
        // Maak een nieuw LI element aan
        const li = document.createElement('li');

        // Stel de tekst van het LI element in op de index
        li.textContent = item;

        // Voeg het LI element toe aan de OL
        document.getElementById("list").appendChild(li);
    });
}

function place_number(value){
    if (list[value] != null){

    }
    list[value - 1] =  number;

    sorted = true;

    //TODO: Controleren of de array nog sorted is.

    for (i = 0; i < list.length; i++) {
        if (list[i] > list[i + 1] && list[i] !== null && list[i + 1 ] != null) {
            sorted = false;
            list[value-1] = null;
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = list[i] + " is niet groter dan " + list[i + 1];
        }
    }
    generate_list();
    // document.getElementById(value + "-list").innerText = number;
}

function delete_list(){
    let e = document.querySelector("ol");

    //e.firstElementChild can be used.
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}