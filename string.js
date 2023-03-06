function rovid()
{
    var aha=document.getElementById("aha").value
    var ide=document.getElementById("ide")

    var txt = aha.length
    ide.innerHTML=txt+" karakter."
}

function nevek()
{
    var nev1=document.getElementById("nev1").value
    var nev2=document.getElementById("nev2").value

    const name=nev1+" "+nev2
    alert(name)
}

function kicsi()
{
    var kicsike=document.getElementById("kicsike").value
    var haha=document.getElementById("haha")

    var kicsinyito = kicsike.toLowerCase();

    haha.innerHTML=kicsinyito
}

const oda=document.getElementById("hihi")

function nagy()
{
    let input1 = document.getElementById("szo").value;
    oda.innerHTML=input1.toUpperCase()

    if(input1="")
    {
        alert("Nem írt be semmit!")
    }
}

function kis()
{
    let input2 = document.getElementById("szo").value;
    oda.innerHTML=input2.toLowerCase()

    if(input2="")
    {
        alert("Nem írt be semmit!")
    }
}

function visszafele()
{
    var vissza=document.getElementById("vissza").value
    var hehe=document.getElementById("hehe")

    var newString="" 

    for (let i = vissza.length - 1; i >= 0; i--) 
    {
        newString += vissza[i];
    }

    hehe.innerHTML=newString
}

function har30()
{
    var harminc=document.getElementById("harminc").value
    var keres=document.getElementById("keres").value

    if(harminc.includes(keres))
    {
        alert("Szerepel az adott szó a keresett szövegben!")
    }
    else
    {
        alert("A megadott szó nem szerepel a szövegben!")
    }
}

function text()
{
    var szoveg=document.getElementById("szoveg").value
    var ahha=document.getElementById("ahha")

    let count = (szoveg.match(/ /g) || []).length
    ahha.innerHTML=count
}

function ASCII()
{
    var ascii=document.getElementById("ascii").value
    var ehe=document.getElementById("ehe")

    for(let i = 0; i < ascii.length; i++)
    {
        var atalakit = ascii.charCodeAt(i);
    }

    ehe.innerHTML=atalakit
}