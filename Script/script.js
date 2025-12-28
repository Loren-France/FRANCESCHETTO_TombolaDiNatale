function Start() {
    let griglia=document.getElementById("tabella");
    griglia.innerHTML="";

    let output=document.getElementById("output");
    output.innerHTML="";

    let num=ArrayNumeri();

    CreaTabella(num, griglia);

    CreaInput(num, output);

    document.getElementById("errore").innerHTML="";
}

function ArrayNumeri() {
    let numeri=[];
    let rand=0;

    for (let i=0; i<90; i++) {
        rand=Math.floor(Math.random()*90)+1;
        for (let j=0; j<90; j++)
        while (rand==numeri[j]) {
            rand=Math.floor(Math.random()*90)+1;
            j=-1;
        }
        numeri[i]=rand;
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
            tabella[i][j].id=`cella-${c+1}`;
            tabella[i][j].textContent=`${num[c]}`;
            righe.appendChild(tabella[i][j]);
            c++;
        }
    }
    return tabella;
}

function CreaInput(num, output) {
    let input=document.createElement("input");
    input.type="number";
    input.id="numero";
    input.min="1";
    input.max="90";
    input.placeholder="Es.: 45";
    output.appendChild(input);

    let button=document.createElement("button");
    button.textContent="Invia numero";
    button.onclick= () => ControlloNumerico(num);
    output.appendChild(button);

    return;
}

function ControlloNumerico(num) {
    let errore="";
    let number = document.getElementById("numero").value;
    let caratt;

    if (isNaN(number)) {
        errore="Errore,inserire un numero valido della tombola, per favore reinserire";
        return errore;
    }
    else{
        number=parseInt(number);

        for (let i=0; i<90; i++) {
            caratt = document.getElementById(`cella-${i+1}`);
            if (number==num[i]) {
                caratt.style.backgroundColor="black";
                caratt.style.color="white";
            }
        }


        return errore;
    }
}