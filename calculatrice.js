let result =document.getElementById('inputext');


let calculate = (number) => {
    result.value += number;
}

let Result = () => {

    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Entrez un resultat valide");
    }

}

function clear() {
    result.value = " ";
}

function del() {
    result.value = result.value.slice(0, -1);
}