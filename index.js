function saturdayFun(activity = "roller-skate") {  
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {  
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "a dedicated programmer") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(int, array) {
    if (array.length === 0) {
        return int
    }

    for(let i = 0; i< array.length; i++) {
        int = array[i](int)
    }
    return int
}