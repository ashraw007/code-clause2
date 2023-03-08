function valueConvert() {
    var value = document.getElementById("val").value;
    if(value>'a' && value<'z' || value>'A'&&value<'Z'){
       alert("Write Numeric Value");
       document.getElementById("val").value = '';
    }
    var convertInto = document.getElementById("convertor").value;
    if(convertInto == "km"){
        var km = value / 1000;
        document.getElementById("ans").value = km;
    }else if(convertInto == "cm"){
        var cm = value / 100;
        document.getElementById("ans").value = cm;
        debugger
    }else if(convertInto == "mm"){
        var mm = value * 1000;
        document.getElementById("ans").value = mm;
    }else if(convertInto == "mim"){
        var mim = value * 1000000;
        document.getElementById("ans").value = mim;
    }else {
        var nm = value * 1000000000;
        document.getElementById("ans").value = nm;
    }
}


function clearForm() {
    document.getElementById("val").value = '';
    document.getElementById("ans").value = '';
} 