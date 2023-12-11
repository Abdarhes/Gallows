// Создаем массив сословами
let words = ['коза','береза', 'котик', 'самолет', 'электростанция', 'поросенок']; 
// Выбор рандомного слова.
let word = words[Math.floor(Math.random()*words.length)]; 
// Создаем итоговый массив.
let answerArray = [];
let attempts = word.length + 2; // Попытки.
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '._.';
};

let reminiLetters = word.length;
// Итоговый цикл
while (reminiLetters > 0 && attempts > 0 ) {  
    // Отображение состояния игры. 
    alert(answerArray.join('')); 
    // Запрашиваем вариант ответа.
    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !==1) {
        alert('Пожалуйста, введите только одну букву.');
    } else { 
        // Обновляем состояние игры.
        for (let j = 0; j < word.length; j++) {    
            if (word[j] === guess) {
                answerArray[j] = guess;
                reminiLetters--;
                attempts--;
            } 
        }
    }
    // Конец игрового цикла.
    }
    // Отображаем ответ и поздравляем игрока.
    alert(answerArray.join(''));
    alert('Было загадано слово ' + word);
    

