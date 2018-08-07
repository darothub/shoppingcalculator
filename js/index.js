
let add = document.getElementById('add-btn');
let plus = document.getElementById('plus-btn');
let clear = document.getElementById('clr-btn');
let equal = document.getElementById('eql-btn');
let form = document.getElementById('form');


const Add =(e)=>{
    var item = document.getElementById('item').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var display = document.getElementById('display');
    var result = document.getElementById('result-num');
    if(item == "" && quantity == "" && price == ""){
        return false;
    }
    else if (typeof quantity !='number' && typeof price!='number'){
        alert("invalid input for quantity or price");
        return false;
    }       
    else{
        result.innerHTML += price;
        display.innerHTML += `<ul> <li> ${item}${'-'}${quantity}</li> </ul>`;
        form.reset();
    }
};
const Clear =()=>{
    form.reset();
    document.getElementById('display').innerHTML = null;
    document.getElementById('result-num').innerHTML = null;
}
const Plus = () =>{
    var display = document.getElementById('display').innerHTML;
    var result = document.getElementById('result-num').innerHTML;
    var price = document.getElementById('price').value;
    if(display == "" && result == "" && price == ""){
        return false;
    }
    else{
        var result = document.getElementById('result-num');
        result.innerHTML += '+';
    }
    
}
add.addEventListener('click', Add);
clear.addEventListener('click', Clear);
plus.addEventListener('click', Plus);