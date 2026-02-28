const STORE = "grimbrock_data";

let data = JSON.parse(localStorage.getItem(STORE));

if (!data) {
  data = {
    macros: { p: 0, c: 0, f: 0, kcal: 0 },
    weight: [],
    training: []
  };
}

function save() {
  localStorage.setItem(STORE, JSON.stringify(data));
}

function saveMacros() {
  const p = Number(document.getElementById("p").value) || 0;
  const c = Number(document.getElementById("c").value) || 0;
  const f = Number(document.getElementById("f").value) || 0;

  const kcal = p * 4 + c * 4 + f * 9;

  data.macros = { p, c, f, kcal };
  save();

  document.getElementById("kcal").innerText = "Kalorien: " + kcal;
}

function saveWeight() {
  const w = Number(document.getElementById("weight").value);
  if (!w) return;

  data.weight.push({ date: new Date().toISOString(), value: w });
  save();
}

function calc1RM() {
  const w = Number(document.getElementById("tweight").value);
  const r = Number(document.getElementById("reps").value);

  if (!w || !r) return;

  const e1rm = w * (1 + r / 30);

  data.training.push({ date: new Date().toISOString(), e1rm });
  save();

  document.getElementById("result").innerText =
    "Geschätztes 1RM: " + e1rm.toFixed(1) + " kg";
}
