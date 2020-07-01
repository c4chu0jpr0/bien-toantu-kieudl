function tinhtoan() {
var amount=document.getElementById("amount").value;
var quocgia1=document.getElementById("quocgia1").value;
var quocgia2=document.getElementById("quocgia2").value;
var result=convert(amount,quocgia1,quocgia2);
    document.getElementById('MEssagediv').innerHTML=result;
}
function convert(amount,quocgia1,quocgia2) {
    if (quocgia1 == quocgia2){
        result=amount;
    }
    if (quocgia1=="VN" && quocgia2=="USD"){
        result= amount*23000;
    }
    if (quocgia1=="USD" && quocgia2=="VN"){
        result = amount / 23000;
    }
    return result
}

