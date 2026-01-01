let stessaRiga=[];
let flag;
let ambo=false;
let terna=false;
let quaterna=false;
let cinquina=false;
let tombola=false;
let fine=false;


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
    let tab;
    let cartella;
    let c=0;

    tab = document.createElement("table");
    griglia.appendChild(tab);

    for (let k=0; k<6; k++) {
        tabella[k]=[];
        if (k%3==0) {
            cartella=document.createElement("td");
            tab.appendChild(cartella);
        }
    for (let i=0; i<3; i++) {
        tabella[k][i]=[];
        righe = document.createElement("tr");
        cartella.appendChild(righe);
        for (let j=0; j<5; j++) {
            tabella[k][i][j]=document.createElement("td");
            tabella[k][i][j].className="celle";
            tabella[k][i][j].id=`cella-${k}-${i}-${j}`;
            tabella[k][i][j].textContent=`${num[c]}`;
            righe.appendChild(tabella[k][i][j]);
            c++;
        }
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
    let count=0;
    let counter2=0;

    if (isNaN(number)) {
        feedback="feedback,inserire un numero valido della tombola, per favore reinserire";
        return feedback;
    }
    else{
        number=parseInt(number);

        for (let k=0; k<6; k++) {

            counter2=0;

        for (let i=0; i<3; i++) {

        count=0;
        flag=-1;

        for (let j=0; j<5; j++) {

        caratt = document.getElementById(`cella-${k}-${i}-${j}`);

        if (number == parseInt(caratt.textContent)) {
            caratt.style.backgroundColor = "red";
            caratt.style.color = "white";
        }
        else{}

        if (tabella[k][i][j].style.backgroundColor == "red") {
            count++;
            counter2++;
        }
        else{}
        }

    for (let l=0; l<stessaRiga.length; l++) {
        if (stessaRiga[l] == `${k},${i}`) {
            flag = 1;
            break;
        }
    }

    if (count == 2 && !ambo && flag==-1) {
        ambo = true;
        document.getElementById("feedback").innerHTML = "AMBO!";
        stessaRiga.push(`${k},${i}`);
    }
    else if (count == 3 && !terna && flag==-1) {
        terna = true;
        document.getElementById("feedback").innerHTML = "TERNA!";
        stessaRiga.push(`${k},${i}`);
    }
    else if (count == 4 && !quaterna && flag==-1) {
        quaterna = true;
        document.getElementById("feedback").innerHTML = "QUATERNA!";
        stessaRiga.push(`${k},${i}`);
    }
    else if (count == 5 && !cinquina && flag==-1 && !fine) {
        cinquina = true;
        document.getElementById("feedback").innerHTML = "CINQUINA!";
        stessaRiga.push(`${k},${i}`);
    }
    else if (counter2 == 15 && !tombola) {
        tombola = true;
        document.getElementById("feedback").innerHTML = "TOMBOLA!";
        stessaRiga.push(`${k},${i}`);
        fine=true;
    }
    else {
    }
    }
    }
    }
    return feedback;
}