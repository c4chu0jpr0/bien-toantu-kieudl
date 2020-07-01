function Addition() {
    var a=document.getElementById('text1').value;
    var b=document.getElementById('text2').value;
    a=parseInt(a);
    b=parseInt(b);
    c=a+b;
    document.getElementById('tinh').innerHTML='Addition:' +c;
}
function Subtraction() {
    var a=document.getElementById('text1').value;
    var b=document.getElementById('text2').value;
    a=parseInt(a);
    b=parseInt(b);
    x=a-b;
    document.getElementById('tinh').innerHTML='Subtraction:' +x;
}
function Multiplication() {
    var a=document.getElementById('text1').value;
    var b=document.getElementById('text2').value;
    a=parseInt(a);
    b=parseInt(b);
    y=a*b;
    document.getElementById('tinh').innerHTML='Multiplication:' +y;
}
function Division() {
    var a=document.getElementById('text1').value;
    var b=document.getElementById('text2').value;
    a=parseInt(a);
    b=parseInt(b);
    z=a/b;
    document.getElementById('tinh').innerHTML='Division:' +z;
}