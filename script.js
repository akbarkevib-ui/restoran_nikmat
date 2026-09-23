const jumlahInput = document.querySelectorAll(".jumlah");

jumlahInput.forEach(function(input) {
    input.addEventListener("input", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    let jumlah = 0;

    jumlahInput.forEach(function(input) {
        let banyak = parseInt(input.value) || 0;
        let harga = parseFloat(input.dataset.price);

        jumlah += banyak;
        total += banyak * harga;
    });

    document.getElementById("jumlahPesanan").textContent = jumlah;
    document.getElementById("totalHarga").textContent = total.toFixed(2);
}

function pesanWhatsApp() {
    let pesan = "Halo Restoran Nikmat Rasa,%0A";
    pesan += "Saya ingin memesan:%0A%0A";

    let adaPesanan = false;

    jumlahInput.forEach(function(input) {
        let banyak = parseInt(input.value) || 0;

        if (banyak > 0) {
            adaPesanan = true;

            let nama = input.dataset.name;
            let harga = parseFloat(input.dataset.price);
            let subtotal = banyak * harga;

            pesan += nama + " x " + banyak;
            pesan += " = $" + subtotal.toFixed(2);
            pesan += "%0A";
        }
    });

    if (!adaPesanan) {
        alert("Silakan pilih menu dan jumlah pesanan terlebih dahulu.");
        return;
    }

    let total = document.getElementById("totalHarga").textContent;

    pesan += "%0ATotal Harga: $" + total;
    pesan += "%0A%0ATerima kasih.";

    window.open(
        "https://wa.me/628557235383?text=" + pesan,
        "_blank"
    );
}