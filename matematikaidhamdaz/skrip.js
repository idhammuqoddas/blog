MathJax={
    loader: {load: ['[tex]/color','[tex]/cancel','[tex]/enclose']},
    tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']],
       packages: {'[+]': ['color','cancel','enclose']},
       macros: {
          degree: "{^\\circ}",
          dmn: "\\ \\middle\\vert\\ "
       }
    },
    options:{
       skipHtmlTags: ["script","noscript","style","textarea","pre","code"]
    }
};

function isinomor(awal){
   let soalke = document.getElementsByClassName("nomor");
   for(let i=0;i<soalke.length;i++){
      soalke[i].innerHTML = awal+i;
   }
}

//nama class untuk tipe
var idtipe=["standar","sbmptn","hots"];

//bentuk akar
var akar = [["/2022/04/exercise-zone-bentuk-akar.html","/2022/04/exercise-zone-bentuk-akar-2.html"],["/2022/04/sbmptn-zone-bentuk-akar.html"],["/2022/04/hots-zone-bentuk-akar.html"]];

//aljabar
var alj = [["/2020/03/exercise-zone-aljabar.html"],["/2020/10/sbmptn-zone-aljabar.html"],["/2020/03/olimpiade-zone-aljabar.html","/2020/03/olimpiade-zone-aljabar-2.html"]];

//asimtot kurva
var asim = [[],["/2017/05/asimtot-kurva-soal-dan-pembahasan.html"],["/2020/10/hots-zone-asimtot-kurva.html"]];

//Aturan Pencacahan
var atupen = [["/2022/04/exercise-zone-aturan-pencacahan.html"],[],[]];

//Aturan Sinus
var atus = [[""],[],[]];

//balok
var balok = [["/2022/04/exercise-zone-balok.html"],["/2022/04/sbmptn-zone-balok.html"],[]];

//barisan dan deret
var barder = [["/2022/04/exercise-zone-barisan-dan-deret_29.html"],["/2022/04/sbmptn-zone-barisan-dan-deret.html"],["/2022/04/hots-zone-barisan-dan-deret.html"]];

//barisan dan deret aritmetika
var BarDerArit = [["/2022/04/exercise-zone-barisan-dan-deret.html","/2022/04/exercise-zone-barisan-dan-deret_27.html","/2022/04/exercise-zone-barisan-dan-deret_2.html","/2022/04/exercise-zone-barisan-dan-deret_90.html","/2022/05/exercise-zone-barisan-dan-deret.html"],["/2022/04/sbmptn-zone-barisan-dan-deret-aritmetika.html"],["/2022/04/hots-zone-barisan-dan-deret-aritmetika.html"]];

//barisan dan deret geometri
var bardergeo = [["/2022/04/exercise-zone-barisan-dan-deret-geometri.html","/2022/04/exercise-zone-barisan-dan-deret_28.html"],["/2022/04/sbmptn-zone-barisan-dan-deret-geometri.html"],[]];

//bangun ruang sisi lengkung
var barusile = [["/2022/04/exercise-zone-bangun-ruang-sisi-lengkung.html"],[],[]];

//basis bilangan
var babil = [["/2020/08/exercise-zone-basis-bilangan.html"],[],["/2022/03/hots-zone-basis-bilangan.html"]];

//bilangan asli
var bilas = [[],[],["/2022/04/hots-zone-bilangan-asli-bilangan-bulat.html"]];

//bilangan bulat
var bilbul = [["/2022/04/exercise-zone-bilangan-bulat.html"],[],["/2022/04/hots-zone-bilangan-bulat.html"]];

//bilangan pecahan
var bilpec = [["/2022/04/exercise-zone-bilangan-pecahan.html"],[],["/2022/04/hots-zone-bilangan-pecahan.html"]];

//bilangan prima
var bilpri = [[],[],["/2018/09/bilangan-prima-soal-dan-pembahasan.html"]];

//deret geometri tak hingga
var dergeotahi = [["/2022/04/exercise-zone-deret-geometri-tak-hingga.html"],["/2022/04/sbmptn-zone-deret-geometri-tak-hingga.html"],[]];

//deret teleskopik
var dertel = [[],[],["/2018/10/deret-teleskopik-soal-dan-pembahasan.html"]];

//desil
var desil = [["/2022/05/exercise-zone-desil.html"],[],[]];

//determinan matriks
var deter = [["/2022/05/exercise-zone-determinan-matriks.html"],[],[]];

//diagram lingkaran 
var diagling = [["/2022/05/exercise-zone-diagram-lingkaran.html"],[],[]];

//dilatasi
var dilat = [["/2022/05/exercise-zone-dilatasi.html"],[],[]];

//faktorial
var fakt = [["/2022/05/exercise-zone-faktorial.html"],[],["/2021/01/hots-zone-faktorial.html"]];

//frekuensi harapan
var frekhar = [["/2022/05/exercise-zone-frekuensi-harapan.html"],[],["/2022/05/hots-zone-frekuensi-harapan.html"]];

//fungsi
var fung = [["/2022/05/exercise-zone-fungsi.html","/2022/05/exercise-zone-fungsi-2.html"],["/2022/05/sbmptn-zone-fungsi.html","/2022/05/sbmptn-zone-fungsi-2.html"],["/2022/05/hots-zone-fungsi.html"]];

//fungsi komposisi
var fungkom = [["/2022/05/exercise-zone-fungsi-komposisi.html","/2022/05/exercise-zone-fungsi-komposisi-2.html"],["/2022/05/sbmptn-zone-fungsi-komposisi.html"],[]];

//fungsi naik dan turun
var fungnatu = [["/2022/05/exercise-zone-fungsi-naik-dan-turun.html"],[],[]];

//Garis singgung lingkaran
var gasingling = [["/2022/05/exercise-zone-garis-singgung-lingkaran.html"],["/2022/05/sbmptn-zone-garis-singgung-lingkaran.html"],[]];

//Geometri Bidang Datar
var geombida = [[],[],["/2022/11/hots-zone-geometri-bidang-datar.html"]];

//grafik fungsi trigonometri
var grafutri = [["/2020/09/exercise-zone-grafik-fungsi-trigonometri.html"],[],[]];

//himpunan
var himp = [["/2022/05/exercise-zone-himpunan.html"],[],["/2022/05/hots-zone-himpunan.html"]];

//hubungan garis dan lingkaran
var hubgarling = [["/2022/05/exercise-zone-hubungan-garis-dan.html"],[],[]];

//induksi matematika
var indma = [["/2022/05/exercise-zone-induksi-matematika.html"],[],[]];

//invers matriks
var inmat = [["/2022/05/exercise-zone-invers-matriks.html"],[],[]];

//integral lipat
var intlipat = [["/2022/05/exercise-zone-integral-lipat.html"],[],[]];

//integral tak tentu
var inttat = [["/2022/05/exercise-zone-integral-tak-tentu.html"],[""],[]];

//integral tentu
var intten = [["/2020/03/exercise-zone-integral-tentu.html","/2020/03/exercise-zone-integral-tentu-2.html"],["/2020/03/sbmptn-zone-integral-tentu.html","/2020/03/sbmptn-zone-integral-tentu-2.html"],["/2020/03/olimpiade-zone-integral-tentu.html"]];

//integral trigonometri tak tentu
var inttritat = [[""],[],[]];

//invers fungsi
var invfung = [["/2020/03/exercise-zone-invers-fungsi.html"],["/2020/08/sbmptn-zone-invers-fungsi.html"],[]];

//kesebangunan
var keseb = [["/2021/01/exercise-zone-kesebangunan.html"],[],[]];

//kesebangunan pada segitiga
var kesebseg = [["/2021/02/exercise-zone-kesebangunan-pada-segitiga.html"],[],[]];

//koordinat kutub
var koorku = [["/2022/05/exercise-zone-koordinat-kutub.html"],[],[]];

//kuartil
var kuar = [[""],[],[]];

//kubus
var kubus = [["/2020/08/exercise-zone-kubus.html"],["/2020/08/sbmptn-zone-kubus.html"],[""]];

//laju perubahan
var laper = [["/2019/11/laju-perubahan-soal-dan-pembahasan.html"],[],[]];

//limas
var limas = [[""],[],[]];

//limit
var limit = [["/2022/10/exercise-zone-limit.html","/2022/10/exercise-zone-limit-2.html","/2022/05/exercise-zone-limit-3.html","/2022/05/exercise-zone-limit-4.html"],["/2022/11/sbmptn-zone-limit.html","/2020/03/sbmptn-zone-limit-2.html"],["/2020/02/olimpiade-zone-limit.html"]];

//limit tak hingga
var limtahi = [["/2022/10/exercise-zone-limit-tak-hingga.html","/2022/10/exercise-zone-limit-tak-hingga-2.html"],["/2022/10/sbmptn-zone-limit-tak-hingga.html"],["/2022/10/hots-zone-limit-tak-hingga.html"]];

//limit trigonometri 
var limtri = [["",""],["",""],[""]];

//lingkaran
var lingk = [["/2021/01/exercise-zone-lingkaran.html"],["/2020/09/sbmptn-zone-lingkaran.html"],["/2020/09/hots-zone-lingkaran.html"]];

//logaritma
var loga = [["/2022/06/exercise-zone-logaritma.html","/2020/02/exercise-zone-logaritma-2.html","/2022/05/exercise-zone-logaritma-3.html","/2022/05/exercise-zone-logaritma-4.html"],["/2020/02/sbmptn-zone-logaritma.html"],["/2020/10/hots-zone-logaritma.html"]];

//logika matematika
var logi = [["/2020/09/exercise%20zone%20logika%20matematika.html"],[],[]];

//luas daerah di bawah kurva
var luda = [["/2019/02/luas-daerah-di-bawah-kurva-soal-dan.html"],["/2020/10/sbmptn-zone-luas-daerah-di-bawah-kurva.html"],[]];

//matriks
var matr = [["/2020/09/exercise-zone-matriks.html","/2020/09/exercise-zone-matriks-2.html","/2020/10/exercise-zone-matriks-3.html","/2017/11/matriks-soal-dan-pembahasan.html","/2021/09/exercise-zone-matriks-5.html","/2022/05/exercise-zone-matriks-6.html"],["/2020/09/sbmptn-zone-matriks.html"],[]];

//makimum dan minimum
var maksmin = [["/2020/09/exercise-zone-maksimum-dan-minimum.html"],["/2020/09/sbmptn-zone-maksimum-dan-minimum.html"],["/2020/09/hots-zone-maksimum-dan-minimum.html"]];

//pangkat
var pangk = [["/2020/03/exercise-zone-pangkat-eksponen.html","/2022/05/exercise-zone-pangkat-eksponen-2.html","/2022/06/exercise-zone-pangkat-eksponen-3.html"],["/2022/06/sbmptn-zone-pangkat-eksponen.html"],["/2020/03/olimpiade-zone-pangkat-eksponen.html"]];

//panjang vektor
var panvek = [["/2020/03/exercise-zone-panjang-vektor.html"],[],[]];

//peluang
var peluang = [["/2020/09/exercise-zone-peluang.html","/2017/05/peluang-soal-dan-pembahasan.html"],["/2020/09/sbmptn-zone-peluang.html"],["/2020/09/hots-zone-peluang.html"]];

//peluang distribusi binomial
var peldistbin = [["/2021/01/exercise-zone-peluang-distribusi.html"],[],[]];

//perbandingan berbalik nilai
var perbberni = [["/2021/02/exercise-zone-perbandingan-berbanding.html"],[],[]];

//perbandingan senilai
var perbse = [["/2019/11/perbandingan-senilai-direct-proportion.html"],[],[]];

//permutasi dan kombinasi
var permukom = [["/2020/03/exercise-zone-permutasi-dan-kombinasi.html","/2020/09/exercise-zone-permutasi-dan-kombinasi-2.html"],["/2020/09/sbmptn-zone-permutasi-dan-kombinasi.html"],["/2020/10/hots-zone-permutasi-dan-kombinasi.html"]];

//persegi panjang
var perpan = [["/2018/11/persegi-panjang-soal-dan-pembahasan.html"],[],[]];

//persamaan
var persamaan = [["/2020/10/exercise-zone-persamaan.html"],[],["/2020/10/hots-zone-persamaan.html"]];

//persamaan bentuk akar
var persbenak = [["/2021/05/exercise-zone-persamaan-bentuk-akar.html"],[],["/2018/11/persamaan-bentuk-akar-soal-dan.html"]];

//persamaan diferensial
var persdif = [[""],[],[]];

//persegi
var persegi = [[],[],["/2017/12/persegi-soal-dan-pembahasan.html"]];

//persamaan eksponen
var persek = [["/2020/09/exercise-zone-persamaan-eksponen.html"],["/2020/03/sbmptn-zone-persamaan-eksponen.html"],["/2020/09/olimpiade-zone-persamaan-eksponen.html"]];

//persamaan garis normal
var persgano = [["/2019/11/persamaan-garis-normal-soal-dan.html"],[],[]];

//persamaan garis singgung
var persgasi = [["/2020/09/exercise-zone-persamaan-garis-singgung.html"],["/2020/03/sbmptn-zone-persamaan-garis-singgung.html"],["/2020/09/olimpiade-zone-persamaan-garis-singgung.html"]];

//persamaan kuadrat
var perskuad = [["/2020/07/exercise-zone-persamaan-kuadrat.html"],["/2020/07/sbmptn-zone-persamaan-kuadrat.html","/2020/07/sbmptn-zone-persamaan-kuadrat-2.html"],["/2020/07/olimpiade-zone-persamaan-kuadrat.html"]];

//persamaan lingkaran
var persling = [["/2020/03/exercise-zone-persamaan-lingkaran.html"],[],[]];

//persamaan trigonometri
var perstrig = [["/2020/08/exercise-zone-persamaan-trigonometri.html","/2020/08/exercise-zone-persamaan-trigonometri-2.html"],["/2020/08/sbmptn-zone-persamaan-trigonometri.html"],["/2020/08/olimpiade-zone-persamaan-trigonometri.html"]]

//pertidaksamaan bentuk akar
var pertbenak = [[],["/2018/10/pertidaksamaan-bentuk-akar-soal-dan.html"],[]]

//persamaan nilai mutlak satu variabel
var PNMSV= [["/2020/08/exercise-zone-persamaan-nilai-mutlak.html","/2021/01/exercise-zone-persamaan-nilai-mutlak.html","/2019/09/persamaan-nilai-mutlak-soal-dan.html"],[],[]];

//poligon (suku banyak)
var poli = [[],[],["/2019/05/poligon-segi-banyak-soal-dan-pembahasan.html"]];

//program linear
var prolin = [["/2018/03/program-linier-program-linear-soal-dan.html"],[],[]];

//\ertidaksamaan linear satu variabel
var PtLSV = [["/2020/10/exercise-zone-pertidaksamaan-linear.html"],[],[]];

//pertidaksamaan nilai mutlak satu variabel
var PtNMSV = [["/2020/03/exercise-zone-pertidaksamaan-nilai.html","/2020/09/exercise-zone-pertidaksamaan-nilai.html"],["/2020/03/sbmptn-zone-pertidaksamaan-nilai-mutlak.html"],[]];

//refleksi
var refl = [["/2020/08/exercise-zone-refleksi-pencerminan.html","/2022/05/exercise-zone-refleksi-pencerminan-2.html"],["/2020/09/sbmptn-zone-refleksi-pencerminan.html"],[]];

//rotasi
var rot = [["/2020/10/exercise-zone-rotasi.html"],[],[]];

//segitiga
var segitiga = [["/2020/09/exercise-zone-segitiga.html"],["/2020/09/sbmptn-zone-segitiga.html"],["/2020/09/hots-zone-segitiga.html"]];

//segitiga siku-siku
var segsik = [["/2017/06/segitiga-soal-dan-pembahasan.html"],[],[]];

//sistem persamaan
var sisper = [["/2022/11/exercise-zone-sistem-persamaan-aljabar.html"],["/2022/11/sbmptn-zone-sistem-persamaan-aljabar.html"],["/2022/11/hots-zone-sistem-persamaan-aljabar.html"]];

//Sistem persamaan linear dua variabel
var spldv = [["/2022/05/exercise-zone-sistem-persamaan-linear.html"],[],[]];

//sistem pertidaksamaan linear dua variabel
var SPtLDV = [["/2020/09/exercise-zone-sistem-pertidaksamaan.html"],[],[]];

//suku banyak (polinom)
var sukban = [["/2018/02/suku-banyak-polinom-soal-dan-pembahasan.html","/2019/07/suku-banyak-polinom-2-soal-dan.html"],[],["/2020/09/hots-zone-suku-banyak-polinom.html"]];

//tabung (silinder)
var tabu = [[""],[],[]];

//translasi
var tran = [["/2020/09/exercise-zone-translasi.html"],[],[]];
//transformasi geometri
var trangeo = [["/2020/08/exercise-zone-transformasi-geometri.html"],["/2017/11/transformasi-geometri-soal-dan.html"],[]];

//trigonometri
var trig = [["/2020/03/exercise-zone-trigonometri.html","/2022/05/exercise-zone-trigonometri-2.html"],["/2017/05/trigonometri-soal-dan-pembahasan.html"],["/2020/09/hots-zone-trigonometri.html"]];

//trigonometri pada segitiga
var trigpas = [["/2022/05/exercise-zone-trigonometri-pada-segitiga.html"],[],[]];

//turunan fungsi trigonometri
var turfungtri = [["/2020/08/exercise-zone-turunan-fungsi.html","/2020/09/exercise-zone-turunan-fungsi.html"],["/2020/08/sbmptn-zone-turunan-fungsi-trigonometri.html"],[]];

//turunan
var turu = [["/2022/05/exercise-zone-turunan-derivative.html","/2022/05/exercise-zone-turunan-derivative-2.html"],["/2022/05/sbmptn-zone-turunan-derivative.html"],["/2022/05/hots-zone-turunan-derivative.html"]];

//vektor
var vek = [["/2022/05/exercise-zone-vektor.html"],["/2022/05/sbmptn-zone-vektor.html"],["/2022/05/hots-zone-vektor.html"]];

//volume benda putar
var volbp = [["/2018/09/volume-benda-putar-soal-dan-pembahasan.html"],[],[]]

//fungsi soal untuk mengatur tipe dan navigasi. materi diisi dengan nama variabel sesuai dengan materi yang diinginkan di atas. tipesoal diisi 1 untuk tipe standar, 2 untuk tipe sbmptn, dan 3 untuk tipe hots. halaman diisi angka sesuai halaman ke berapa
function soal(materi, tipesoal, halaman)  {
      for (let i = 0; i < 3; i++) {
         if (materi[i].length > 0) {
           document.getElementById(idtipe[i]).classList.replace("w3-hide", "w3-show");
            document.getElementById(idtipe[i]).setAttribute("href", materi[i][0]);
         }
      }
      var navi = document.getElementsByClassName("navi");
      if (materi[tipesoal - 1].length > 1) {
         for (let i = 0; i < navi.length; i++) {
            navi[i].classList.replace("w3-hide", "w3-show");
            for (let j = 0; j < materi[tipesoal - 1].length; j++) {
                navi[i].innerHTML += `<a href="${materi[tipesoal - 1][j]}" class="w3-bar-item w3-button">${(j + 1)}</a>`;
            }
            navi[i].getElementsByTagName("a")[halaman - 1].removeAttribute("href");
            navi[i].getElementsByTagName("a")[halaman - 1].classList.add("w3-green");
         }
      }
      isinomor((halaman - 1) * 10 + 1);
      
   }

   function rendermatematika() {
      let listmatematika = document.getElementsByTagName("m");
    if(listmatematika.length>0){
        for(let listmat of listmatematika){
         listmat.setAttribute('id','rendermtk');
            let tempatmtk = document.getElementById('rendermtk');
            katex.render(tempatmtk.innerHTML, tempatmtk, {
                throwOnError: false
            });
            listmat.setAttribute('id','');
        }
    }
    let listmatematikad = document.getElementsByTagName("z");
    if(listmatematikad.length>0){
      for(let listmate of listmatematikad){
         listmate.setAttribute('id','rendermtkd');
          let tempatmtkd = document.getElementById('rendermtkd');
          katex.render(tempatmtkd.innerHTML, tempatmtkd, {
            displayMode: true,
              throwOnError: false
          });
          listmate.setAttribute('id','');
      }
  }};
document.addEventListener('DOMContentLoaded', function () {
    rendermatematika();
}, false);
   
   
