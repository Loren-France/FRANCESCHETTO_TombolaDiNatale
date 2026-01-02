let stessaRiga=[];
let estratti=[];
let flag;
let ambo=false;
let terna=false;
let quaterna=false;
let cinquina=false;
let tombola=false;
let fine=false;
let punti=0;


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
    let trovato;
    let number = document.getElementById("numero").value;
    let caratt;
    let count=0;
    let counter2=0;

    if (isNaN(number)) {
        document.getElementById("feedback").innerHTML="Errore,inserire un numero valido della tombola, per favore reinserire";
        return;
    }
    else{
        number=parseInt(number);

        for (let k=0; k<6; k++) {

            counter2=0;

        for (let i=0; i<3; i++) {


        let colore=[];
        count=0;
        flag=-1;

        for (let j=0; j<5; j++) {

        caratt = document.getElementById(`cella-${k}-${i}-${j}`);


        if (number == parseInt(caratt.textContent)) {
            caratt.style.backgroundColor = "red";
            caratt.style.color = "white";
            estratti.push(number);
        }
        else{}

        trovato=false;

        for (let n=0; n<estratti.length; n++) {
            if (parseInt(caratt.textContent) == estratti[n]) {
                trovato=true;
                break;
            }
        }
        if (trovato) {
            count++;
            counter2++;
            colore.push(tabella[k][i][j]);
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
        punti+=2;
        document.getElementById("feedback").innerHTML = "AMBO!" + "<br>" + "Punti totali: " + punti;
        stessaRiga.push(`${k},${i}`);
        for (let m=0; m<colore.length; m++) {
            colore[m].style.backgroundColor="green";
        }
    }
    else if (count == 3 && !terna && flag==-1) {
        terna = true;
        punti+=3;
        document.getElementById("feedback").innerHTML = "TERNA!" + "<br>" + "Punti totali: " + punti;
        stessaRiga.push(`${k},${i}`);
        for (let m=0; m<colore.length; m++) {
            colore[m].style.backgroundColor="purple";
        }
    }
    else if (count == 4 && !quaterna && flag==-1) {
        quaterna = true;
        punti+=4;
        document.getElementById("feedback").innerHTML = "QUATERNA!" + "<br>" + "Punti totali: " + punti;
        stessaRiga.push(`${k},${i}`);
        for (let m=0; m<colore.length; m++) {
            colore[m].style.backgroundColor="brown";
        }
    }
    else if (count == 5 && !cinquina && flag==-1 && !fine) {
        cinquina = true;
        punti+=5;
        document.getElementById("feedback").innerHTML = "CINQUINA!" + "<br>" + "Punti totali: " + punti;
        stessaRiga.push(`${k},${i}`);
        for (let m=0; m<colore.length; m++) {
            colore[m].style.backgroundColor="blue";
        }
    }
    else if (counter2 == 15 && !tombola) {
        tombola = true;
        punti+=6;
        document.getElementById("feedback").innerHTML = "TOMBOLA!" + "<br>" + "Punti totali: " + punti;
        stessaRiga.push(`${k},${i}`);
        fine=true;
        for (let r=0; r<3; r++) {
            for (let c=0; c<5; c++) {
                tabella[k][r][c].style.backgroundColor = "orange";
            }
        }

    }
    else {
    }
    }
    }
    }
    return feedback;
}
