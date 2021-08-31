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
for(let i=0;i<2;i++){
    no1[i]=1+ac(19);
}

var no2 = [];
for(let i=0;i<2;i++){
    no2[i]=2*(1+ac(9))+1
}

var no3 = [11+ac(9),1+ac(9)];

var no4=[101+ac(99),2+ac(8)];
no4[2]=no4[1]*(1+ac(7))

var no5 = [];
for(let i=0;i<2;i++){
    no5[i]=-100+ac(50);
}

var soalpg = [
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|x+${no1[0]}|\lt ${no1[1]}</m><br> adalah ....`,"s":[String.raw`<m>{${-1*no1[1]-no1[0]}\lt x\lt ${no1[1]-no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]+no1[0]}\lt x\lt ${no1[1]+no1[0]}}</m>`,String.raw`<m>{x\lt${-1*no1[1]-no1[0]}\text{ atau } x\gt ${no1[1]-no1[0]}}</m>`,String.raw`<m>{x\lt${-1*no1[1]+no1[0]}\text{ atau } x\gt ${no1[1]+no1[0]}}</m>`,String.raw`<m>{x\lt ${no1[1]+no1[0]}}</m>`]},
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|2x-${no2[0]}|\lt ${no2[1]}</m><br> adalah ....`,"s":[String.raw`<m>{${(-1*no2[1]-no2[0])/2}\lt x\lt ${(no2[1]-no2[0])/2}}</m>`,String.raw`<m>{${(-1*no2[1]+no2[0])/2}\lt x\lt ${(no2[1]+no2[0])/2}}</m>`,String.raw`<m>{x\lt${(-1*no2[1]-no2[0])/2}\text{ atau } x\gt ${(no2[1]-no2[0])/2}}</m>`,String.raw`<m>{x\lt${(-1*no2[1]+no2[0])/2}\text{ atau } x\gt ${(no2[1]+no2[0])/2}}</m>`,String.raw`<m>{${-1*no2[1]-no1[0]}\lt x\lt ${no2[1]-no2[0]}}</m>`]},
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|x+${no1[0]}|\gt ${no1[1]}</m><br> adalah ....`,"s":[String.raw`<m>{x\lt${-1*no1[1]-no1[0]}\text{ atau } x\gt ${no1[1]-no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]-no1[0]}\lt x\lt ${no1[1]-no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]+no1[0]}\lt x\lt ${no1[1]+no1[0]}}</m>`,String.raw`<m>{x\lt${-1*no1[1]+no1[0]}\text{ atau } x\gt ${no1[1]+no1[0]}}</m>`,String.raw`<m>{x\lt ${no1[1]+no1[0]}}</m>`]},
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|2x-${no2[0]}|\gt ${no2[1]}</m><br> adalah ....`,"s":[String.raw`<m>{x\lt${(-1*no2[1]-no2[0])/2}\text{ atau } x\gt ${(no2[1]-no2[0])/2}}</m>`,String.raw`<m>{${(-1*no2[1]-no2[0])/2}\lt x\lt ${(no2[1]-no2[0])/2}}</m>`,String.raw`<m>{${(-1*no2[1]+no2[0])/2}\lt x\lt ${(no2[1]+no2[0])/2}}</m>`,String.raw`<m>{x\lt${(-1*no2[1]+no2[0])/2}\text{ atau } x\gt ${(no2[1]+no2[0])/2}}</m>`,String.raw`<m>{${-1*no2[1]-no1[0]}\lt x\lt ${no2[1]-no2[0]}}</m>`]},
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|x-${no1[0]}|\leq ${no1[1]}</m><br> adalah ....`,"s":[String.raw`<m>{${-1*no1[1]+no1[0]}\leq x\leq ${no1[1]+no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]-no1[0]}\leq x\leq ${no1[1]-no1[0]}}</m>`,String.raw`<m>{x\leq ${-1*no1[1]-no1[0]}\text{ atau } x\geq ${no1[1]-no1[0]}}</m>`,String.raw`<m>{x\leq ${-1*no1[1]+no1[0]}\text{ atau } x\geq ${no1[1]+no1[0]}}</m>`,String.raw`<m>{x\leq ${no1[1]+no1[0]}}</m>`]},
    {"t":String.raw`Penyelesaian dari sistem pertidaksamaan nilai mutlak satu variabel<br> <m>|x-${no1[0]}|\geq ${no1[1]}</m><br> adalah ....`,"s":[String.raw`<m>{x\leq ${-1*no1[1]+no1[0]}\text{ atau } x\geq ${no1[1]+no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]+no1[0]}\leq x\leq ${no1[1]+no1[0]}}</m>`,String.raw`<m>{${-1*no1[1]-no1[0]}\leq x\leq ${no1[1]-no1[0]}}</m>`,String.raw`<m>{x\leq ${-1*no1[1]-no1[0]}\text{ atau } x\geq ${no1[1]-no1[0]}}</m>`,String.raw`<m>{x\leq ${no1[1]+no1[0]}}</m>`]},
    {"t":String.raw`Pada mobil-mobil baru, angka kilometer per liternya tergantung pada bagaimana mobil itu digunakan, apakah sering digunakan untuk perjalanan jarak jauh ataukah hanya untuk perjalanan jarak dekat (dalam kota). Untuk suatu merek mobil tertentu, angka kilometer per liternya berkisar di angka ${no3[1]} kurang atau lebihnya dari ${no3[0]} km/L. Berapakah jangkauan dari angka km/L dari mobil tersebut?`,"s":[String.raw`<m>{${-1*no1[3]+no3[0]}\leq m\leq ${no3[1]+no3[0]}}</m>`,String.raw`<m>{m\leq ${-1*no3[1]+no3[0]}\text{ atau } m\geq ${no3[1]+no3[0]}}</m>`,String.raw`<m>{${-1*no3[1]-no3[0]}\leq m\leq ${no3[1]-no3[0]}}</m>`,String.raw`<m>{m\leq ${-1*no3[1]-no3[0]}\text{ atau } m\geq ${no3[1]-no3[0]}}</m>`,String.raw`<m>{m\leq ${no3[1]+no3[0]}}</m>`]},
    {"t":String.raw`Terdapat aturan untuk memancing ikan di sebuah Teluk di kota K. Untuk menjaga kelestarian di sekitar teluk, dianjurkan memancing di laut dengan kedalaman optimal (d) pada saat menangkap jenis ikan tertentu memenuhi pertidaksamaan <m>{${no4[1]}|d-${no4[0]}|-${no4[2]}\leq 0}</m> (dalam meter). Tentukan jangkauan kedalaman yang dianjurkan untuk menangkap jenis ikan tersebut. Jawablah dengan pertidaksamaan yang sederhana.`,"s":[String.raw`<m>{${-1*no4[2]/no4[1]+no4[0]}\leq m\leq ${no4[2]/no4[1]+no4[0]}}</m>`,String.raw`<m>{m\leq ${-1*no4[2]/no4[1]+no4[0]}\text{ atau } m\geq ${no4[2]/no4[1]+no4[0]}}</m>`,String.raw`<m>{${-1*no4[2]/no4[1]-no4[0]}\leq m\leq ${no4[2]/no4[1]-no4[0]}}</m>`,String.raw`<m>{m\leq ${-1*no4[2]/no4[1]-no4[0]}\text{ atau } m\geq ${no4[2]/no4[1]-no4[0]}}</m>`,String.raw`<m>{m\leq ${no4[2]/no4[1]+no4[0]}}</m>`]}
]
var soalising =[
    {"t":String.raw`<m>|${no5[0]}|+|${no5[1]}| ....`,"s":`${Math.abs(no5[0])+Math.abs(no5[1])}`},
    {"t":String.raw`<m>|${no5[0]}|-|${no5[1]}| ....`,"s":`${Math.abs(no5[0])-Math.abs(no5[1])}`}    
]