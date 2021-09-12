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

var no1 = 1+ac(9);
var no1a=[
    String.raw`<svg id="f817abb7-e4a6-4f6d-b1c9-5a0e4e8896f9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.4 95.21" width="50%" height="50%"><title>grafikmutlak</title><line y1="49.75" x2="87.59" y2="49.75" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M95.45,50.25a16.62,16.62,0,0,0-4.7,2.62l0.95-2.62-0.95-2.62A16.61,16.61,0,0,0,95.45,50.25Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="95.21" x2="45.37" y2="7.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M49.92,4.8a16.62,16.62,0,0,0,2.62,4.7l-2.62-.95L47.3,9.5A16.61,16.61,0,0,0,49.92,4.8Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="62.31" y1="49.75" x2="62.31" y2="52.72" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><text transform="translate(59.38 61.81)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">${no1}</text><line x1="62.31" y1="49.75" x2="88.61" y2="23.49" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><line x1="62.31" y1="49.75" x2="19.66" y2="6.99" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><text transform="translate(87.07 57.48)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">x</text><text transform="translate(48.85 9.97)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">y</text></svg>`,
    String.raw`<svg id="40f0b27f-f3e7-43e2-9e3b-ebc6615af577" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.4 95.21" width="50%" height="50%"><title>grafikmutlak</title><line y1="49.75" x2="87.59" y2="49.75" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M95.45,50.25a16.62,16.62,0,0,0-4.7,2.62l0.95-2.62-0.95-2.62A16.61,16.61,0,0,0,95.45,50.25Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="95.21" x2="45.37" y2="7.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M49.92,4.8a16.62,16.62,0,0,0,2.62,4.7l-2.62-.95L47.3,9.5A16.61,16.61,0,0,0,49.92,4.8Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="29.17" y1="49.75" x2="29.17" y2="52.72" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><text transform="translate(26.23 61.81)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">-${no1}</text><line x1="29.17" y1="49.75" x2="72.54" y2="6.44" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><line x1="29.17" y1="49.48" x2="1.59" y2="21.84" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><text transform="translate(87.07 57.48)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">x</text><text transform="translate(48.85 9.97)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">y</text></svg>`,
    String.raw`<svg id="642fa976-bc99-4bbe-87ca-88a2acf85f15" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.4 95.21" width="50%" height="50%"><title>grafikmutlak</title><line y1="49.75" x2="87.59" y2="49.75" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M95.45,50.25a16.62,16.62,0,0,0-4.7,2.62l0.95-2.62-0.95-2.62A16.61,16.61,0,0,0,95.45,50.25Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="95.21" x2="45.37" y2="7.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M49.92,4.8a16.62,16.62,0,0,0,2.62,4.7l-2.62-.95L47.3,9.5A16.61,16.61,0,0,0,49.92,4.8Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="42.48" y1="67.83" x2="45.45" y2="67.83" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><text transform="translate(30.57 71.18)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">-${no1}</text><line x1="45.37" y1="67.83" x2="88.74" y2="24.52" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><line x1="70.29" y1="92.72" x2="45.45" y2="67.83" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><text transform="translate(87.07 57.48)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">x</text><text transform="translate(48.85 9.97)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">y</text></svg>`,
    String.raw`<svg id="15185816-fe5b-4247-abf7-da7c5fd382d5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.4 95.21" width="50%" height="50%"><title>grafikmutlak</title><line y1="49.75" x2="87.59" y2="49.75" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M95.45,50.25a16.62,16.62,0,0,0-4.7,2.62l0.95-2.62-0.95-2.62A16.61,16.61,0,0,0,95.45,50.25Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="95.21" x2="45.37" y2="7.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M49.92,4.8a16.62,16.62,0,0,0,2.62,4.7l-2.62-.95L47.3,9.5A16.61,16.61,0,0,0,49.92,4.8Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="42.48" y1="37.49" x2="45.45" y2="37.49" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><text transform="translate(35.46 40.84)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">${no1}</text><line x1="45.37" y1="37.49" x2="73.31" y2="9.59" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><line x1="84.53" y1="76.66" x2="45.45" y2="37.49" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><text transform="translate(87.07 57.48)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">x</text><text transform="translate(48.85 9.97)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">y</text></svg>`,
    String.raw`<svg id="4663567b-d4f8-41be-bbe6-a2b6134e6bc9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.4 95.21" width="50%" height="50%"><title>grafikmutlak</title><line y1="49.75" x2="87.59" y2="49.75" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M95.45,50.25a16.62,16.62,0,0,0-4.7,2.62l0.95-2.62-0.95-2.62A16.61,16.61,0,0,0,95.45,50.25Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="95.21" x2="45.37" y2="7.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><path d="M49.92,4.8a16.62,16.62,0,0,0,2.62,4.7l-2.62-.95L47.3,9.5A16.61,16.61,0,0,0,49.92,4.8Z" transform="translate(-4.55 -0.5)" style="fill:#231f20"/><line x1="45.37" y1="49.5" x2="86.66" y2="8.26" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><line x1="45.37" y1="49.75" x2="6.29" y2="10.58" style="fill:none;stroke:#be1e2d;stroke-miterlimit:10"/><text transform="translate(87.07 57.48)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">x</text><text transform="translate(48.85 9.97)" style="font-size:12px;fill:#231f20;font-family:Times New Roman;font-style:italic">y</text></svg>`
]

var no2 = [1+ac(9),1+ac(9)];
while(no2[0]==no2[1]){
    no2[0]=1+ac(9);
    no2[1]=1+ac(9);
}

var no3 = [2*ac(5)+1,2*ac(5)+1];
var no4=[];
var no5 = [];
while(no3[0]==no3[1]){
    no3[0]=2*ac(5)+1;
    no3[1]=2*ac(5)+1;
}
if(no3[0]<no3[1]){
    no3[2]=String.raw`<m>x\lt ${(no3[0]+no3[1])/2}</m>`;
    no3[3]=String.raw`<m>x\gt ${(no3[0]+no3[1])/2}</m>`;
    no4[0]=String.raw`<m>x\leq ${(no3[0]+no3[1])/2}</m>`;
    no4[1]=String.raw`<m>x\geq ${(no3[0]+no3[1])/2}</m>`;
    no5[0]=String.raw`<m>x\gt ${(no3[0]+no3[1])/2}</m>`;
    no5[1]=String.raw`<m>x\lt ${(no3[0]+no3[1])/2}</m>`;
}else{    no3[2]=String.raw`<m>x\gt ${(no3[0]+no3[1])/2}</m>`;
no3[3]=String.raw`<m>x\lt ${(no3[0]+no3[1])/2}</m>`;
no4[0]=String.raw`<m>x\geq ${(no3[0]+no3[1])/2}</m>`;
no4[1]=String.raw`<m>x\leq ${(no3[0]+no3[1])/2}</m>`;
no5[0]=String.raw`<m>x\lt ${(no3[0]+no3[1])/2}</m>`;
no5[1]=String.raw`<m>x\gt ${(no3[0]+no3[1])/2}</m>`;
}
no3[4]=String.raw`<m>x\geq ${(no3[0]+no3[1])/2}</m>`;
no3[5]=String.raw`<m>x\leq ${(no3[0]+no3[1])/2}</m>`;
no3[6]=String.raw`<m>x= ${(no3[0]+no3[1])/2}</m>`;
no4[2]=String.raw`<m>x\lt ${(no3[0]+no3[1])/2}</m>`;
no4[3]=String.raw`<m>x\gt ${(no3[0]+no3[1])/2}</m>`;
no4[4]=String.raw`<m>x= ${(no3[0]+no3[1])/2}</m>`;


var no6=1+ac(9);

var no7=1+ac(9);

var soalpg = [
    {"t":String.raw`Perhatikan kubus berikut.<br><svg id="6eb3588e-70ce-43e0-890f-2c5bb78b8111" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.09 90.79" width="60%" height="60%"><title>kubus</title><rect x="7.82" y="26.03" width="52.03" height="52.03" style="fill:#fff;stroke:#231f20;stroke-miterlimit:10"/><line x1="24.46" y1="11.62" x2="76.49" y2="11.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="76.49" y1="63.65" x2="76.49" y2="11.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="7.82" y1="26.03" x2="24.46" y2="11.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="59.85" y1="26.03" x2="76.49" y2="11.62" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="59.85" y1="78.06" x2="76.49" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="76.49" y1="63.65" x2="73.99" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="68.76" y1="63.65" x2="29.57" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:5.225330352783203,5.225330352783203"/><line x1="26.96" y1="63.65" x2="24.46" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="24.46" y1="11.62" x2="24.46" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:5"/><line x1="7.82" y1="78.06" x2="24.46" y2="63.65" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:5"/><text transform="translate(2.78 87.79)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">A</text><text transform="translate(57.62 87.79)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">B</text><text transform="translate(77.34 70.86)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">C</text><text transform="translate(14.62 65.17)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">D</text><text transform="translate(0 30.32)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">E</text><text transform="translate(60.42 34.38)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">F</text><text transform="translate(77.34 13.12)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">G</text><text transform="translate(19.58 10.04)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">H</text><text transform="translate(26.99 87.79)" style="font-size:12px;fill:#2e3192;font-family:Myriad Pro">10</text></svg><br> Jika <m>AB=10</m> maka jarak titik A ke titik F adalah ....`,"s":[String.raw`<m>10\sqrt2</m>`,String.raw`<m>5\sqrt5</m>`,String.raw`<m>\dfrac{10}3\sqrt6</m>`,String.raw`<m>5\sqrt2</m>`,String.raw`<m>10\sqrt3</m>`]},
    {"t":String.raw`Dari kubus no 1, jarak titik D ke titik G adalah ....`,"s":[String.raw`<m>10\sqrt3</m>`,String.raw`<m>10\sqrt2</m>`,String.raw`<m>5\sqrt5</m>`,String.raw`<m>\dfrac{10}3\sqrt6</m>`,String.raw`<m>5\sqrt2</m>`]},
    {"t":String.raw`Dari kubus no 1, titik P berada di tengah BF. Jarak titik A ke titik P adalah ....`,"s":[String.raw`<m>5\sqrt5</m>`,String.raw`<m>10\sqrt3</m>`,String.raw`<m>10\sqrt2</m>`,String.raw`<m>\dfrac{10}3\sqrt6</m>`,String.raw`<m>5\sqrt2</m>`]},
    {"t":String.raw`Dari kubus no 1, jarak titik A ke garis BE adalah ....`,"s":[String.raw`<m>5\sqrt2</m>`,String.raw`<m>10\sqrt3</m>`,String.raw`<m>10\sqrt2</m>`,String.raw`<m>\dfrac{10}3\sqrt6</m>`,String.raw`<m>5\sqrt5</m>`]},
    {"t":String.raw`Dari kubus no 1, jarak titik A ke garis HB adalah ....`,"s":[String.raw`<m>\dfrac{10}3\sqrt6</m>`,String.raw`<m>5\sqrt2</m>`,String.raw`<m>10\sqrt3</m>`,String.raw`<m>10\sqrt2</m>`,String.raw`<m>5\sqrt5</m>`]},
    {"t":String.raw`Perhatikan balok berikut.<br><svg id="1e5bb0b0-faf3-452e-8ece-a5668f533808" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.13 70.69" width="60%" height="60%"><title>balok</title><rect x="8" y="21.97" width="67.69" height="35.37" style="fill:#fff;stroke:#231f20;stroke-miterlimit:10"/><line x1="21.97" y1="11.6" x2="89.66" y2="11.6" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="89.66" y1="46.97" x2="89.66" y2="11.6" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="8" y1="21.97" x2="21.97" y2="11.6" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="75.69" y1="21.97" x2="89.66" y2="11.6" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="75.69" y1="57.33" x2="89.66" y2="46.27" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><line x1="21.97" y1="11.6" x2="21.97" y2="46.97" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:4"/><line x1="89.66" y1="46.97" x2="21.97" y2="46.97" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:4"/><line x1="8" y1="57.33" x2="21.97" y2="46.97" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-dasharray:4"/><text transform="translate(2.83 66.83)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">A</text><text transform="translate(72.45 66.83)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">B</text><text transform="translate(90.49 52.15)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">C</text><text transform="translate(12.56 48.88)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">D</text><text transform="translate(0 25.57)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">E</text><text transform="translate(76.64 30.74)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">F</text><text transform="translate(87.55 10.04)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">G</text><text transform="translate(16.92 10.04)" style="font-size:12px;fill:#231f20;font-family:Myriad Pro">H</text><text transform="translate(40.07 67.69)" style="font-size:12px;fill:#2e3192;font-family:Myriad Pro">5</text><text transform="translate(82.67 60.85)" style="font-size:12px;fill:#2e3192;font-family:Myriad Pro">3</text><text transform="translate(91.98 31.62)" style="font-size:12px;fill:#2e3192;font-family:Myriad Pro">4</text></svg><br>Jika <m>AB=5</m>, <m>BC=3</m>, dan <m>CG=4</m>, maka jarak titik A ke titik F adalah ....`,"s":[String.raw`<m>\sqrt{41}</m>`,String.raw`<m>\sqrt{34}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>5</m>`,String.raw`<m>\dfrac{20}{41}\sqrt{41}</m>`]},
    {"t":String.raw`Dari balok no 6, jarak titik dari B ke G adalah ....`,"s":[String.raw`<m>5</m>`,String.raw`<m>\sqrt{41}</m>`,String.raw`<m>\sqrt{34}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\dfrac{20}{41}\sqrt{41}</m>`]},
    {"t":String.raw`Dari balok no 6, jarak titik dari A ke C adalah ....`,"s":[String.raw`<m>\sqrt{34}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\sqrt{41}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\dfrac{20}{41}\sqrt{41}</m>`]},
    {"t":String.raw`Dari balok no 6, jarak titik dari A ke garis BE adalah ....`,"s":[String.raw`<m>\dfrac{20}{41}\sqrt{41}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\sqrt{41}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\sqrt{34}</m>`]},
    {"t":String.raw`Dari balok no 6, jarak titik dari C ke garis BG adalah ....`,"s":[String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\dfrac{20}{41}\sqrt{41}</m>`,String.raw`<m>\sqrt{41}</m>`,String.raw`<m>\dfrac{12}5</m>`,String.raw`<m>\sqrt{34}</m>`]}
]
var soalising =[
    {"t":String.raw`Dari kubus no 1, jarak titik B ke garis EF adalah ....`,"s":`10`},
    {"t":String.raw`Dari kubus no 1, jarak titik H ke garis CG adalah ....`,"s":`10`},
    {"t":String.raw`Dari kubus no 1, jarak titik C ke bidang EFGH adalah ....`,"s":`10`},
    {"t":String.raw`Dari kubus no 1, jarak titik F ke bidang CDHG adalah ....`,"s":`10`},
    {"t":String.raw`Dari balok no 6, jarak titik B ke garis EF adalah ....`,"s":`4`},
    {"t":String.raw`Dari balok no 6, jarak titik E ke garis BF adalah ....`,"s":`5`},
    {"t":String.raw`Dari balok no 6, jarak titik A ke garis DH adalah ....`,"s":`3`},
    {"t":String.raw`Dari balok no 6, jarak titik A ke garis BCGF adalah ....`,"s":`5`},
    {"t":String.raw`Dari balok no 6, jarak titik G ke garis ABCD adalah ....`,"s":`4`},
    {"t":String.raw`Dari balok no 6, jarak titik F ke garis CDHG adalah ....`,"s":`3`}
]