function Start() {
    let griglia=document.getElementById("tabella");
    griglia.innerHTML="";

    let output=document.getElementById("output");
    output.innerHTML="";

    let num=ArrayNumeri();

    CreaTabella(num, griglia);

    CreaInput(output);

}

function ArrayNumeri() {
    let numeri=[];
    let rand=0;

    for (let i=1; i<=90; i++) {
        rand=Math.floor(Math.random()*90)+1;
        for (let j=0; j<numeri.length; j++) {
            if (rand==numeri[l]) {
                rand=parseInt(Math.floor(Math.random()*90)+1);
            }
            else {}
        }
    }
    return numeri;
}

function CreaTabella(num, griglia) {
    let tabella=[];
    let righe;
    let c=0;

    for (let i=0; i<9; i++) {
        tabella[i]=[];
        righe = document.createElement("tr");
        griglia.appendChild(righe);
        for (let j=0; j<10; j++) {
            tabella[i][j]=document.createElement("td");
            tabella[i][j].className="celle";
            tabella[i][j].textContent=`${num[c]}`;
            griglia.appendChild(tabella[i][j]);
            c++;
        }
    }
    return tabella;
}

function CreaInput(output) {
    let input=document.createElement("input");
    input.type="number";
    input.id="numero";
    input.min="1";
    input.max="90";
    input.placeholder="Es.: 45";
    output.appendChild(input);

    let button=document.createElement("button");
    button.textContent="Invia numero";
    button.onclick="ControlloNumerico()";
    output.appendChild(button);

    return;
}