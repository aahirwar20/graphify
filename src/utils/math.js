import * as math from "mathjs";

const evalFunction = (expression, x) => {
    try {
        if(x>=0) return math.evaluate(expression.replace(/x/g, x))
        else return math.evaluate(expression.replace(/x/g, '('+x+')'))
    } catch (error) {
        console.error("Error evaluating function:", error);
        return 0;
    }
};

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

export  {
    arrayRange,
    evalFunction
}
