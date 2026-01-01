let stessaRiga=[];
let flag;
let ambo=false;
let terna=false;
let quaterna=false;
let cinquina=false;
let tombola=false;


function Start() {
    let griglia=document.getElementById("tabella");
    griglia.innerHTML="";

    let output=document.getElementById("output");
    output.innerHTML="";

    let tabella=[];

    let num=ArrayNumeri();

    CreaTabella(num, griglia, tabella);

    CreaInput(output, tabella);

    document.getElementById("feedback").innerHTML="";
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

function CreaTabella(num, griglia, tabella) {
    let righe;
    let c=0;

    for (let i=0; i<9; i++) {
        tabella[i]=[];
        righe = document.createElement("tr");
        griglia.appendChild(righe);
        for (let j=0; j<10; j++) {
            tabella[i][j]=document.createElement("td");
            tabella[i][j].className="celle";
            tabella[i][j].id=`cella-${i}-${j}`;
            tabella[i][j].textContent=`${num[c]}`;
            righe.appendChild(tabella[i][j]);
            c++;
        }
    }
    return tabella;
}

function CreaInput(output, tabella) {
    let input=document.createElement("input");
    input.type="number";
    input.id="numero";
    input.min="1";
    input.max="90";
    input.placeholder="Es.: 45";
    output.appendChild(input);

    let button=document.createElement("button");
    button.textContent="Invia numero";
    button.onclick= () => ControlloNumerico(tabella);
    output.appendChild(button);

    return;
}

function ControlloNumerico(tabella) {
    let feedback="";
    let number = document.getElementById("numero").value;
    let caratt;

    if (isNaN(number)) {
        feedback="feedback,inserire un numero valido della tombola, per favore reinserire";
        return feedback;
    }
    else{
        number=parseInt(number);

        for (let i=0; i<9; i++) {

        let count=0;
        flag=-1;

        for (let j=0; j<10; j++) {

        caratt = document.getElementById(`cella-${i}-${j}`);

        if (number == parseInt(caratt.textContent)) {
            caratt.style.backgroundColor = "red";
            caratt.style.color = "white";
        }

        if (tabella[i][j].style.backgroundColor == "red") {
            count++;
        }
        }

    for (let k=0; k<stessaRiga.length; k++) {
        if (stessaRiga[k] == i) {
            flag = i;
            break;
        }
    }

    if (count == 2 && !ambo && flag==-1) {
        ambo = true;
        document.getElementById("feedback").innerHTML = "AMBO!";
        stessaRiga.push(i);
    }
    else if (count == 3 && !terna && flag==-1) {
        terna = true;
        document.getElementById("feedback").innerHTML = "TERNA!";
        stessaRiga.push(i);
    }
    else if (count == 4 && !quaterna && flag==-1) {
        quaterna = true;
        document.getElementById("feedback").innerHTML = "QUATERNA!";
        stessaRiga.push(i);
    }
    else if (count == 5 && !cinquina && flag==-1) {
        cinquina = true;
        document.getElementById("feedback").innerHTML = "CINQUINA!";
        stessaRiga.push(i);
    }
    else if (count == 10 && !tombola && flag==-1) {
        tombola = true;
        document.getElementById("feedback").innerHTML = "TOMBOLA!";
        stessaRiga.push(i);
    }
    else {
    }
    }
    }
    return feedback;
}