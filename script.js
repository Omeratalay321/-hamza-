// Python'daki sayaçlar gibi, başlangıç oylarını 0 yapıyoruz
let ronaldoOylar = 0;
let messiOylar = 0;

// Python'daki if-elif mantığını kullanarak oyları artırıyoruz
function oyKullan(oyuncu) {
    if (oyuncu === 'ronaldo') {
        ronaldoOylar += 1; // Ronaldo oyunu 1 artır
        document.getElementById('ronaldo-oy').innerText = ronaldoOylar; // Sayıyı ekranda güncelle
    } else if (oyuncu === 'messi') {
        messiOylar += 1; // Messi oyunu 1 artır
        document.getElementById('messi-oy').innerText = messiOylar; // Sayıyı ekranda güncelle
    }
}
