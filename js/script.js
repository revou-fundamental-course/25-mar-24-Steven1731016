// Function to calculate BMI
function calculateBMI() {
    // Get form input values
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var height = parseInt(document.getElementById("height").value) / 100; // Convert height to meters
    var weight = parseInt(document.getElementById("weight").value);

    // Calculate BMI
    var bmi = weight / (height * height);
    var bmiResult = bmi.toFixed(2); // Round to 2 decimal places

    // Display BMI result
    document.getElementById("Results").innerText = bmiResult;

    // Determine BMI category and description
    var bmiCategory = "";
    var bmiDescription = "";
    var bmiGejala = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight \n Anda kekurangan berat badan";
        bmiGejala = "Berat badan rendah dapat menyebabkan berbagai masalah penyakit antara lain : \n Infertilitas, Anemia, Osteoporosis, Sistem Imun Lemah";
        bmiDescription = "Silakan pertimbangkan untuk berkonsultasi dengan penyedia layanan kesehatan untuk mendapatkan nasihat.";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Normal \n Selamat! Anda memiliki berat badan ideal";
        bmiGejala = " Good Job";
        bmiDescription = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan anda dan jaga berat badan anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik anda.";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Anda kelebihan berat badan";
        bmiGejala = "Anda berada dalam kategori berat berlebih. Beberapa penyakit yang berasal dari kegemukan antara lain : \n Diabetes, Hipertesi, Sakit Jantung, Osteoarthritis";
        bmiDescription = "Cara Terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi, Atau Silakan pertimbangkan untuk berkonsultasi dengan penyedia layanan kesehatan untuk mendapatkan nasihat.";
    } else {
        bmiCategory = "Anda Memiliki berat badan dalam kategori Obesitas";
        bmiGejala = " berat badan ketegori Obesitas bisa mengakibatkan penyakit beresiko tinggi antara lain : \n Diabetes, Hipertesi, Sakit Jantung, Osteoarthritis";
        bmiDescription = "Segera pertimbangkan dan mengunjungi dokter, untuk berkonsultasi dan melakukan pemeriksaan kesehatan";
    }

    // Display BMI category and description
    document.getElementById("bmi-categoryy").innerText = bmiCategory;
    document.getElementById("bmi-description").innerText = bmiDescription;
    document.getElementById("bmi-gejala").innerText = bmiGejala;
}

// Function to reset form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("Results").innerText = "00.00";
    document.getElementById("bmi-categoryy").innerText = "Kategori";
    document.getElementById("bmi-description").innerText = "Keterangan";
}
// Calculate BMI
// Event listeners for buttons
document.getElementById("calculate").addEventListener("click", calculateBMI);
document.getElementById("reset").addEventListener("click", resetForm);

// Generate PDF with BMI Results
var doc = new jsPDF();

function generatePDF() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = document.getElementById("Results").innerText;
    var bmiCategory = document.getElementById("bmi-categoryy").innerText;
    var bmiDescription = document.getElementById("bmi-description").innerText;

    doc.text(20, 20, "Nama: " + name);
    doc.text(20, 30, "Umur: " + age);
    doc.text(20, 40, "Tinggi: " + height + " cm");
    doc.text(20, 50, "Berat: " + weight + " kg");
    doc.text(20, 60, "BMI: " + bmi);
    doc.text(20, 70, "Kategori: " + bmiCategory);
    doc.text(20, 80, "Keterangan: " + bmiDescription);

    doc.save("BMI-Results.pdf");
}
//article
var A1 = "Kalkulator ini hanya boleh digunakan oleh orang dewasa (wanita hamil atau menyusui tidak boleh mengandalkan pembacaan BMI ini) dan tidak ada tindakan yang harus diambil berdasarkan nilainya selain berkonsultasi dengan orang yang memenuhi syarat seperti dokter.";
var A2 = "Kalkulator akan memberi Anda gambaran tentang perbandingan berat badan Anda dengan nilai umum. Indeks Massa Tubuh (atau BMI) dihitung sebagai berat badan Anda (dalam kilogram) dibagi dengan kuadrat tinggi badan Anda (dalam meter) atau BMI = Kg/M2.";