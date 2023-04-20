function get(valor){
    document.getElementById('displayid').innerHTML += valor
}

document.getElementById('clear').onclick = function() {
    document.getElementById('displayid').innerHTML = "";
}

document.getElementById('result').onclick = function() {
    let calc = document.getElementById('displayid').innerHTML;

    document.getElementById('displayid').innerHTML = eval(calc);
}
