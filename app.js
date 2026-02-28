const STORE = "grimbrock_data";

let data = JSON.parse(localStorage.getItem(STORE)) || {
  macros:{},
  weight:[],
  training:[]
};

function save(){
 localStorage.setItem(STORE, JSON.stringify(data));
}

function saveMacros(){
 let p = Number(document.getElementById("p").value);
 let c = Number(document.getElementById("c").value);
 let f = Number(document.getElementById("f").value);

 let kcal = p*4 + c*4 + f*9;

 data.macros = {p,c,f,kcal};
 save();

 document.getElementById("kcal").innerText = "Kalorien: " + kcal;
}

function saveWeight(){
 let w = Number(document.getElementById("weight").value);
 data.weight.push({date:new Date(), value:w});
 save();
}

function calc1RM(){
 let w = Number(document.getElementById("tweight").value);
 let r = Number(document.getElementById("reps").value);

 let e1rm = w * (1 + r/30);
 data.training.push({date:new Date(), e1rm});
 save();

 document.getElementById("result").innerText = 
 "Geschätztes 1RM: " + e1rm.toFixed(1) + " kg";
}function calc1RM() {
  const weight = parseFloat(document.getElementById("weight").value);
  const reps = parseFloat(document.getElementById("reps").value);

  if (!weight || !reps) {
    document.getElementById("result").innerText = "Bitte Werte eingeben.";
    return;
  }

  const e1RM = weight * (1 + reps / 30);
  document.getElementById("result").innerText =
    "Geschätztes 1RM: " + e1RM.toFixed(1) + " kg";
}
