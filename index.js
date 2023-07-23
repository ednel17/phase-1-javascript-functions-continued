function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
    }
    saturdayFun();

    const mondayWork = function(activity = 'go to the office'){
        return `This Monday, I will ${activity}.`;
    }
    mondayWork();

    function wrapAdjective(symbol) {
        function innerFunction(adjective) {
              return `You are ${symbol}${adjective}${symbol}!`
        }
    return innerFunction;
    }
    wrapAdjective()