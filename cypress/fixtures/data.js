module.exports = {
    generateName: function(length1) {
        let name = ''; //здесь будем хранить результат
        let chars = 'abcdefgABCDEFG1234567890'; //возможные символы
        let charLength = chars.length; //определяем длину
        for(let i = 0; i<length1; i++) { //запускаем цикл для формирования строки
         name += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return name; 
       }
}