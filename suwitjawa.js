var tanya = true;

while (tanya) {
  // Menangkap pilihan player
  var p = prompt("Pilihan : gunting, batu, kertas");

  // Menangkap pilihan komputer
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "kertas";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "batu";
  }

  var hasil = "";
  // Menentukan rules
  if (p == comp) {
    hasil = "KAMU SERI!";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "KAMU MENANG!" : "KAMU KALAH!";
  } else if (p == "kertas") {
    hasil = comp == "batu" ? "KAMU MENANG!" : "KAMU KALAH!";
  } else if (p == "batu") {
    hasil = comp == "gunting" ? "KAMU MENANG!" : "KAMU KALAH!";
  } else {
    hasil = "SORRY... KEYWORD KAMU SALAH!!!";
  }

  // Tampilkan hasil
  alert("Kamu pilih : " + p + " dan Komputer pilih : " + comp + "\nHasilnya : " + hasil);

  tanya = confirm("Main lagi?");
}

alert("Terima kasih, sudah bermain!");
