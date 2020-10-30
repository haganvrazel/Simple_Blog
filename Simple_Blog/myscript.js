function newElement() {
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    p.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(p);
    }
    document.getElementById("myInput").value = "";
    p.appendChild(hr);
    
}