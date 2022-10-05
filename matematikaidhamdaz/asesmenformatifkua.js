function pembagi(n) {
    if (n < 1)
        throw "Argument error";
    var small = [];
    var large = [];
    var end = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= end; i++) {
        if (n % i == 0) {
            small.push(i);
            if (i * i != n)  // Don't include a square root twice
                large.push(n / i);
        }
    }
    large.reverse();
    return small.concat(large);
}

FaktorTerkecil = function(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (let i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
   }
   
   // Optimized version of FaktorTerkecil for Opera, Chrome, Firefox.
   // In these browsers, "i divides n" is much faster as
   // (q=n/i)==Math.floor(q)  than  n%i==0
   if (
       navigator.userAgent.indexOf('Opera')  !=-1
    || navigator.userAgent.indexOf('Chrome') !=-1
    || navigator.userAgent.indexOf('Firefox')!=-1 )
   {
    FaktorTerkecil = function(n) {
     if (isNaN(n) || !isFinite(n)) return NaN;   
     if (n==0) return 0;  
     if (n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     var q, m = Math.sqrt(n);
     for (let i=7;i<=m;i+=30) {
      if ((q=n/i)==Math.floor(q))      return i;
      if ((q=n/(i+4))==Math.floor(q))  return i+4;
      if ((q=n/(i+6))==Math.floor(q))  return i+6;
      if ((q=n/(i+10))==Math.floor(q)) return i+10;
      if ((q=n/(i+12))==Math.floor(q)) return i+12;
      if ((q=n/(i+16))==Math.floor(q)) return i+16;
      if ((q=n/(i+22))==Math.floor(q)) return i+22;
      if ((q=n/(i+24))==Math.floor(q)) return i+24;
     }
     return n;
    }
   }
   
   // Optimized version for Internet Explorer avoids IE's 
   // "slow script" warning at 5000000 script statements
   // by grouping 48 divisibility checks into a single statement
   
   if (navigator.userAgent.indexOf('MSIE')!=-1)
   {
    FaktorTerkecil = function(n){
     if (isNaN(n)) return NaN;  
     if (n==0) return 0;  
     if (!isFinite(n) || n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     if (n%7==0) return 7;  
     var m = Math.sqrt(n);
     for (let i=11;i<=m;i+=210) {
      if (n%i && n%(i+2) && n%(i+6) && n%(i+8)&& n%(i+12)&& n%(i+18)&& n%(i+20)&& n%(i+26)
      && n%(i+30) && n%(i+32) && n%(i+36) && n%(i+42) && n%(i+48) && n%(i+50) && n%(i+56)
      && n%(i+60) && n%(i+62) && n%(i+68) && n%(i+72) && n%(i+78) && n%(i+86)
      && n%(i+90) && n%(i+92) && n%(i+96) && n%(i+98) && n%(i+102)&& n%(i+110)&& n%(i+116)
      && n%(i+120)&& n%(i+126)&& n%(i+128)&& n%(i+132)&& n%(i+138)&& n%(i+140)&& n%(i+146)
      && n%(i+152)&& n%(i+156)&& n%(i+158)&& n%(i+162)&& n%(i+168)&& n%(i+170)&& n%(i+176)
      && n%(i+180)&& n%(i+182)&& n%(i+186)&& n%(i+188)&& n%(i+198)&& n%(i+200)
      ) continue;
      for (let j=0;j<210;j+=2) {if (n%(i+j)==0) return i+j; }
     }
     return n;
    }
   }
   
   // function cekPrima(n) returns:
   // - false if n is NaN or not a finite integer
   // - true  if n is prime
   // - false otherwise
   
   cekPrima = function(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n==FaktorTerkecil(n)) return true;
    return false;
   }
var tandfull = ["+","-"];
var pakso1 = [100,20,50,10];
var pakja1 = [String.raw`2(<em>p</em> + <em>q</em>)`,String.raw`2<em>p</em> + <em>q</em>`,String.raw`<em>p</em> + 2<em>q</em>`,String.raw`<em>p</em> + <em>q</em>`];
var no1 = acan(110,120);

var no2 = [acan(10,15)];
no2[1]=acan(1,Math.ceil((80-5*no2[0])/3)-1);
no2[2]=80-5*no2[0]-3*no2[1];
var frekno2 = [no2[0],no2[0]+no2[1],no2[0]+no2[1]+no2[2],no2[0]+no2[1],no2[0]]
var fk2 = [no2[0],2*no2[0]+no2[1],3*no2[0]+2*no2[1]+no2[2],4*no2[0]+3*no2[1]+no2[2],80];
var kelaske2 = 0;
if(fk2[1]>=60){
    kelaske2=1;
}
else if(fk2[2]>=60){
    kelaske2 = 2;
}
else if(fk2[3]>=60){
    kelaske2 = 3;
}else{kelaske2=4};
var tb2 = 20*kelaske2+0.5;
var pjgkls = 20;
var jawakhirno2 = tb2+pjgkls*((60-fk2[kelaske2-1])/frekno2[kelaske2]);

 var no3=ac(5);
 var kelaske3 = 0;
if(fk2[1]>=45){
    kelaske3=1;
}
else if(fk2[2]>=45){
    kelaske3 = 2;
}
else if(fk2[3]>=45){
    kelaske3 = 3;
}else{kelaske3=4};
var tb3 = 20*kelaske3+0.5;
var jawakhirno3 = tb3+pjgkls*((60-fk2[kelaske3-1])/frekno2[kelaske3]);

 var no4=[ac(5)];
var pakso4 = [String.raw`\sqrt2\times\sqrt{10}`,String.raw`2\sqrt2\times\sqrt{10}`,String.raw`3\sqrt2\times\sqrt{10}`,String.raw`2\sqrt2\times2\sqrt{10}`,String.raw`2\sqrt2\times3\sqrt{10}`];
var pakja4 = [String.raw`2\sqrt5`,String.raw`4\sqrt5`,String.raw`6\sqrt5`,String.raw`8\sqrt5`,String.raw`12\sqrt5`];
no4[1]=pakja4[no4[0]];
pakja4.splice(no4[0],1);

var soalpg = [
    {"t":String.raw`Perhatikan tabel Tinggi Badan Siswa berikut ini.<br><table class="w3-table w3-bordered tengah">
    <tr>
      <th>Tinggi Badan Siswa</th>
      <th>Frekuensi</th>
      <th>f<sub>k</sub></th>
    </tr>
    <tr>
      <td>${no1} - ${no1+5}</td>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <td>${no1+6} - ${no1+11}</td>
      <td>10</td>
      <td>15</td>
    </tr>
    <tr>
      <td>&vellip;</td>
      <td>&vellip;</td>
      <td>&vellip;</td>
    </tr>
    <tr>
    <td>${no1+84} - ${no1+89}</td>
    <td>8</td>
    <td>98</td>
  </tr>
  <tr>
  <td>${no1+90} - ${no1+95}</td>
  <td>2</td>
  <td>100</td>
</tr>

  </table><br>
  maka P<sub>98</sub> = ....`,"s":[String.raw`${no1+89},5`,no1+89,no1+90,String.raw`${no1+90},5`,`Tidak bisa ditentukan.`]}
]
var soalising =[
    {"t":String.raw`Perhatikan tabel Nilai Siswa Berikut.<br><table class="w3-table w3-bordered tengah">
    <tr>
      <th>Tinggi Badan Siswa</th>
      <th>Frekuensi</th>
    </tr>
    <tr>
      <td>1 - 20</td>
      <td>${no2[0]}</td>
    </tr>
    <tr>
      <td>21 - 40</td>
      <td>${no2[0]+no2[1]}</td>
    </tr>
    <tr>
      <td>41 - 60</td>
      <td>${no2[0]+no2[1]+no2[2]}</td>
    </tr>
    <tr>
    <td>61 - 80</td>
    <td>${no2[0]+no2[1]}</td>
  </tr>
  <tr>
  <td>81 - 100</td>
  <td>${no2[0]}</td>
</tr>
  </table><br>Jika hanya <m>\dfrac14</m> dari jumlah siswa yang lulus, maka nilai minimal agar lulus adalah ....`,"s":jawakhirno2},
    {"t":String.raw`dari soal nomor 2, jika hanya 45% siswa yang lulus, maka nilai terendah siswa yang lulus adalah ....`,"s":jawakhirno3},
    {"t":String.raw`nilai desil ke-${no4} akan sama dengan persentil ke- ....`,"s":no4*10}
]