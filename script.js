const slider = document.getElementById("battery-slider");
const level = document.getElementById("battery-level");
const text = document.getElementById("percentage-text");
const batteryCase = document.querySelector(".battery-case");

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  text.innerText = value + "%";

  // Update lebar baterai lewat CSS Variable
  document.documentElement.style.setProperty("--battery-width", value + "%");

  // Logika Warna & Getar
  if (value > 50) {
    document.documentElement.style.setProperty("--battery-color", "#10b981"); // Hijau
    batteryCase.classList.remove("critical-shake");
  } else if (value <= 50 && value > 20) {
    document.documentElement.style.setProperty("--battery-color", "#f59e0b"); // Oranye
    batteryCase.classList.remove("critical-shake");
  } else {
    document.documentElement.style.setProperty("--battery-color", "#ef4444"); // Merah
    batteryCase.classList.add("critical-shake"); // Mulai Bergetar!
  }
});
