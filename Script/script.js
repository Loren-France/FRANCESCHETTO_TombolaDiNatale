function generaTabella() {
    let tabella=[];
    let righe="";
    let griglia=document.getElementById("tabella");
    griglia.innerHTML="";
    let numeri=[];
    let rand=0;

    for (let k=1; k<=90; k++) {
        rand=Math.floor(Math.random()*90)+1;
        for (let l=0; l<numeri.length; l++) {
            if (rand==numeri[l]) {
                rand=Math.floor(Math.random()*90)+1;
            }
            else {}
        }
    }

    for (let i=0; i<9; i++) {
        tabella[i]=[];
        righe = document.createElement("tr");
        griglia.appendChild(righe);
        for (let j=0; j<10; j++) {
            tabella[i][j]=document.createElement("td");
            tabella[i][j].className="celle";
            tabella[i][j].textContent=`${numeri[i*10+j]}`;
            griglia.appendChild(tabella[i][j]);
        }
    }
}