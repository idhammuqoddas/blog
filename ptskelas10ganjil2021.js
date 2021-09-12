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
    {"t":String.raw`<m>\left|-\dfrac14\right|=</m> ....`,"s":[String.raw`<m>\dfrac14</m>`,String.raw`<m>-\dfrac14</m>`,String.raw`<m>\dfrac12</m>`,String.raw`<m>-\dfrac12</m>`,String.raw`<m>\dfrac12</m> atau <m>-\dfrac12</m>`]},
    {"t":String.raw`Jika <m>a\geq 0</m> maka <m>|a|=</m> ....`,"s":[String.raw`<m>a</m>`,String.raw`<m>-a</m>`,String.raw`<m>a</m> atau <m>-a</m>`,String.raw`<m>0</m>`,String.raw`<m>1</m>`]},
    {"t":String.raw`Jika <m>a\lt 0</m> maka <m>|a|=</m> ....`,"s":[String.raw`<m>-a</m>`,String.raw`<m>a</m>`,String.raw`<m>a</m> atau <m>-a</m>`,String.raw`<m>0</m>`,String.raw`<m>1</m>`]},
    {"t":String.raw`grafik dari fungsi <m>f(x)=|x-${no1}|</m> adalah ....`,"s":[no1a[0],no1a[1],no1a[2],no1a[3],no1a[4]]},
    {"t":String.raw`grafik dari fungsi <m>f(x)=|x+${no1}|</m> adalah ....`,"s":[no1a[1],no1a[0],no1a[2],no1a[3],no1a[4]]},
    {"t":String.raw`Definisi dari nilai mutlak <m>|x-${no1}|</m> adalah ....`,"s":[String.raw`<m>\begin{cases}x-${no1},&\text{ jika }x\geq${no1}\\-(x-${no1}),&\text{ jika }x\lt${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x-${no1},&\text{ jika }x\geq-${no1}\\-(x-${no1}),&\text{ jika }x\lt-${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x-${no1},&\text{ jika }x\lt${no1}\\-(x-${no1}),&\text{ jika }x\geq${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x-${no1},&\text{ jika }x\lt-${no1}\\-(x-${no1}),&\text{ jika }x\geq-${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x-${no1},&\text{ jika }x\geq0\\-(x-${no1}),&\text{ jika }x\lt0\end{cases}</m>`]},
    {"t":String.raw`Definisi dari nilai mutlak <m>|x+${no1}|</m> adalah ....`,"s":[String.raw`<m>\begin{cases}x+${no1},&\text{ jika }x\geq-${no1}\\-(x+${no1}),&\text{ jika }x\lt-${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x+${no1},&\text{ jika }x\geq${no1}\\-(x+${no1}),&\text{ jika }x\lt${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x+${no1},&\text{ jika }x\lt${no1}\\-(x+${no1}),&\text{ jika }x\geq${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x+${no1},&\text{ jika }x\lt-${no1}\\-(x+${no1}),&\text{ jika }x\geq-${no1}\end{cases}</m>`,String.raw`<m>\begin{cases}x+${no1},&\text{ jika }x\geq0\\-(x+${no1}),&\text{ jika }x\lt0\end{cases}</m>`]},
    {"t":String.raw`Himpunan penyelesaian dari persamaan <m>{|x-${no2[0]}|=${no2[1]}}</m> adalah ....`,"s":[String.raw`<m>\left\{${no2[0]-no2[1]},${no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[1]-no2[0]},${no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[0]-no2[1]}\right\}</m>`,String.raw`<m>\left\{${-no2[0]-no2[1]},${-no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[0]+no2[1]}\right\}</m>`]},
    {"t":String.raw`Himpunan penyelesaian dari persamaan <m>{|x+${no2[0]}|=${no2[1]}}</m> adalah ....`,"s":[String.raw`<m>\left\{${-no2[0]-no2[1]},${-no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[1]-no2[0]},${no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[0]-no2[1]}\right\}</m>`,String.raw`<m>\left\{${no2[0]-no2[1]},${-no2[0]+no2[1]}\right\}</m>`,String.raw`<m>\left\{${-no2[0]+no2[1]}\right\}</m>`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\lt|x-${no3[1]}|}</m> adalah ....`,"s":[String.raw`${no3[2]}`,String.raw`${no3[3]}`,String.raw`${no3[4]}`,String.raw`${no3[5]}`,String.raw`${no3[6]}`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\leq|x-${no3[1]}|}</m> adalah ....`,"s":[String.raw`${no4[0]}`,String.raw`${no4[1]}`,String.raw`${no4[2]}`,String.raw`${no4[3]}`,String.raw`${no4[4]}`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\lt ${no3[1]}}</m> adalah ....`,"s":[String.raw`<m>${no3[0]-no3[1]}\lt x\lt ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\leq x\lt ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\lt x\leq ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\leq x\leq ${no3[0]+no3[1]}</m>`,String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\leq ${no3[1]}}</m> adalah ....`,"s":[String.raw`<m>${no3[0]-no3[1]}\leq x\leq ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\leq x\lt ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\lt x\leq ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\lt x\lt ${no3[0]+no3[1]}</m>`,String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\gt ${no3[1]}}</m> adalah ....`,"s":[String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`,String.raw`<m>x\leq ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`,String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\geq ${no3[0]+no3[1]}</m>`,String.raw`<m>x\leq ${no3[0]-no3[1]}</m> atau <m>x\geq ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\lt x\lt ${no3[0]+no3[1]}</m>`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\geq ${no3[1]}}</m> adalah ....`,"s":[String.raw`<m>x\leq ${no3[0]-no3[1]}</m> atau <m>x\geq ${no3[0]+no3[1]}</m>`,String.raw`<m>x\leq ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`,String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\geq ${no3[0]+no3[1]}</m>`,String.raw`<m>x\lt ${no3[0]-no3[1]}</m> atau <m>x\gt ${no3[0]+no3[1]}</m>`,String.raw`<m>${no3[0]-no3[1]}\lt x\lt ${no3[0]+no3[1]}</m>`]},
    {"t":String.raw`Penyelesaian dari pertidaksamaan <m>{|x-${no3[0]}|\gt|x-${no3[1]}|}</m> adalah ....`,"s":[String.raw`${no5[0]}`,String.raw`${no5[1]}`,String.raw`${no3[4]}`,String.raw`${no3[5]}`,String.raw`${no3[6]}`]}    
]
var soalising =[
    {"t":String.raw`<m>|-${no6}|=</m> ....`,"s":`${no6}`},
    {"t":String.raw`<m>|-${no6}|-|-${no7}|</m> ....`,"s":`${no6-no7}`},
    {"t":String.raw`Nilai <m>x</m> yang memenuhi <m>|x-${no6}|=0</m> adalah ....`,"s":`${no6}`},
    {"t":String.raw`Nilai <m>x</m> yang memenuhi <m>|x-${no7}|\leq 0</m> adalah ....`,"s":`${no7}`}
]