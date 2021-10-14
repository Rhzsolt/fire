
/*
JEGY VÁSÁRLÓ ALKLALMAZÁS 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
var quantity = prompt('Kérem a darabszámot!');

var tipus = prompt('Milyen jegyet kér ?')

var tipusok = {
    student: 300,
    adult: 350,
    retired: 280
}
var price = tipusok[tipus];
if( price === undefined){ alert('Kérem csak az adult,studnt,retiredből válasszon')}

else{

var discont = quantity > 10 ?  0.9 : 1 ;

var total= price * quantity * discont;

alert(total);
}*/




/*TÖMBÖK OBJEKTUMOK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000*/
/*var egy =
[
    'kettő',
        [
            { három: 'négy', öt: 'hat' },
            'hét',
            7,
            [2, 3, 4, [{ bagi: 'bogyó', }]]
        ],
    'nyolc', 
    { kilenc: 'tíz' }
    ];*/



/*var egy =
{
    kettő:
        [
            { három: 'négy', öt: 'hat', húsz :[1,2,3 ,'matyi'] },
            'hét',
            7,
            [2, 3, 4, { bagi: 'bogyó' },9]
        ],
    nyolc:{ kilenc: 'tíz' }
};
console.log(egy.kettő[0].húsz[3])*/


/*var num = [1,3,9,57,54,15,36,98,66];*/



/*var paratlan =0;

for( var i = 0;i< num.length;i++){

    paratlan += num[i] %  2 === 1 ? 1 : 0;
}

console.log(paratlan)*/

/*var i = 0;

var paratlan = 0;

while(i< num.length){

    paratlan+= num[i] % 2 === 1 ? 1 :0 
    
    i++
}
console.log(paratlan)*/



/*var db =0;
for ( var i of num){

   db += i % 2 == 0 ? 1 : 0

     
}
document.getElementById('first').innerHTML = db*/


/*var age = prompt('Ad meg a korod');*/

/*if(age < 20){ alert('Kiskorú')}
else if(age>20 && age<45){alert('Középkorú');}

else if(age<60 && age>45){alert('Öregszik');}

else if(age> 60) { alert('Már nagyon öreg');}

else{ alert('Kérem adjon meg helyes adatot!!')}*/

/*switch(age){
case '18': alert(18)
    break;
    case '20': alert(20)
    break;
    default : alert('Kutya tudja')}*/

/* switch(true){
     case age<18: alert('Fiatal')
         break;
         case age>20 && age<40: alert('Öregszik')
         break;
         default : alert('Kutya tudja')}*/

/* Ez főleg számokra nézi az állítást
 var x =prompt('Hány éves vagy') 

if(x>18){ alert('Nagykorú')}
else if(x==18){alert('Épp hogy')}
else if(x<18){alert('Kicsike')}
else{'Jobb számot'};*/

/*switch a sewitch ben !!!

var x = prompt('Éhes vagy igen/nem?');
switch (x) {
    case 'igen': var y = prompt('Mit ennél húst vagy pitét?');
        switch (y) {
            case 'húst': alert('Sose volt');
                break;
            default: alert('Na egyél pitét')
            case 'pitét': var z = prompt('Milyen pitét almásat vagy meggyeset')

                switch (z) {
                    case 'almásat': alert('Most fogyott el!')
                        break;
                    case 'meggyeset': alert('Sose volt')
                        break;
                    default: alert('Na próbáld beírni.....')
                }
        }
        break;
    case 'nem': alert('jó neked')
        break

    default: alert('Menni fog !Próbáld beírni')
        break;
}*/
let weekDay = new Date().getDay()

let dayName = '';

switch (weekDay) {
    case 0: dayName = 'Vasárnap'
        break;
    case 1: dayName = 'Hétfő'
        break;
    case 2: dayName = 'Kedd'
        break;
    case 3: dayName = 'Szerda'
        break;
    case 4: dayName = 'Csütörtök'
        break;
    case 5: dayName = 'Péntek'
        break;
    case 6: dayName = 'Szombat'
        break;
}

document.getElementById('first').innerHTML = dayName;

/*FÜGGVÉNY 
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
SUBRUTINE*/


/*function rántotta() {
    console.log('Vegyél tojást');
    console.log('Vegyél vajat');
    console.log('-------------');
    fűszererk();
    console.log('-------------');
    console.log('Süsd meg');
   
    
} 

function fűszererk(){

    console.log('Só');
    console.log('Bors');
    console.log('Paprika');
}
rántotta();
console.log('---------------------------');*/




/*function adOne(szám){
   console.log( szám  ) 
}


adOne(8)
adOne(75)
adOne(89)---------------------------------------------------------------------------*/

/*function adOne(szám){
    return szám+1
 }
 console.log(adOne(adOne(adOne(1))))*/


 /*function adtwo(szám){

    return {
        1:3,
        2:4,
        3:5,
    }[szám]
 }
 console.log(adtwo(1));*/
 

 var adthree = function(szám){

return szám+3;
 }
console.log(adthree(3))
