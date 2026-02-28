function calc1RM() {
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
