
function myButton(){
    let x = document.getElementById('colour').value;
    document.getElementById('holder').innerHTML = x
    var y = document.getElementById('nav');
    y.style["background-color"]= x;

}

