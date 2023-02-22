module.exports = function Greetr(){
    this.greeting = 'Hi constructor greet4';
    this.greet = function (){
        console.log(this.greeting);
    }
}