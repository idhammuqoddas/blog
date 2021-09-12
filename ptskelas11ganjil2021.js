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

  function hapusItemArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const pilihacak = (arr, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };

var no1 = [];
for(let i=0;i<4;i++){
    no1[i]=1+ac(999);
}

var no2 = [2+ac(4),2+ac(4)];
while(no2[0]==no2[1]){
    no2[0]=2+ac(4);
    no2[1]=2+ac(4);
}
for(let i=2;i<no2[0]*no2[1]+2;i++){
    no2[i]=-9+ac(19)
}
no2[no2[0]*no2[1]+2]="";
for(let i=0;i<no2[0];i++){
    no2[no2[0]*no2[1]+2]+=String.raw`${no2[2+no2[1]*i]}`;
    for(let j=1;j<no2[1];j++){
        no2[no2[0]*no2[1]+2]+=String.raw`&${no2[2+no2[1]*i+j]}`
    };
    if(i!=no2[0]-1){
        no2[no2[0]*no2[1]+2]+=String.raw`\\`
    }
}

var no3 = [2+ac(4),2+ac(4)];
while(no3[0]==no3[1]){
    no3[0]=2+ac(4);
    no3[1]=2+ac(4);
}
for(let i=2;i<no3[0]*no3[1]+2;i++){
    no3[i]=-9+ac(19)
}
no3[no3[0]*no3[1]+2]="";
for(let i=0;i<no3[0];i++){
    no3[no3[0]*no3[1]+2]+=String.raw`${no3[2+no3[1]*i]}`;
    for(let j=1;j<no3[1];j++){
        no3[no3[0]*no3[1]+2]+=String.raw`&${no3[2+no3[1]*i+j]}`
    };
    if(i!=no3[0]-1){
        no3[no3[0]*no3[1]+2]+=String.raw`\\`
    }
}

var no4 = [2+ac(4),2+ac(4)];
while(no4[0]==no4[1]){
    no4[0]=2+ac(4);
    no4[1]=2+ac(4);
}
for(let i=2;i<no4[0]*no4[1]+2;i++){
    no4[i]=-9+ac(19)
}
no4[no4[0]*no4[1]+2]="";
for(let i=0;i<no4[0];i++){
    no4[no4[0]*no4[1]+2]+=String.raw`${no4[2+no4[1]*i]}`;
    for(let j=1;j<no4[1];j++){
        no4[no4[0]*no4[1]+2]+=String.raw`&${no4[2+no4[1]*i+j]}`
    };
    if(i!=no4[0]-1){
        no4[no4[0]*no4[1]+2]+=String.raw`\\`
    }
}

var no5 = [];
for(let i=0;i<16;i++){
    no5[i]=-5+ac(10);
}
no5[16]=""
for(let i=0;i<4;i++){
    no5[16]+=String.raw`${no5[4*i]}`;
    for(let j=1;j<4;j++){
        no5[16]+=String.raw`&${no5[4*i+j]}`
    };
    if(i!=3){
        no5[16]+=String.raw`\\`
    }
}
no5[17]=1+ac(4);
no5[18]=1+ac(4);
var no5a = [];
for(let i=0;i<16;i++){
    no5a.push(no5[i])
}
const no5b = Array.from(new Set(no5a));
const no5c = hapusItemArray(no5b,no5[4*(no5[17]-1)+no5[18]-1])

var no6=[];;
for(let i=0;i<6;i++){
    no6[i]=Math.pow(-1,ac(2))*(2+ac(8))
}
var no6a = ["persegi panjang","baris","kolom","segitiga atas","segitiga bawah","diagonal","identitas","nol"];
var no6b = [String.raw`${no6[0]}&${no6[1]}&${no6[2]}\\${no6[3]}&${no6[4]}&${no6[5]}`,
String.raw`${no6[0]}&${no6[1]}&${no6[2]}`,
String.raw`${no6[0]}\\${no6[1]}\\${no6[2]}`,
String.raw`${no6[0]}&${no6[1]}&${no6[2]}\\0&${no6[3]}&${no6[4]}\\0&0&${no6[5]}`,
String.raw`${no6[0]}&0&0\\${no6[1]}&${no6[2]}&0\\${no6[3]}&${no6[4]}&${no6[5]}`,
String.raw`${no6[0]}&0&0\\0&${no6[1]}&0\\0&0&${no6[2]}`,
String.raw`1&0&0\\0&1&0\\0&0&1`,
String.raw`0&0&0\\0&0&0\\0&0&0`
];
var no6c= [];
for(let i=0;i<8;i++){
    no6c.push(i)
}
var no6d=pilihacak(no6c,5);

var no7=[];
for(let i=0;i<6;i++){
    no7[i]=-99+ac(199);
}

var no8=[];
for(let i=0;i<3;i++){
    no8[i]=-9+ac(19);
}
no8[3]=Math.pow(-1,ac(2))*(1+ac(9));
no8[4]=1+ac(9);
const no8a = Array.from(new Set([no8[3]-no8[4],no8[3]+no8[4],no8[4]-no8[3],-1*no8[3]-no8[4],no8[3]]));
if(no8a.length<5){
    for(let i=no8a.length;i<5;i++){
        no8a[i]=Math.max(...no8a)+i-(no8a.length-1)
    }
}

var no9=[];
for(let i=0;i<2;i++){
    no9[i]=1+ac(9);
}
for(let i=2;i<4;i++){
    no9[i]=Math.pow(-1,ac(2))*(1+ac(9));
}

var no10=[];
for(let i=0;i<4;i++){
    no10[i]=-9+ac(19);
}
const no10a = Array.from(new Set([no10[0]*no10[3]-no10[1]*no10[2],no10[0]*no10[3]+no10[1]*no10[2],no10[1]*no10[2]-no10[0]*no10[3],no10[0]*no10[1]-no10[3]*no10[2],no10[0]*no10[1]+no10[3]*no10[2],no10[0]*no10[2]-no10[3]*no10[1],no10[0]*no10[2]+no10[3]*no10[1],no10[3]*no10[1]-no10[0]*no10[2]]));
if(no10a.length<5){
    for(let i=no10a.length;i<5;i++){
        no10a[i]=Math.max(...no10a)+i-(no10a.length-1)
    }
}

var no11=[];
for(let i=0;i<8;i++){
    no11[i]=-1*(1+ac(9));
}

var no12=[];
for(let i=0;i<8;i++){
    no12[i]=Math.pow(-1,ac(2))*(1+ac(9));
}

var no13=[Math.pow(-1,ac(2))*(1+ac(9)),Math.pow(-1,ac(2))*(1+ac(9))];
while(no13[0]==no13[1]){
    no13[1]=Math.pow(-1,ac(2))*(1+ac(9))
}
no13[2]=-1-no13[0]*no13[1]

var no14=[];
for(let i=0;i<8;i++){
    no14[i]=Math.pow(-1,ac(2))*(1+ac(9));
}

var no15=[];
for(let i=0;i<2;i++){
    no15[i]=Math.pow(-1,ac(2))*2*(1+ac(4))
}
for(let i=2;i<7;i++){
    no15[i]=Math.pow(-1,ac(2))*(2*ac(5)+1)
}

var no16=[];
for(let i=0;i<4;i++){
    no16[i]=Math.pow(-1,ac(2))*(1+ac(3))
}

var no17=[];
for(let i=0;i<9;i++){
    no17[i]=-3+ac(7)
}
no17[10]="";
for(let i=0;i<3;i++){
    no17[10]+=String.raw`${no17[3*i]}`;
    for(let j=1;j<3;j++){
        no17[10]+=String.raw`&${no17[3*i+j]}`
    };
    if(i!=2){
        no17[10]+=String.raw`\\`
    }
}

var no18=[];
for(let i=0;i<2;i++){
    no18[i]=1+ac(9);
}
for(let i=2;i<6;i++){
    no18[i]=2+ac(4);
}

var no19=[];
for(let i=0;i<3;i++){
    no19[i]=Math.pow(-1,ac(2))*(1+ac(5))
}

var no20=[];
for(let i=0;i<4;i++){
    no20[i]=2+ac(8);
}
while(no20[0]/no20[2]==no20[1]/no20[3]){
    for(let i=0;i<4;i++){
        no20[i]=2+ac(8);
    }
}
for(let i=5;i<7;i++){
    no20[i]=1+ac(9);
}

var no21=[1+ac(3),1+ac(3),1+ac(3)]

var soalpg = [
    {"t":String.raw`Berikut ini adalah tabel banyaknya kendaraan dalam 2 hari.<br><table class="table table-bordered">
    <tbody>
    <tr><td></td><td class="fw-bold">Senin</td><td>Selasa</td></tr>
    <tr><td>Mobil</td><td>${no1[0]}</td><td>${no1[1]}</td></tr>
    <tr><td>Motor</td><td>${no1[2]}</td><td>${no1[3]}</td></tr>
    </tbody></table>
    Tabel di atas dapat disajikan dalam bentuk matriks yaitu ....`,"s":[String.raw`<m>\begin{pmatrix}${no1[0]}&${no1[1]}\\${no1[2]}&${no1[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no1[1]}&${no1[0]}\\${no1[2]}&${no1[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no1[2]}&${no1[3]}\\${no1[0]}&${no1[1]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no1[1]}&${no1[0]}\\${no1[3]}&${no1[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no1[2]}&${no1[3]}\\${no1[0]}&${no1[1]}\end{pmatrix}</m>`]},
    {"t":String.raw`Matriks berikut,<br><m>\begin{pmatrix}${no2[no2[0]*no2[1]+2]}\end{pmatrix}</m><br> mempunyai baris sebanyak ....`,"s":[String.raw`<m>${no2[0]}</m>`,String.raw`<m>${no2[1]}</m>`,String.raw`<m>${no2[0]+no2[1]}</m>`,String.raw`<m>${no2[0]*no2[1]}</m>`,String.raw`<m>1</m>`]},
    {"t":String.raw`Matriks berikut,<br><m>\begin{pmatrix}${no3[no3[0]*no3[1]+2]}\end{pmatrix}</m><br> mempunyai kolom sebanyak ....`,"s":[String.raw`<m>${no3[1]}</m>`,String.raw`<m>${no3[0]}</m>`,String.raw`<m>${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]*no3[1]}</m>`,String.raw`<m>1</m>`]},
    {"t":String.raw`Matriks berikut,<br><m>\begin{pmatrix}${no4[no4[0]*no4[1]+2]}\end{pmatrix}</m><br> mempunyai ordo ....`,"s":[String.raw`<m>${no4[1]}\times${no4[0]}</m>`,String.raw`<m>${no4[0]}\times${no4[1]}</m>`,String.raw`<m>${no4[0]}\times${no4[0]}</m>`,String.raw`<m>${no4[1]}\times${no4[1]}</m>`,String.raw`<m>${no4[0]*no4[1]}</m>`]},
    {"t":String.raw`Perhatikan matriks berikut,<br><m>\begin{pmatrix}${no5[16]}\end{pmatrix}</m><br> elemen <m>a_{${no5[17]}${no5[18]}}</m> adalah ....`,"s":[String.raw`<m>${no5[4*(no5[17]-1)+no5[18]-1]}</m>`,String.raw`<m>${no5c[0]}</m>`,String.raw`<m>${no5c[1]}</m>`,String.raw`<m>${no5c[2]}</m>`,String.raw`<m>${no5c[3]}</m>`]},
    {"t":String.raw`Matriks <m>\begin{pmatrix}${no6b[no6d[0]]}\end{pmatrix}</m> merupakan jenis matriks ....`,"s":[String.raw`${no6a[no6d[0]]}`,String.raw`${no6a[no6d[1]]}`,String.raw`${no6a[no6d[2]]}`,String.raw`${no6a[no6d[3]]}`,String.raw`${no6a[no6d[4]]}`]},
    {"t":String.raw`Matriks <m>\begin{pmatrix}${no6b[no6d[1]]}\end{pmatrix}</m> merupakan jenis matriks ....`,"s":[String.raw`${no6a[no6d[1]]}`,String.raw`${no6a[no6d[0]]}`,String.raw`${no6a[no6d[2]]}`,String.raw`${no6a[no6d[3]]}`,String.raw`${no6a[no6d[4]]}`]},
    {"t":String.raw`Matriks <m>\begin{pmatrix}${no6b[no6d[2]]}\end{pmatrix}</m> merupakan jenis matriks ....`,"s":[String.raw`${no6a[no6d[2]]}`,String.raw`${no6a[no6d[1]]}`,String.raw`${no6a[no6d[0]]}`,String.raw`${no6a[no6d[3]]}`,String.raw`${no6a[no6d[4]]}`]},
    {"t":String.raw`Matriks <m>\begin{pmatrix}${no6b[no6d[3]]}\end{pmatrix}</m> merupakan jenis matriks ....`,"s":[String.raw`${no6a[no6d[3]]}`,String.raw`${no6a[no6d[1]]}`,String.raw`${no6a[no6d[2]]}`,String.raw`${no6a[no6d[0]]}`,String.raw`${no6a[no6d[4]]}`]},
    {"t":String.raw`Matriks <m>\begin{pmatrix}${no6b[no6d[4]]}\end{pmatrix}</m> merupakan jenis matriks ....`,"s":[String.raw`${no6a[no6d[4]]}`,String.raw`${no6a[no6d[1]]}`,String.raw`${no6a[no6d[2]]}`,String.raw`${no6a[no6d[3]]}`,String.raw`${no6a[no6d[0]]}`]},
    {"t":String.raw`Transpose matriks <m>\begin{pmatrix}${no7[0]}&${no7[1]}&${no7[2]}\\${no7[3]}&${no7[4]}&${no7[5]}\end{pmatrix}</m> adalah ....`,"s":[String.raw`<m>\begin{pmatrix}${no7[0]}&${no7[3]}\\${no7[1]}&${no7[4]}\\${no7[2]}&${no7[5]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no7[3]}&${no7[4]}&${no7[5]}\\${no7[0]}&${no7[1]}&${no7[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no7[3]}&${no7[0]}\\${no7[4]}&${no7[1]}\\${no7[5]}&${no7[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no7[0]}&${no7[1]}&${no7[2]}\\${no7[3]}&${no7[4]}&${no7[5]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no7[2]}&${no7[1]}&${no7[0]}\\${no7[5]}&${no7[4]}&${no7[3]}\end{pmatrix}</m>`]},
    {"t":String.raw`Salah satu jenis matriks yang selalu sama dengan transposenya adalah matriks ....`,"s":[String.raw`identitas`,String.raw`persegi`,String.raw`segitiga`,String.raw`persegi panjang`,String.raw`baris`]},
    {"t":String.raw`<m>\begin{pmatrix}${no8[0]}&x+${no8[4]}\\${no8[1]}&${no8[2]}\end{pmatrix}=\begin{pmatrix}${no8[0]}&${no8[3]}\\${no8[1]}&${no8[2]}\end{pmatrix}</m><br>
    Nilai <m>x</m> adalah ....`,"s":[String.raw`${no8a[0]}`,String.raw`${no8a[1]}`,String.raw`${no8a[2]}`,String.raw`${no8a[3]}`,String.raw`${no8a[4]}`]},
    {"t":String.raw`<m>\begin{pmatrix}${no11[0]}&${no11[1]}\\${no11[2]}&${no11[3]}\end{pmatrix}+\begin{pmatrix}${no11[4]}&${no11[5]}\\${no11[6]}&${no11[7]}\end{pmatrix}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}${no11[0]+no11[4]}&${no11[1]+no11[5]}\\${no11[2]+no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]-no11[5]}\\${no11[2]+no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]+no11[5]}\\${no11[2]-no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]+no11[4]}&${no11[1]+no11[5]}\\${no11[2]-no11[6]}&${no11[3]-no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]-no11[5]}\\${no11[2]-no11[6]}&${no11[3]-no11[7]}\end{pmatrix}</m>`]},
    {"t":String.raw`<m>\begin{pmatrix}${no11[0]}&${no11[1]}\\${no11[2]}&${no11[3]}\end{pmatrix}-\begin{pmatrix}${no11[4]}&${no11[5]}\\${no11[6]}&${no11[7]}\end{pmatrix}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]-no11[5]}\\${no11[2]-no11[6]}&${no11[3]-no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]-no11[5]}\\${no11[2]+no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]-no11[4]}&${no11[1]+no11[5]}\\${no11[2]-no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]+no11[4]}&${no11[1]+no11[5]}\\${no11[2]-no11[6]}&${no11[3]-no11[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[0]+no11[4]}&${no11[1]+no11[5]}\\${no11[2]+no11[6]}&${no11[3]+no11[7]}\end{pmatrix}</m>`]},
    {"t":String.raw`<m>${no12[4]}\begin{pmatrix}${no12[0]}&${no12[1]}\\${no12[2]}&${no12[3]}\end{pmatrix}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${no12[1]*no12[4]}\\${no12[2]*no12[4]}&${no12[3]*no12[4]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${no12[1]*no12[4]}\\${-1*no12[2]*no12[4]}&${-1*no12[3]*no12[4]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${-1*no12[1]*no12[4]}\\${no12[2]*no12[4]}&${-1*no12[3]*no12[4]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${-1*no12[0]*no12[4]}&${no12[1]*no12[4]}\\${no12[2]*no12[4]}&${-1*no12[3]*no12[4]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${-1*no12[0]*no12[4]}&${-1*no12[1]*no12[4]}\\${no12[2]*no12[4]}&${no12[3]*no12[4]}\end{pmatrix}</m>`]},
    {"t":String.raw`<m>\begin{pmatrix}${no12[0]}&${no12[1]}\\${no12[2]}&${no12[3]}\end{pmatrix}\cdot \begin{pmatrix}${no12[4]}&${no12[5]}\\${no12[6]}&${no12[7]}\end{pmatrix}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]+no12[1]*no12[5]}&${no12[0]*no12[6]+no12[1]*no12[7]}\\${no12[2]*no12[4]+no12[3]*no12[5]}&${no12[2]*no12[6]+no12[3]*no12[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]+no12[1]*no12[5]}&${no12[0]*no12[6]+no12[1]*no12[7]}\\${no12[2]*no12[6]}&${no12[3]*no12[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${no12[1]*no12[5]}\\${no12[2]*no12[4]+no12[3]*no12[5]}&${no12[2]*no12[6]+no12[3]*no12[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${no12[0]*no12[6]+no12[1]*no12[7]}\\${no12[2]*no12[6]}&${no12[2]*no12[6]+no12[3]*no12[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no12[0]*no12[4]}&${no12[1]*no12[5]}\\${no12[2]*no12[6]}&${no12[3]*no12[7]}\end{pmatrix}</m>`]},
    {"t":String.raw`<m>\begin{pmatrix}${no14[0]}&${no14[1]}\\${no14[2]}&${no14[3]}\end{pmatrix}\cdot \begin{pmatrix}${no14[4]}&${no14[5]}\\${no14[6]}&${no14[7]}\end{pmatrix}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}${no14[0]*no14[4]+no14[1]*no14[5]}&${no14[0]*no14[6]+no14[1]*no14[7]}\\${no14[2]*no14[4]+no14[3]*no14[5]}&${no14[2]*no14[6]+no14[3]*no14[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no14[0]*no14[4]+no14[1]*no14[5]}&${no14[0]*no14[6]+no14[1]*no14[7]}\\${no14[2]*no14[6]}&${no14[3]*no14[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no14[0]*no14[4]}&${no14[1]*no14[5]}\\${no14[2]*no14[4]+no14[3]*no14[5]}&${no14[2]*no14[6]+no14[3]*no14[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no14[0]*no14[4]}&${no14[0]*no14[6]+no14[1]*no14[7]}\\${no14[2]*no14[6]}&${no14[2]*no14[6]+no14[3]*no14[7]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no14[0]*no14[4]}&${no14[1]*no14[5]}\\${no14[2]*no14[6]}&${no14[3]*no14[7]}\end{pmatrix}</m>`]},
    {"t":String.raw`Invers matriks <m>\begin{pmatrix}${no13[0]}&-1\\${no13[2]}&${no13[1]}\end{pmatrix}</m> adalah ....`,"s":[String.raw`<m>\begin{pmatrix}${-1*no13[1]}&-1\\${no13[2]}&${-1*no13[0]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${-1*no13[0]}&1\\${-1*no13[2]}&${-1*no13[1]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no13[1]}&1\\${-1*no13[2]}&${no13[0]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no13[1]}&${no13[2]}\\-1&${no13[0]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${-1*no13[1]}&1\\${-1*no13[2]}&${-1*no13[0]}\end{pmatrix}</m>`]},
    {"t":String.raw`Determinan matriks <m>\begin{pmatrix}${no10[0]}&${no10[1]}\\${no10[2]}&${no10[3]}\end{pmatrix}</m> adalah ....`,"s":[String.raw`${no10a[0]}`,String.raw`${no10a[1]}`,String.raw`${no10a[2]}`,String.raw`${no10a[3]}`,String.raw`${no10a[4]}`]}
    
]
var soalising =[
    {"t":String.raw`<m>\begin{pmatrix}${no8[0]}&x-${no9[0]}\\y+${no9[1]}&${no8[2]}\end{pmatrix}=\begin{pmatrix}${no8[0]}&${no9[2]}\\${no9[3]}&${no8[2]}\end{pmatrix}</m><br>
    Nilai <m>x+y</m> adalah ....`,"s":`${no9[2]+no9[0]+no9[3]-no9[1]}`},
    {"t":String.raw`Diketahui matriks <m>{B=\begin{pmatrix}${no2[0]}&${no2[1]}\\${no2[2]}&${no2[3]}\end{pmatrix}}</m>. Determinan matriks <m>B</m> adalah ....`,"s":`${no2[0]*no2[3]-no2[1]*no2[2]}`},
    {"t":String.raw`Diketahui matriks <m>{C=\begin{pmatrix}${no3[0]}&${no3[1]}\\${no3[2]}&m\end{pmatrix}}</m>. Jika <m>\det C=${no3[0]*no3[3]-no3[1]*no3[2]}</m> maka nilai <m>m</m> adalah ....`,"s":`${no3[3]}`},
    {"t":String.raw`Diketahui matriks <m>{P=\begin{pmatrix}p&${no15[0]}\\${no15[1]}&2\end{pmatrix}}</m> dan <m>{Q=\begin{pmatrix}${no15[2]}&${no15[3]}\\${no15[5]}&${no15[6]}\end{pmatrix}}</m>. Jika <m>\det P=\det Q</m> maka nilai <m>p</m> adalah ....`,"s":`${(no15[2]*no15[6]-no15[3]*no15[5]+no15[1]*no15[4])/2}`},
    {"t":String.raw`Diketahui matriks <m>{R=\begin{pmatrix}${no16[0]}&${no16[1]}\\${no16[2]}&${no16[3]}\end{pmatrix}}</m>.  <m>\det R^2=</m> ....`,"s":`${Math.pow(no16[0]*no16[3]-no16[1]*no16[2],2)}`},
    {"t":String.raw`Determinan matriks <m>\begin{pmatrix}${no17[10]}\end{pmatrix}</m> adalah ....`,"s":`${no17[0]*no17[4]*no17[8]+no17[1]*no17[5]*no17[6]+no17[2]*no17[3]*no17[7]-no17[2]*no17[4]*no17[6]-no17[0]*no17[5]*no17[7]-no17[1]*no17[3]*no17[8]}`},
    {"t":String.raw`Diketahui sistem persamaan linear dua variabel:<br> <m>\begin{aligned}${no18[2]}x-${no18[3]}y&=${no18[2]*no18[0]-no18[3]*no18[1]}\\${no18[4]}x+${no18[5]}y&=${no18[4]*no18[0]+no18[5]*no18[1]}\end{aligned}</m><br>Nilai <m>10x+10y</m> adalah ....`,"s":`${10*no18[0]+10*no18[1]}`},
    {"t":String.raw`Diketahui sistem persamaan linear dua variabel:<br> <m>\begin{aligned}x-y+z&=${no19[0]-no19[1]+no19[2]}\\x+y-z&=${no19[0]+no19[1]-no19[2]}\\x-y-z&=${no19[0]-no19[1]-no19[2]}\end{aligned}</m><br>Nilai <m>x+y+z</m> adalah ....`,"s":`${no19[0]+no19[1]+no19[2]}`},
    {"t":String.raw`Bobi membeli ${no20[0]} martabak dan ${no20[1]} burger seharga Rp${no20[0]*no20[5]+no20[1]*no20[6]}.000,00. Andre membeli ${no20[2]} martabak dan ${no20[3]} burger seharga Rp${no20[2]*no20[5]+no20[3]*no20[6]}.000,00.  Harga 1 martabak dan 1 burger adalah .....<br>
    <i>Tulis jawaban tanpa <b>Rp</b>, titik, dan koma. Jika jawabannya adalah <b>Rp123.000,00</b> maka kamu cukup menulis <b><u>123000</u></b>.</i>`,"s":`${(no20[5]+no20[6])*1000}`},
    {"t":String.raw`Udin membeli 1 gr parasetamol, 2 gr asam folat  dan 3 gr multivitamin seharga Rp${no21[0]+2*no21[1]+3*no21[2]}.000,00. Ucok membeli 2 gr parasetamol, 3 gr asam folat  dan 1 gr multivitamin seharga Rp${2*no21[0]+3*no21[1]+1*no21[2]}.000,00.  Oyen membeli 3 gr parasetamol, 1 gr asam folat  dan 2 gr multivitamin seharga Rp${3*no21[0]+1*no21[1]+2*no21[2]}.000,00. Harga 2 gr parasetamol, 2 gr asam folat  dan 2 gr multivitamin adalah .....<br>
    <i>Tulis jawaban tanpa <b>Rp</b>, titik, dan koma. Jika jawabannya adalah <b>Rp123.000,00</b> maka kamu cukup menulis <b><u>123000</u></b>.</i>`,"s":`${(2*no21[0]+2*no21[1]+2*no21[2])*1000}`}    
]