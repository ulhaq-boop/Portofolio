// 1. Fungsi Menghitung Rata-Rata
const hitungRataRata = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};

// 2. Fungsi Menentujan Predikat Nilai
const predikatNilai = (nilai) => {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    }   else {
        return "E";
    }
};

// 3. Mengambil Elemen HTML
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const buttonHitung = document.querySelector("#hitung");
const outputRataRata = document.querySelector("#rata-rata");
const outputHasil = document.querySelector("#hasil");

// 4. Menjalankan Perhitungan Saat Tombol Diklik
buttonHitung.addEventListener("click", () => {
    const tugas = Number(inputTugas.value);
    const uts = Number(inputUts.value);
    const uas = Number(inputUas.value);

    if (
        inputTugas.value === "" ||
        inputUts.value === "" ||
        inputUas.value === ""
    ) {
        outputHasil.textContent = "Harap isi semua nilai!";
        return;
    }

    const rata = hitungRataRata(tugas, uts, uas);
    const grade = predikatNilai(rata);

    outputHasil.textContent = `Rata-Rata: ${rata.toFixed(1)}, Predikat: ${grade}`;
});