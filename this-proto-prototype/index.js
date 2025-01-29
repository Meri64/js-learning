// 1․ Ծրագրավորողը ստեղծել է մի օբյեկտ՝ ինչ-որ անհայտ Function Constructor-ի օգնությամբ
// const obj = new Human ("John", "Smith") Սակայն մենք գիտենք, որ այդ օբյեկտը ունի հետևյալ property-ները՝
// name: "John", 
// surname: "Smith",
// speed: 0,
// state: undefined 
// բացի դրանից, մենք գիտենք, որ չնայած այն չունի իր սեփական մեթոդները, սակայն ենթարկվում է հետևյալ մեթոդներին՝
// run(speed), stop (), changeState(state)ընդ որում, run մեթոդը օբյեկտի վրա կանչելիս և որպես արգումենտ նշելով որևէ արագություն
// պետք է օբյեկտի speed property-ն փոխվի տրված արագության չափով և alert լինի, name-ի և speed-ի արժեքները։
// Իսկ stop մեթոդի դեպքում speed property-ն նորից դառնա 0 և alert լինի name-ի արժեքը և հետյալ տեքստը "is stopped",
// իսկ changeState մեթոդի կանչի դեպքում և որպես արգումենտ նշելով որպես string որևէ կարգավիճակ,
// օրինակ "thinking" պետք է state property-ի արժեքը փոխվի գրված string-ով

function Human(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.speed=0;
    this.state=undefined;
}
Human.prototype.run=function run(speed){
    this.speed=speed;
    alert(`${this.firstName} runs at ${this.speed}`)
}

Human.prototype.stop=function stop(){
    this.speed=0;
    alert(`${this.firstName} is stopped`);
}
Human.prototype.changeState=function(state){
    this.state=state;
    alert(`${this.firstName} is ${state}`)
}
const obj=new Human ('Meri','Mkhitaryan');
obj.run(20);
obj.stop();
obj.changeState('thinking');

