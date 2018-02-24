module.exports = function getZerosCount(number) {
    counter = 0;
    while(number > 4){
        number = Math.floor(number/5);
        counter+=number;
    }
    return counter; 
}
