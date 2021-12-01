function ac(angka){
    return Math.floor(Math.random()*angka)
}
function fpb2(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  function fakt(angka){
      let hasil=1;
      if(angka>1){
          hasil=angka*fakt(angka-1)
      }
      return hasil;
  }

  function fpb (a) {
    return a.reduce(fpb2)
  }

  const pilihAcak = (arr, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    res.sort(function(a, b){return a-b});
    return res;
 };

 var bilsatuan = [1,2,3,4,5,6,7,8,9];

 function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function komb(n, r) 
{
  if (n==r) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}

function pecahan(pembilang,penyebut){
  let faktor = fpb2(pembilang,penyebut)
  if(faktor==penyebut){
    return pembilang/penyebut
  }else{return String.raw`\dfrac{${pembilang/faktor}}{${penyebut/faktor}}`}
}

var no1 = [];
for(let i=0;i<5;i++){
    no1[i]=100+ac(200)
}
let jumlah1 = no1.reduce(function (a, b) {
    return a + b;
  }, 0);
no1[5]=Math.round(100*no1[1]/jumlah1)+10;
no1[6]=Math.round(100*no1[0]/jumlah1);

var no2 = [2+ac(8),2+ac(8),2+ac(8)];
let jumlahf2 = no2.reduce(function (a, b) {
    return a + b;
  }, 0);
  let jumlahfx2 = (2*no2[0]+3*no2[1]+4*no2[2]);
  no2[3]=jumlahfx2/jumlahf2;
  no2[4]=no2[3]-0.1;
  no2[5]=no2[3]+0.1;
  no2[6]=no2[3]+0.2;
  no2[7]=no2[3]+0.3;

var no3=[1+ac(9),1+ac(9),1+ac(9)];
no3[3]=10.5+5*((10-no3[1])/(10-no3[1]+10-no3[2]));
no3[4]=no3[3]-0.1;

var no4=[no3[0]+no3[1]+no3[2]+10,3*no3[0]+8*no3[1]+18*no3[2]+130];
no4[2]=Math.round((no4[1]/no4[0])*100)/100;

var no5=[2+ac(98)]
var no5f=[no3[0],no3[1],10,no3[2]];
var no5fk=[no5f[0]];
for(let i=1;i<4;i++){
    no5fk[i]=no5fk[i-1]+no5f[i] 
   };
   no5[1]=no5[0]*no4[0]/100;
var no5fk2=[...no5fk].filter(element => element >= no5[1]);
no5[2]=no5fk.length - no5fk2.length;
var no5tb = [];
for(let i=0;i<4;i++){
 no5tb[i]=5*i+0.5 
};
no5[3]=no5tb[no5[2]]+(5*no5[1]-5*no5fk[no5[2]-1])/no5f[no5[2]]

var no9=[20+ac(60),80+ac(50)];
var no10=[2+ac(13),2+ac(13),2+ac(13)];
var no11=[2+ac(8),2+ac(8)];
var no12bil = pilihAcak(bilsatuan,6);
var no12 = [no12bil.length,no12bil[0]+1+ac(no12bil[5]-no12bil[0]-1)];
var no12bil2 = no12bil.filter(element => element >= no12[1]);
var no13 = pilihAcak(bilsatuan,8);
var no14bil = pilihAcak(bilsatuan,4);
var no14=[no14bil[0]+1+ac(no14bil[3]-no14bil[0]-1)]
no14[1]=no14bil.filter(element => element >= no14[0]).length;
var no15=pilihAcak(bilsatuan,6);
var no16=5+ac(5);
var no17=3+ac(5);
var no18=3+ac(6);
var no19=["WIYATA","MAPALA",ac(2)];
var no21=[2+ac(6)];
no21[1]=no21[0]+1+ac(8-no21[0]);
var no22=[1+ac(8),1+ac(8)];
no22[2]=no22[0]+1+ac(8-no22[0]);
no22[3]=no22[1]+1+ac(8-no22[1]);
var no24=[3+ac(7),3+ac(7)];
while(no24[0]==no24[1]){
  no24[0]=3+ac(7);
  no24[1]=3+ac(7);
}

var no25=4+ac(9);
var no27=2*(5+ac(46));
var no28=[];
for(let i=0;i<80;i++){
  no28[i]=i+11
}
var no28a=pilihAcak(no28,11)
var no29=[];
for(let i=0;i<10;i++){
  no29[i]=1+ac(9)
}
var no29a=[...no29].sort(function(a, b){return a-b})
var no23=[1+ac(7),1+ac(7)];
while(no23[0]==2&&no23[0]==2){
  no23[0]=1+ac(7);
  no23[1]=1+ac(7);
}
no23[2]=no23[0]+1+ac(8-no23[0]);
no23[3]=no23[1]+1+ac(8-no23[1]);
 
var soalpg = [
    {"t":String.raw`Di bawah ini merupakan data sebaran anggota serikat buruh yang diambil dari 5 kota besar di Indonesia.<br><table class="table table-bordered tengah"><thead><th>Nama Kota</th><th>Frekuensi</th></thead><tbody>
    <tr><td>Bandung</td><td>${no1[0]}</td></tr>
    <tr><td>Jakarta</td><td>${no1[1]}</td></tr>
    <tr><td>Yogyakarta</td><td>${no1[2]}</td></tr>
    <tr><td>Medan</td><td>${no1[3]}</td></tr>
    <tr><td>Padang</td><td>${no1[4]}</td></tr>
    </tbody></table>Apabila akan diadakan pemilihan ketua serikat buruh yang diambil dari satu orang secara acak. Pernyataan yang salah dibawah ini adalah ....`,"s":[String.raw`Peluang terpilihnya ketua serikat buruh dari kota Jakarta adalah 0,${no1[5]}`,String.raw`Peluang terpilihnya ketua serikat buruh dari kota Bandung adalah 0,${no1[6]}`,String.raw`Banyaknya anggota serikat buruh di kota Yogyakarta sebanyak ${no1[2]} anggota`,String.raw`Banyaknya anggota serikat buruh di kota Yogyakarta dan Padang sebanyak ${no1[2]+no1[4]} anggota.`,String.raw`Peluang terpilihnya ketua serikat buruh dari kota Medan adalah $\dfrac{${no1[3]}}{${jumlah1}}$`]},
    {"t":String.raw`Perhatikan data berikut:<br>
    <table class="table table-bordered tengah"><thead><th>Nilai ($x_i$)</th><th>$f_i$</th><tbody>
    <tr><td>2</td><td>${no2[0]}</td></tr>
    <tr><td>3</td><td>${no2[1]}</td></tr>
    <tr><td>4</td><td>${no2[2]}</td></tr>
    </tbody></table>Rata-rata dari tabel di atas adalah ...`,"s":[String.raw`${no2[3].toFixed(1).replace(".",",")}`,String.raw`${no2[4].toFixed(1).replace(".",",")}`,String.raw`${no2[5].toFixed(1).replace(".",",")}`,String.raw`${no2[6].toFixed(1).replace(".",",")}`,String.raw`${no2[7].toFixed(1).replace(".",",")}`]},
    {"t":String.raw`Perhatikan data berikut:<br>
    <table class="table table-bordered tengah"><thead><th>Kelas$)</th><th>$f_i$</th><tbody>
    <tr><td>1 - 5</td><td>${no3[0]}</td></tr>
    <tr><td>6 - 10</td><td>${no3[1]}</td></tr>
    <tr><td>11 - 15</td><td>10</td></tr>
    <tr><td>16 - 20</td><td>${no3[2]}</td></tr>
    </tbody></table>Modus data tersebut adalah ...`,"s":[String.raw`${no3[3].toFixed(2).replace(".",",")}`,String.raw`${(no3[3]-0.1).toFixed(2).replace(".",",")}`,String.raw`${(no3[3]-0.15).toFixed(2).replace(".",",")}`,String.raw`${(no3[3]+0.1).toFixed(2).replace(".",",")}`,String.raw`${(no3[3]+0.05).toFixed(2).replace(".",",")}`]},
    {"t":String.raw`Mean data pada no.3 adalah ...`,"s":[String.raw`${no4[2].toFixed(2).replace(".",",")}`,String.raw`${(no4[2]-0.05).toFixed(2).replace(".",",")}`,String.raw`${(no4[2]-0.1).toFixed(2).replace(".",",")}`,String.raw`${(no4[2]-0.15).toFixed(2).replace(".",",")}`,String.raw`${(no4[2]+0.05).toFixed(2).replace(".",",")}`]},
    {"t":String.raw`Persentil ke-${no5[0]} dari data pada no.3 adalah ...`,"s":[String.raw`${no5[3].toFixed(2).replace(".",",")}`,String.raw`${(no5[3]-0.05).toFixed(2).replace(".",",")}`,String.raw`${(no5[3]-0.1).toFixed(2).replace(".",",")}`,String.raw`${(no5[3]-0.15).toFixed(2).replace(".",",")}`,String.raw`${(no5[3]+0.05).toFixed(2).replace(".",",")}`]},
    {"t":String.raw`Diketahui data 4,5,6,6,6,7,7,8,9,10. Letak desil ke-2 adalah ...`,"s":[String.raw`5,2`,String.raw`2,2`,String.raw`4,2`,String.raw`6,2`,String.raw`6,5`]},
    {"t":String.raw`Histogram di bawah menunjukkan data nilai ulangan Matematika sejumlah siswa.<br>
    <img class="img-fluid" src="https://blogger.googleusercontent.com/img/a/AVvXsEhk9GGbyZxNVcmmk2oh1HScwRghbaBFkW2QlX9tz_X5LM9lcwu5H00kqjeJxP_XUK9MTfR2teoVJqH45eDstPZ6oI8pLJK9JdygpADetJcNX_RjRTJgMhs2h-nvuXMwobBbKMfcUjtX6qF9q_7nWcKpmSNAwCdkmPo7Urf83dkjotrZxkloUCsdornVuw"/><br>
    Pernyataan yang benar dibawah ini adalah ...`,"s":[String.raw`6 siswa dari 15 meraih nilai tertinggi yaitu 80,5-85,5`,String.raw`Nilai tertinggi diraih sebanyak 3 siswa`,String.raw`Nilai terendah ulangan matematika yaitu 65,5`,String.raw`6 siswa dari 13 meraih nilai tertinggi yaitu 80,5-85,5`,String.raw`1 siswa meraih nilai terendah yaitu 60,5`]},
    {"t":String.raw`Histogram di bawah menunjukkan data nilai ulangan Bahasa Indonesia sejumlah siswa.<br><img class="img-fluid" src="https://blogger.googleusercontent.com/img/a/AVvXsEjLnEcZ2PcVMDUCfx1YGaAOz1_nFA8BDsxmO8cK2O2Vuj83b-wYlposPmwi6zQzCT735x6AhVKoBrKM2xC0m6H5ycG_VbO-ng7yAvx2clMoEnu9vCmSisbLsnuR9bawzfjKYSIqyMwP19rDGni4Kbacm77Jcq0XxaRRgySKLEKxAG25QJh-ucoztnkpBw"/><br>Pernyataan yang benar dibawah ini adalah ...`,"s":[String.raw`Nilai modus pada histogram di atas adalah 25`,String.raw`Nilai modus pada histogram di atas adalah 40`,String.raw`Nilai modus pada histogram di atas adalah 12`,String.raw`Nilai median pada histogram di atas adalah 35`,String.raw`Nilai tertinggi pada histogram tersebut diraih 4 siswa`]},
    {"t":String.raw`Sebuah kantong berisi 5 bola merah dan 6 bola putih. Dari kantong tersebut diambil 2 bola secara acak. Peluang yang terambil itu kedua-duanya bukan bola merah adalah ...`,"s":[String.raw`$\dfrac3{11}$`,String.raw`$\dfrac1{11}$`,String.raw`$\dfrac2{11}$`,String.raw`$\dfrac56$`,String.raw`$\dfrac26$`]},
    {"t":String.raw`Dua buah dadu dilempar bersama sebanyak satu kali. Peluang kejadian muncul jumlah mata dadu kurang dari 4 atau mata dadu berjumlah 7 adalah ...`,"s":[String.raw`$\dfrac14$`,String.raw`1`,String.raw`$\dfrac34$`,String.raw`$\dfrac24$`,String.raw`$\dfrac12$`]},
    {"t":String.raw`Kotak A berisi ${no23[2]} butir telur dengan ${no23[0]} butir diantaranya cacat dan kotak B berisi ${no23[3]} butir telur dengan ${no23[1]} diantaranya cacat. Dari masing-masing kotak diambil sebutir telur, peluang bahwa kedua butir yang terambil itu cacat adalah  ...`,"s":[String.raw`$${pecahan(no23[0]*no23[1],no23[2]*no23[3])}$`,String.raw`$${pecahan(no23[0]+no23[1],no23[2]*no23[3])}$`,String.raw`$${pecahan(no23[0]*no23[1],no23[2]+no23[3])}$`,String.raw`$${pecahan(no23[0]+no23[1],no23[2]+no23[3])}$`,String.raw`$${pecahan(no23[0]*no23[3]+no23[1]*no23[2],no23[2]*no23[3])}$`]},
    {"t":String.raw`Dua anak melakukan percobaan dengan mengambil kelereng secara bergantian masing-masing satu buah dari dalam kantong berisi ${no24[0]} kelereng merah dan ${no24[1]} kelereng hijau. Peluang kejadian anak pertama mengambil 1 kelereng merah dan anak kedua mengambil 1 kelereng hijau adalah  ...`,"s":[String.raw`$${pecahan(no24[0]*no24[1],(no24[0]+no24[1])*(no24[0]+no24[1]-1))}$`,String.raw`$${pecahan(no24[0]*no24[1],(no24[0]+no24[1])*(no24[0]+no24[1]))}$`,String.raw`$${pecahan(no24[0],no24[0]+no24[1])}$`,String.raw`$${pecahan(no24[1],no24[0]+no24[1])}$`,String.raw`$${pecahan(no24[1],no24[0]+no24[1]-1)}$`]}
]
var soalising =[
    {"t":String.raw`Dalam sebuah panitia, seorang wakil dari sebuah sekolah dapat dipilih dari guru atau siswa. Jika pada jurusan tersebut memiliki ${no9[0]} guru dan ${no9[1]} siswa. Banyak cara memilih wakil dari sekolah tersebut adalah ... cara.`,"s":`${no9[0]+no9[1]}`},
    {"t":String.raw`Untuk pulang ke kampung halaman, Ridwan bisa menggunakan mobil, motor, atau kereta. Jika tersedia ${no10[0]} mobil, ${no10[1]} motor dan ${no10[2]} kereta, banyak cara yang bisa dipilih oleh Ridwan untuk pulang ke kampung halaman adalah ... cara.`,"s":`${no10[0]+no10[1]+no10[2]}`},
    {"t":String.raw`Seseorang hendak berpergian dari kota Jambi ke kota bandar Lampung melalui kota Palembang. Banyak jalur yang dapat dilalui dari kota Jambi ke kota Palembang ${no11[0]} cara dan banyak jalur yang dapat dilalui dari kota Palembang ke kota bandar Lampung ${no11[1]} cara. Banyak pilihan jalur yang dapat dilalui orang itu adalah ... cara.`,"s":`${no11[0]*no11[1]}`},
    {"t":String.raw`Dari angka ${no12bil} dibuat bilangan yang terdiri dari 3 angka yang berlainan. Banyaknya bilangan yang dapat dibuat yang lebih kecil dari ${no12[1]}00 adalah ….`,"s":`${no12bil2.length*5*4}`},
    {"t":String.raw`Banyak bilangan yang terdiri atas 3 angka yang dapat disusun dari angka-angka ${no13} dengan syarat tidak boleh berulang adalah ....`,"s":`${no13.length*(no13.length-1)*(no13.length-2)}`},
    {"t":String.raw`Dari empat angka ${no14bil} di bentuk bilangan-bilangan. Banyak bilangan yang terbentuk dengan nilai masing-masing lebih dari ${no14[0]}.000 jika tidak ada angka yang berulang adalah ....`,"s":`${no14[1]*3*2}`},
    {"t":String.raw`Dari angka-angka ${no15} akan disusun suatu bilangan terdiri dari empat angka. Banyaknya bilangan genap yang dapat disusun dan tidak ada angka yang berulang adalah ....`,"s":`${([...no15].filter(element => element%2 ==0).length)*5*4*3}`},
    {"t":String.raw`Dari ${no16} calon pengurus suatu organisasi akan dipilih menjadi ketua, wakil ketua, sekretaris dan bendahara yang masing-masing terdiri 1 orang, banyaknya susunan pengurus yang dapat terbentuk adalah... cara.`,"s":`${no16*(no16-1)*(no16-2)*(no16-3)}`},
    {"t":String.raw`Satu keluarga yang terdiri ${no17} orang duduk mengelilingi sebuah meja makan yang berbentuk lingkaran. banyak cara agar mereka duduk mengelilingi meja makan dengan urutan yang berbeda adalah .... cara.`,"s":`${fakt(no17-1)}`},
    {"t":String.raw`Suatu kelompok tani yang terdiri atas ${no18} orang sedang mendiskusikan rencana penanaman padi dengan cara duduk melingkar. Dari ketujuh orang tersebut, terdapat seorang penyuluh dan seorang ketua kelompok tani yang harus selalu berdampingan. banyak susunan duduk melingkar yang mungkin terjadi adalah ....`,"s":`${2*(fakt(no18-2))}`},
    {"t":String.raw`Banyak susunan kata yang dapat dibentuk dari kata "${no19[no19[2]]}" adalah ... kata.`,"s":`${fakt(6)/fakt(no19[2]+2)}`},
    {"t":String.raw`Banyak susunan huruf yang dapat dibentuk dari unsur huruf-huruf pembentuk kata PAMAN adalah ...`,"s":`${fakt(5)/2}`},
    {"t":String.raw`Banyak warna campuran yang terdiri dari ${no21[0]} warna apabila ${no21[0]} warna tersebut dipilih dari ${no21[1]} warna adalah ...`,"s":`${komb(no21[1],no21[0])}`},
    {"t":String.raw`Dari ${no22[2]} laki-laki dan ${no22[3]} perempuan, akan dibentuk sebuah panitia yang terdiri atas ${no22[0]+no22[1]} orang. Banyak cara panitia dapat terbentuk jika harus terdiri atas ${no22[0]} laki-laki dan ${no22[1]} perempuan adalah cara.`,"s":`${komb(no22[2],no22[0])*komb(no22[3],no22[1])}`},
    {"t":String.raw`Satu buah uang logam yang dilemparkan ke udara sebanyak ${no27} kali. Maka frekuensi harapan munculnya pada sisi angka adalah ...kali.`,"s":`${no27/2}`},
    {"t":String.raw`Data: ${no28a}, maka median dari data tersebut adalah ...`,"s":`${no28a[5]}`},
    {"t":String.raw`Manajer restoran cepat saji mengamati dan menghitung waktu yang dibutuhkan karyawannya untuk menyajikan makanan kepada pembeli. Dari pengamatan diperoleh data dalam detik sebagai berikut: ${no29}. Kuartil ketiga dari data di atas adalah ...`,"s":`${no29a[7]}`}
]
var pembpg=[
  String.raw`Jumlah frekuensi adalah ${jumlah1}.<br>
  Peluang terpilihnya ketua serikat buruh dari kota Bandung adalah $\dfrac{${no1[0]}}{${jumlah1}}$ = ${(no1[0]/jumlah1).toFixed(2).replace(".",",")}.<br>
  Banyaknya anggota serikat buruh di kota Yogyakarta sebanyak ${no1[2]} anggota.<br>
  Banyaknya anggota serikat buruh di kota Yogyakarta dan Padang sebanyak ${no1[2]} + ${no1[4]} = ${no1[2]+no1[4]} anggota.<br>
  Peluang terpilihnya ketua serikat buruh dari kota Medan adalah $\dfrac{${no1[3]}}{${jumlah1}}$.<br>
  Peluang terpilihnya ketua serikat buruh dari kota Jakarta adalah $\dfrac{${no1[1]}}{${jumlah1}}$ = ${(no1[1]/jumlah1).toFixed(2).replace(".",",")}.`,
  String.raw`<table class="table table-bordered tengah"><thead><th>Nilai ($x_i$)</th><th>$f_i$</th><th>$f_ix_i$</th><tbody>
  <tr><td>2</td><td>${no2[0]}</td><td>${2*no2[0]}</td></tr>
  <tr><td>3</td><td>${no2[1]}</td><td>${3*no2[1]}</td></tr>
  <tr><td>4</td><td>${no2[2]}</td><td>${4*no2[2]}</td></tr>
  <tr><th>JUMLAH</th><th>${jumlahf2}</th><th>${jumlahfx2}</th></tr>
  </tbody></table>
  $\bar{x}=\dfrac{${jumlahfx2}}{${jumlahf2}}$ = ${no2[3].toFixed(1).replace(".",",")}.`,
  String.raw`$T_b=10{,}5$<br>
  $p=5$<br>
  $d_1=10-${no3[1]}=${10-no3[1]}$<br>
  $d_1=10-${no3[2]}=${10-no3[2]}$<br><br>
  $\begin{aligned}
  M_o&=T_b+p\left(\dfrac{d_1}{d_1+d_2}\right)\\[4pt]
  &=10{,}5+5\left(\dfrac{${10-no3[1]}}{${10-no3[1]}+${10-no3[2]}}\right)\\[4pt]
  &=10{,}5+\dfrac{${50-5*no3[1]}}{${10-no3[1]+10-no3[2]}}\\[4pt]
  &=10{,}5+${((50-5*no3[1])/(10-no3[1]+10-no3[2])).toFixed(2).replace(".",",")}\\
  &=${(10.5+(50-5*no3[1])/(10-no3[1]+10-no3[2])).toFixed(2).replace(".",",")}
  \end{aligned}$`,
  String.raw`<table class="table table-bordered tengah"><thead><th>Kelas$)</th><th>$f_i$</th><th>$x_i$</th><th>$f_ix_i$</th><tbody>
  <tr><td>1 - 5</td><td>${no3[0]}</td><td>3</td><td>${3*no3[0]}</td></tr>
  <tr><td>6 - 10</td><td>${no3[1]}</td><td>8</td><td>${8*no3[1]}</td></tr>
  <tr><td>11 - 15</td><td>10</td><td>13</td><td>130</td></tr>
  <tr><td>16 - 20</td><td>${no3[2]}</td><td>18</td><td>${18*no3[2]}</td></tr>
  <tr><th>JUMLAH</td><td>${no4[0]}</td><td></td><td>${no4[1]}</td></tr>
  </tbody></table>$\bar{x}=\dfrac{${no4[1]}}{${no4[0]}}$ = ${no4[2].toFixed(2).replace(".",",")}.`,
  String.raw`<table class="table table-bordered tengah"><thead><th>Kelas$)</th><th>$f_i$</th><th>$f_k$</th><tbody>
  <tr><td>1 - 5</td><td>${no3[0]}</td><td>${no5fk[0]}</td></tr>
  <tr><td>6 - 10</td><td>${no3[1]}</td><td>${no5fk[1]}</td></tr>
  <tr><td>11 - 15</td><td>10</td><td>${no5fk[2]}</td></tr>
  <tr><td>16 - 20</td><td>${no3[2]}</td><td>${no5fk[3]}</td></tr>
  <tr><th>JUMLAH</td><td>${no4[0]}</td></tr>
  </tbody></table>
  <b>Menentukan kelas persentil ke-${no5[0]}</b><br>
  $\dfrac{${no5[0]}\cdot ${no4[0]}}{100}$ = ${(no5[0]*no4[0]/100).toFixed(2).replace(".",",")}<br>
  Kelas ke-${no5[2]+1}<br>
  $T_b=${no5tb[no5[2]].toFixed(1).replace(".",",")}$<br>
  $p=5$<br>
  $f_k=${no5fk[no5[2]-1]}$<br>
  $f=${no5f[no5[2]]}$<br><br>
  $\begin{aligned}
  P_i&=T_b+p\left(\dfrac{\frac{i\cdot n}{100}-f_k}f\right)\\[4pt]
  P_{${no5[0]}}&=${no5tb[no5[2]].toFixed(1).replace(".",",")}+5\left(\dfrac{${(no5[0]*no4[0]/100).toFixed(2).replace(".",",")}-${no5fk[no5[2]-1]}}{${no5f[no5[2]]}}\right)\\[4pt]
  &=${no5tb[no5[2]].toFixed(1).replace(".",",")}+5\left(\dfrac{${(no5[0]*no4[0]/100-no5fk[no5[2]-1]).toFixed(2).replace(".",",")}}{${no5f[no5[2]]}}\right)\\[4pt]
  &=${no5tb[no5[2]].toFixed(1).replace(".",",")}+\dfrac{${(no5[0]*no4[0]/20-5*no5fk[no5[2]-1]).toFixed(2).replace(".",",")}}{${no5f[no5[2]]}}\\[4pt]
  &=${no5tb[no5[2]].toFixed(1).replace(".",",")}+${((no5[0]*no4[0]/20-5*no5fk[no5[2]-1])/no5f[no5[2]]).toFixed(2).replace(".",",")}\\[4pt]
  &=${(no5tb[no5[2]]+(no5[0]*no4[0]/20-5*no5fk[no5[2]-1])/no5f[no5[2]]).toFixed(2).replace(".",",")}\end{aligned}$`,
  String.raw`Banyak datum = n = 10.<br>
  $\begin{aligned}
  D_i&=X_{\frac{2(n+1)}{10}}\\[4pt]
  D_2&=X_{\frac{2(10+1)}{10}}\\[4pt]
  &=X_{\frac{2(10+1)}{10}}\\[4pt]
  &=X_{\frac{22}{10}}\\[4pt]
  &=X_{2{,}2}\\
  &=X_2+0{,}2(X_3-X_2)\\
  &=5+0{,}2(6-5)\\
  &=5{,}2
  \end{aligned}$`,
  String.raw`Nilai tertinggi diraih sebanyak 6 siswa.<br>
  Nilai terendah ulangan matematika yaitu 65,5-70,5.<br>
  1 siswa meraih nilai terendah yaitu 65,5-70,5.<br>
  6 siswa dari 15 meraih nilai tertinggi yaitu 80,5-85,5.`,
  String.raw`Nilai modus pada histogram di atas adalah 25.`,
  String.raw`Memilih 2 bola dari 11 bola.<br>
  $\begin{aligned}
  C_2^{11}&=\dfrac{11!}{(11-2)!\ 2!}\\[4pt]
  &=\dfrac{11\cdot10\cdot\cancel{9!}}{\cancel{9!}\ 2\cdot1}\\[4pt]
  &=55\end{aligned}$<br><br>
  Kejadian terambil kedua-duanya bukan bola merah (2 bola putih)<br>
  $\begin{aligned}
  C_2^6&=\dfrac{6!}{(6-2)!\ 2!}\\[4pt]
  &=\dfrac{6\cdot5\cdot\cancel{4!}}{\cancel{4!}\ 2\cdot1}\\[4pt]
  &=15\end{aligned}$<br><br>
  Peluang terambil kedua-duanya bukan bola merah<br>
  $\dfrac{15}{55}=\dfrac3{11}$`,
  String.raw`Misal A = kejadian jumlah mata dadu kurang dari 4.<br>
  Banyak kejadian jumlah mata dadu 2 = 1<br>
  Banyak kejadian jumlah mata dadu 3 = 2<br>
  $n(A)=1+2=3$<br><br>
  B = kejadian jumlah mata dadu 7<br>
  $n(B)=6$<br><br>
  Peluang kejadian muncul jumlah mata dadu kurang dari 4 atau mata dadu berjumlah 7<br>
  $\begin{aligned}
  P(A\cup B)&=\dfrac{3+6}{36}\\[4pt]
  &=\dfrac9{36}\\
  &=\boxed{\boxed{\dfrac14}}
  \end{aligned}$`,
  String.raw`peluang terambil telur cacat dari kotak A<br>
  $P(A)=\dfrac{${no23[0]}}{${no23[2]}}$<br><br>
  peluang terambil telur cacat dari kotak B<br>
  $P(B)=\dfrac{${no23[1]}}{${no23[3]}}$<br><br>
  Peluang terambil telur cacat dari kedua kotak<br>
  $\begin{aligned}
  P(A\cap B)&=P(A)\cdot P(B)\\
  &=\dfrac{${no23[0]}}{${no23[2]}}\cdot\dfrac{${no23[1]}}{${no23[3]}}\\[4pt]
  &=\dfrac{${no23[0]*no23[1]}}{${no23[2]*no23[3]}}\\
  &=\boxed{\boxed{${pecahan(no23[0]*no23[1],no23[2]*no23[3])}}}
  \end{aligned}$`,
  String.raw`Peluang kejadian anak pertama mengambil 1 kelereng merah<br>
  $P(A)=\dfrac{${no24[0]}}{${no24[0]+no24[1]}}$<br><br>
  Peluang kejadian anak kedua mengambil 1 kelereng hijau<br>
  $P(B|A)=\dfrac{${no24[1]}}{${no24[0]+no24[1]-1}}$<br><br>
  Peluang kejadian anak pertama mengambil 1 kelereng merah dan anak kedua mengambil 1 kelereng hijau<br>
  $\begin{aligned}
  P(A\cap B)&=P(A)\cdot P(B|A)\\
  &=\dfrac{${no24[0]}}{${no24[0]+no24[1]}}\cdot \dfrac{${no24[1]}}{${no24[0]+no24[1]-1}}\\[4pt]
  &=\dfrac{${no24[0]*no24[1]}}{${(no24[0]+no24[1])*(no24[0]+no24[1]-1)}}\\
  &=\boxed{\boxed{${pecahan(no24[0]*no24[1],(no24[0]+no24[1])*(no24[0]+no24[1]-1))}}}
  \end{aligned}$`
]
var pembising = [
  String.raw`${no9[0]} + ${no9[1]} = ${no9[0]+no9[1]}`,
  String.raw`${no10[0]} + ${no10[1]} + ${no10[2]} = ${no10[0]+no10[1]+no10[2]}`,
  String.raw`$${no11[0]}\times ${no11[1]}=${no11[0]*no11[1]}$`,
  String.raw`$${no12bil2.length}\times5\times4=${no12bil2.length*5*4}$`,
  String.raw`$${no13.length}\times${no13.length-1}\times${no13.length-2}=${no13.length*(no13.length-1)*(no13.length-2)}$`,
  String.raw`$${no14[1]}\times3\times2=${no14[1]*3*2}$`,
  String.raw`$5\times4\times3\times${([...no15].filter(element => element%2 ==0).length)}=${([...no15].filter(element => element%2 ==0).length)*5*4*3}$`,
  String.raw`$\begin{aligned}
  P_4^{${no16}}&=\dfrac{${no16}!}{(${no16}-4)!}\\[4pt]
  &=\dfrac{${no16}\cdot${no16-1}\cdot${no16-2}\cdot${no16-3}\cdot\cancel{${no16-4}!}}{\cancel{${no16-4}!}}\\[4pt]
  &=${no16*(no16-1)*(no16-2)*(no16-3)}\end{aligned}$`,
  String.raw`$(${no17}-1)!=${no17-1}!=${fakt(no17-1)}$`,
  String.raw`$(${no18-1}-1)!\cdot2!=${2*(fakt(no18-2))}$`,
  String.raw`Banyak huruf = 6<br>
  Banyak huruf A = ${no19[2]+2}<br>
  Banyak kata yang bisa dibentuk:<br>
  $\dfrac{6!}{${no19[2]+2}!}=${fakt(6)/fakt(no19[2]+2)}$`,
  String.raw`Banyak huruf = 5<br>
  Banyak huruf A = 2<br>
  Banyak kata yang bisa dibentuk:<br>
  $\dfrac{5!}{2!}=\dfrac{5\cdot4\cdot3\cdot\cancel{2\cdot1}}{\cancel{2\cdot1}}=60$`,
  String.raw`$\begin{aligned}
  C_{${no21[0]}}^{${no21[1]}}&=\dfrac{${no21[1]}!}{(${no21[1]}-${no21[0]})!\ ${no21[0]}!}\\[4pt]
  &=\dfrac{${no21[1]}!}{${no21[1]-no21[0]}!\ ${no21[0]}!}\\[4pt]
  &=${komb(no21[1],no21[0])}\end{aligned}$`,
  String.raw`$C_{${no22[0]}}^{${no22[2]}}\cdot C_{${no22[1]}}^{${no22[3]}}=${komb(no22[2],no22[0])*komb(no22[3],no22[1])}$`,
  String.raw`Peluang muncul sisi angka:<br>
  $P(A)=\dfrac12$<br><br>
  Frekuensi harapan muncul sisi angka:<br>
  $\begin{aligned}FH(A)&=n\cdot P(A)\\
  &=${no27}\cdot\dfrac12\\[4pt]
  &=${no27/2}\end{aligned}$`,
  String.raw`Median atau data tengah terletak di data ke-6 yaitu ${no28a[5]}.`,
  String.raw`Setelah diurutkan:<br>
  ${no29a}<br>
  Kuartil ke-3 terletak di data ke-8 yaitu ${no29a[7]}`
]
