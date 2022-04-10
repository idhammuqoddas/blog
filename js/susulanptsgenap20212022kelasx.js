var arrayutama = [0,1,2,3,4];
var himp = [];


var angka1 = [acan(2,9),plusminus()*acan(2,9)];
if(angka1[1]<0){
    angka1[2]="";
    angka1[3]="-";
}else{angka1[2]="-";
angka1[3]=""}
var angka2 = [acan(2,9),plusminus()*acan(1,9),acan(2,9),plusminus()*acan(1,9)];
while(angka2[0]==angka2[2]&&Math.abs(angka2[1])==Math.abs(angka2[3])){
    angka2 = [acan(2,9),plusminus()*acan(1,9),acan(2,9),plusminus()*acan(1,9)]
}
var pil2 = [String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[0]*angka2[3]+angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[0]*angka2[3]-angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[0]*angka2[3]+angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[0]*angka2[3]-angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[1]*angka2[2]+angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[1]*angka2[2]-angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[1]*angka2[2]+angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[1]*angka2[2]-angka2[3])}$`];
pil2 = [...new Set(pil2)];
var pil3 = [String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[1]*angka2[2]+angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[1]*angka2[2]-angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[1]*angka2[2]+angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[1]*angka2[2]-angka2[3])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[0]*angka2[3]+angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(angka2[0]*angka2[3]-angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[0]*angka2[3]+angka2[1])}$`,String.raw`$${angka2[0]*angka2[2]}x${konst(-angka2[0]*angka2[3]-angka2[1])}$`];
pil3 = [...new Set(pil3)];
var angka4 = [acan(2,9),plusminus()*acan(1,9),acan(2,9),plusminus()*acan(1,9)];
var pil4 = [String.raw`$${angka4[2]}x${tanda1(angka4[3])}$`,String.raw`$${angka4[2]}x${tanda1(-angka4[3])}$`,String.raw`$${angka4[2]}x${konst(angka4[0]*angka4[3]+angka4[1]-angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(angka4[0]*angka4[3]+angka4[1]+angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(angka4[0]*angka4[3]-angka4[1]+angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(-angka4[0]*angka4[3]+angka4[1]-angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(angka4[0]*angka4[3]-angka4[1]-angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(-angka4[0]*angka4[3]-angka4[1]-angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(-angka4[0]*angka4[3]-angka4[1]-angka4[1]*angka4[2])}$`,String.raw`$${angka4[2]}x${konst(-angka4[0]*angka4[3]-angka4[1]+angka4[1]*angka4[2])}$`];
pil4 = [...new Set(pil4)];
var angka5 = [acan(2,9),plusminus()*acan(1,9),acan(2,9),plusminus()*acan(1,9)];
var pil5 = [String.raw`$${angka5[2]}x${tanda1(angka5[3])}$`,String.raw`$${angka5[2]}x${konst(Math.floor((angka5[1]*angka5[2]+angka5[3]-angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((angka5[1]*angka5[2]+angka5[3]-angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${tanda1(-angka5[3])}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((angka5[1]*angka5[2]+angka5[3]+angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((angka5[1]*angka5[2]-angka5[3]+angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((angka5[1]*angka5[2]-angka5[3]-angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((-angka5[1]*angka5[2]+angka5[3]+angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((-angka5[1]*angka5[2]+angka5[3]-angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((-angka5[1]*angka5[2]-angka5[3]+angka5[1])/angka5[0]))}$`,String.raw`$${angka5[2]}x${konst(Math.ceil((-angka5[1]*angka5[2]-angka5[3]-angka5[1])/angka5[0]))}$`];
pil5 = [...new Set(pil5)];
var angka6 = [acan(2,9),plusminus()*acan(1,9)];
var angka7 = [acan(2,9),acan(2,9),acan(2,9),acan(2,9)];
var pil7 = [String.raw`$\dfrac{${angka7[3]}x-${angka7[1]}}{${angka7[2]}x-${angka7[0]}}$`,String.raw`$\dfrac{${angka7[2]}x-${angka7[3]}}{${angka7[0]}x-${angka7[1]}}$`,String.raw`$\dfrac{${angka7[1]}x-${angka7[0]}}{${angka7[2]}x-${angka7[3]}}$`,String.raw`$\dfrac{${angka7[0]}x-${angka7[1]}}{${angka7[3]}x-${angka7[2]}}$`,String.raw`$\dfrac{${angka7[1]}x-${angka7[0]}}{${angka7[3]}x-${angka7[2]}}$`,String.raw`$\dfrac{${angka7[0]}x+${angka7[1]}}{${angka7[2]}x-${angka7[3]}}$`,String.raw`$\dfrac{${angka7[0]}x+${angka7[1]}}{${angka7[2]}x+${angka7[3]}}$`,String.raw`$\dfrac{${angka7[0]}x-${angka7[1]}}{${angka7[2]}x+${angka7[3]}}$`];
pil7 = [...new Set(pil7)];
var angka9 = [acan(2,9),plusminus()*acan(1,9),plusminus()*acan(1,9)];
var angka10 = [acan(2,9),plusminus()*acan(1,9),plusminus()*acan(1,9)];
var angka11 = [acan(2,9),plusminus()*acan(1,9),plusminus()*acan(1,9)];
var angka14 = [acan(2,9),plusminus()*acan(1,9),plusminus()*acan(1,9)];

var soalpg = [
    [String.raw`Domain dari fungsi $f(x)=\sqrt{${angka1[0]}x${tanda1(angka1[1])}}$ adalah ....`,String.raw`$\left\{x|x\geq${angka1[2]}${pecahan(Math.abs(angka1[1]),angka1[0])}\right\}$`,String.raw`$\left\{x|x\geq${angka1[3]}${pecahan(Math.abs(angka1[1]),angka1[0])}\right\}$`,String.raw`$\left\{x|x\in R\right\}$`,String.raw`$\left\{x|x\geq ${angka1[1]}\right\}$`,String.raw`$\left\{x|x\geq ${-angka1[1]}\right\}$`],
    [String.raw`Diketahui $f(x)=${angka2[0]}x${tanda1(angka2[1])}$ dan $g(x)=${angka2[2]}x${tanda1(angka2[3])}$. Maka $\left(f\circ g\right)(x)  =$ ....`,pil2[0],pil2[1],pil2[2],pil2[3],pil2[4]],
    [String.raw`Dari soal nomor 2, $\left(g\circ f\right)(x)=$ ....`,pil3[0],pil3[1],pil3[2],pil3[3],pil3[4]],
    [String.raw`Diketahui $f(x)=${angka4[0]}x${tanda1(angka4[1])}$ dan $\left(f\circ g\right)(x)=${angka4[0]*angka4[2]}x${konst(angka4[0]*angka4[3]+angka4[1])}$. Maka $g(x)=$ ....`,pil4[0],pil4[1],pil4[2],pil4[3],pil4[4]],
    [String.raw`Diketahui $f(x)=${angka5[0]}x${tanda1(angka5[1])}$ dan $\left(g\circ f\right)(x)=${angka5[0]*angka5[2]}x${konst(angka5[1]*angka5[2]+angka5[3])}$. Maka $g(x)=$ ....`,pil5[0],pil5[1],pil5[2],pil5[3],pil5[4]],
    [String.raw`Diketahui $f(x)=${angka6[0]}x${tanda1(angka6[1])}$, maka $f^{-1}(x)=$ ....`,String.raw`$\dfrac{x${tanda1(-angka6[1])}}{${angka6[0]}}$`,String.raw`$\dfrac{x${tanda1(angka6[1])}}{${angka6[0]}}$`,String.raw`$${angka6[0]}x${tanda1(-angka6[1])}$`,String.raw`$-${angka6[0]}x${tanda1(angka6[1])}$`,String.raw`$-${angka6[0]}x${tanda1(-angka6[1])}$`],
    [String.raw`Diketahui $f(x)=\dfrac{${angka7[0]}x-${angka7[1]}}{${angka7[2]}x-${angka7[3]}}$, maka $f^{-1}(x)=$ ....`,pil7[0],pil7[1],pil7[2],pil7[3],pil7[4]],
    [String.raw`Perhatikan gambar segitiga siku-siku di bawah ini.<br><img src="https://raw.githubusercontent.com/idhammuqoddas/blog/Idhamdaz-Matematika/gambar/Screenshot%202022-04-09%20222447.jpg"/><br> $\tan\alpha=$ ....`,String.raw`$\dfrac5{12}$`,String.raw`$\dfrac5{13}$`,String.raw`$\dfrac{12}5$`,String.raw`$\dfrac{12}{13}$`,String.raw`$\dfrac{13}{12}$`]
];
var soalising = [
  [String.raw`Diketahui $f(x)=${angka9[0]}x${tanda1(angka9[1])}$, maka $f(${angka9[2]})=$ ....`,angka9[0]*angka9[2]+angka9[1]],
  [String.raw`Diketahui $f(x)=${angka10[0]}x+a$ dan $f(${angka10[2]})=${angka10[0]*angka10[2]+angka10[1]}$, maka $a=$ ....`,angka10[2]],
  [String.raw`Diketahui $f(x)=x^2${tanda1(angka11[0])}x${tanda1(angka11[1])}$, maka $f(${angka11[2]})=$ ....`,angka11[2]*angka11[2]+angka11[2]*angka11[0]+angka11[1]],
    [String.raw`Dari soal nomor 2, $\left(f\circ g\right)(-1)=$ ....`,-angka2[0]*angka2[2]+angka2[0]*angka2[3]+angka2[1]],
    [String.raw`Dari hasil soal nomor 3, $\left(g\circ f\right)(-1)=$ ....`,-angka2[0]*angka2[2]+angka2[1]*angka2[2]+angka2[3]],
    [String.raw`Diketahui $f(x)=${angka14[0]}x${tanda1(angka14[1])}$, maka $f^{-1}(${angka14[0]*angka14[2]+angka14[1]})=$ ....`,angka14[2]],
    [String.raw`$\cos0^\circ=$ ....`,1]
];
for (let i = 0; i < soalpg.length; i++) {
    himp[i]=[...new Set(arrayutama)];
    acakarray(himp[i])
}
var jawpg = []
for (let i = 0; i < soalpg.length; i++) {
  jawpg[i]=himp[i].indexOf(0)
  
}
