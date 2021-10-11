
/*
JEGY VÁSÁRLÓ ALKLALMAZÁS
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

let weekDay = new Date().getDay()

let dayName = '';

switch(weekDay){
    case 0: dayName ='Vasárnap'
    break;
    case 1: dayName ='Hétfő'
    break;
    case 2:dayName ='Kedd'
    break;
    case 3:dayName ='Szerda'
    break;
    case 4:dayName ='Csütörtök'
    break;
    case 5:dayName ='Péntek'
    break;
    case 6:dayName ='Szombat'
    break;
}

document.getElementById('first').innerHTML = dayName;








/*TÖMBÖK OBJEKTUMOK*/
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
    
   

