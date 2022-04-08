function pola(c,n){
    let arraypola = [n*n+1,n*n+2,n*n+2*n,2*n*n+1,2*n*n+2];
    return arraypola[c];
}
function ac(angka){
    return Math.floor(Math.random()*angka)
}
function acan(angkapertama=0,angkakedua=1){
    angkakedua = angkakedua ?? angkapertama+1
    return angkapertama+ac(angkakedua-angkapertama+1)
}

var angka1 = [acan(2,10),acan(2,10)];
angka1[2] = Math.floor((((Math.pow(2,angka1[0])%10)*(Math.pow(3,angka1[1])%10))%10)/2)-1
var angka2 = [ac(5),10*acan(6,9)]
var angka3 = acan(2,6);
var angka4 = ['3,51','3,66','3,83','4','4,17',ac(5)];
var jawpg = [angka1[2],angka2[0],angka3-2,angka4[5]];
var angka5 = acan(669,963);
var angka8 = acan(100,1000);
var angka9 = acan(19,30)
var angka10 = ['24.200.000','26.620.000','29.282.000','32.210.200','35.431.220',acan(2,6)]

var soalpg = [
    [String.raw`Perhatikan barisan huruf berikut:<br>
    <b><em>AABBCCDDEEAABBCCDDEEAABBCCDDEE</em></b>...<br>
    Amatilah barisan huruf tersebut terlebih dahulu! huruf pada urutan $2^{${angka1[0]}}\times3^{${angka1[1]}}$ adalah ....`,"A","B","C","D","E"],
    [String.raw`Pola barisan dari $\dfrac1{${pola(angka2[0],1)}}$, $\dfrac1{${pola(angka2[0],2)}}$, $\dfrac1{${pola(angka2[0],3)}}$, $\dfrac1{${pola(angka2[0],4)}}$, $\dfrac1{${pola(angka2[0],5)}}$, $\cdots$, $\dfrac1{${pola(angka2[0],angka2[1])}}$ adalah ....`,String.raw`$\dfrac1{n^2+1}$`,String.raw`$\dfrac1{n^2+2}$`,String.raw`$\dfrac1{n^2+2n}$`,String.raw`$\dfrac1{2n^2+1}$`,String.raw`$\dfrac1{2n^2+2}$`],
    [String.raw`Suatu barisan dengan pola $s_n = 2n^3+${angka3}n^2$. Pola barisan tersebut adalah ....`,String.raw`$6n^2-2n$`,String.raw`$6n^2-1$`,String.raw`$6n^2+2n-2$`,String.raw`$6n^2+4n-3$`,String.raw`$6n^2+6n-4$`],
    [String.raw`Penduduk suatu kota metropolitan tercatat 3,25 juta jiwa pada tahun 2017, diperkirakan menjadi ${angka4[angka4[5]]} juta jiwa pada tahun 2022. Jika tahun 2017 dianggap tahun dasar, berapa persen pertumbuhannya?`,'1,55%','2,4%','3,34%','4,24%','5,11%']
]
var soalising = [
    [String.raw`Sebuah barisan bilangan asli dituliskan sebagai berikut: 1234567891011121314151617181920212223242526... sehingga suku ke-10 = 1, suku ke-11 = 0, suku ke-12 = 1, dan seterusnya. Dapatkah kamu temukan angka yang menempati suku ke-${3*angka5}`,(angka5+36)%10],
    [String.raw`Dari pola barisan pada soal nomor 2, banyak suku pada pola tersebut adalah ....`,angka2[1]],
    [`Pada pola barisan pada soal nomor 3, suku ke-10 adalah ....`,2000+100*angka3-2*Math.pow(9,3)-81*angka3],
    [`2, 3,  4, 5, 6, ... . Tentukan suku ke-${angka8}`,angka8+1],
    [`4, 1, -2, -5, -8, … tentukan suku ke-${angka9}`,4-3*(angka9-1)],
    [`Asep seorang pelajar SMA kelas XI senang menabung uang. Selama ini dia berhasil menabung uangnya sejumlah Rp20.000.000,- di sebuah bank dengan
    bunga 10% per tahun. Berapa tahun Asep menyimpan uang tersebut agar menjadi Rp${angka10[angka10[5]-2]},-`,angka10[5]]
]
