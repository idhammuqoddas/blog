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

  function fpb (a) {
    return a.reduce(fpb2)
  }

var no1 = [];
for(let i=0;i<4;i++){
    no1[i]=-9+ac(19);
}

var no2 = [];
for(let i=0;i<4;i++){
    no2[i]=-9+ac(19)
}

var no3 = [];
for(let i=0;i<4;i++){
    no3[i]=Math.pow(-1,ac(2))*(1+ac(9))
}

var no4=[Math.pow(-1,ac(2))*2];
for(let i=1;i<4;i++){
    no4[i]=Math.pow(-1,ac(2))*2*(1+ac(4))
}
for(let i=4;i<7;i++){
    no4[i]=-9+ac(19)
}

var no5 = [];
for(let i=0;i<4;i++){
    no5[i]=-2+ac(5);
}

var no6=[];
for(let i=0;i<2;i++){
    no6[i]=1+ac(9);
}
for(let i=2;i<6;i++){
    no6[i]=2+ac(4);
}
var no6a=["x","y",ac(2)];
no6[6]=no6a[no6a[2]];

var no7=[];
for(let i=0;i<2;i++){
    no7[i]=1+ac(9);
}
for(let i=2;i<6;i++){
    no7[i]=2+ac(4);
}

var no8=[];
for(let i=0;i<4;i++){
    no8[i]=1+ac(9);
}
while(no8[0]/no8[2]==no8[1]/no8[3]){
    for(let i=0;i<4;i++){
        no8[i]=1+ac(9);
    }
}
for(let i=5;i<7;i++){
    no8[i]=1+ac(9);
}

var no9=[];
for(let i=0;i<4;i++){
    no9[i]=2+ac(8);
}
while(no9[0]/no9[2]==no9[1]/no9[3]){
    for(let i=0;i<4;i++){
        no9[i]=2+ac(8);
    }
}
for(let i=5;i<7;i++){
    no9[i]=1+ac(9);
}
 
var soalpg = [
    {"t":String.raw`Diketahui matriks <m>\begin{pmatrix}a&b\\c&d\end{pmatrix}</m>. Determinan matriks tersebut adalah ....`,"s":[String.raw`<m>ad-bc</m>`,String.raw`<m>ab-cd</m>`,String.raw`<m>ab+cd</m>`,String.raw`<m>ac-bd</m>`,String.raw`<m>cd-ab</m>`]}
]
var soalising =[
    {"t":String.raw`Diketahui matriks <m>{A=\begin{pmatrix}${no1[0]}&${no1[1]}\\${no1[2]}&${no1[3]}\end{pmatrix}}</m>. Determinan matriks <m>A</m> adalah ....`,"s":`${no1[0]*no1[3]-no1[1]*no1[2]}`},
    {"t":String.raw`Diketahui matriks <m>{B=\begin{pmatrix}${no2[0]}&${no2[1]}\\${no2[2]}&${no2[3]}\end{pmatrix}}</m>. Determinan matriks <m>B</m> adalah ....`,"s":`${no2[0]*no2[3]-no2[1]*no2[2]}`},
    {"t":String.raw`Diketahui matriks <m>{C=\begin{pmatrix}${no3[0]}&${no3[1]}\\${no3[2]}&m\end{pmatrix}}</m>. Jika <m>\det C=${no3[0]*no3[3]-no3[1]*no3[2]}</m> maka nilai <m>m</m> adalah ....`,"s":`${no3[3]}`},
    {"t":String.raw`Diketahui matriks <m>{P=\begin{pmatrix}p&${no4[4]}\\${no4[1]}&${no4[0]}\end{pmatrix}}</m> dan <m>{Q=\begin{pmatrix}${no4[2]}&${no4[3]}\\${no4[5]}&${no4[6]}\end{pmatrix}}</m>. Jika <m>\det P=\det Q</m> maka nilai <m>p</m> adalah ....`,"s":`${(no4[2]*no4[6]-no4[3]*no4[5]+no4[1]*no4[4])/no4[0]}`},
    {"t":String.raw`Diketahui matriks <m>{R=\begin{pmatrix}${no5[0]}&${no5[1]}\\${no5[2]}&${no5[3]}\end{pmatrix}}</m>.  <m>\det R^2=</m> ....`,"s":`${Math.pow(no5[0]*no5[3]-no5[1]*no5[2],2)}`},
    {"t":String.raw`Diketahui sistem persamaan linear dua variabel:<br> <m>\begin{aligned}${no6[2]}x+${no6[3]}y&=${no6[2]*no6[0]+no6[3]*no6[1]}\\${no6[4]}x-${no6[5]}y&=${no6[4]*no6[0]-no6[5]*no6[1]}\end{aligned}</m><br> Nilai <m>${no6[6]}</m> adalah ....`,"s":`${no6[no6a[2]]}`},
    {"t":String.raw`Diketahui sistem persamaan linear dua variabel:<br> <m>\begin{aligned}${no7[2]}x-${no7[3]}y&=${no7[2]*no7[0]-no7[3]*no7[1]}\\${no7[4]}x+${no7[5]}y&=${no7[4]*no7[0]+no7[5]*no7[1]}\end{aligned}</m><br>Nilai <m>10x+10y</m> adalah ....`,"s":`${10*no7[0]+10*no7[1]}`},
    {"t":String.raw`Danu membeli ${no8[0]} pensil dan ${no8[1]} buku seharga Rp${no8[0]*no8[5]+no8[1]*no8[6]}.000,00. Andre membeli ${no8[2]} pensil dan ${no8[3]} buku seharga Rp${no8[2]*no8[5]+no8[3]*no8[6]}.000,00.  Harga 1 pensil adalah ....<br>
    <i>Tulis jawaban tanpa <b>Rp</b>, titik, dan koma. Jika jawabannya adalah <b>Rp123.000,00</b> maka kamu cukup menulis <b><u>123000</u></b>.</i>`,"s":`${no8[5]*1000}`},
    {"t":String.raw`Bobi membeli ${no9[0]} martabak dan ${no9[1]} burger seharga Rp${no9[0]*no9[5]+no9[1]*no9[6]}.000,00. Andre membeli ${no9[2]} martabak dan ${no9[3]} burger seharga Rp${no9[2]*no9[5]+no9[3]*no9[6]}.000,00.  Harga 1 martabak dan 1 burger adalah .....<br>
    <i>Tulis jawaban tanpa <b>Rp</b>, titik, dan koma. Jika jawabannya adalah <b>Rp123.000,00</b> maka kamu cukup menulis <b><u>123000</u></b>.</i>`,"s":`${(no9[5]+no9[6])*1000}`}
    
]
