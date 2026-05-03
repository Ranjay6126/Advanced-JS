function memoize(fn) {
    let cache = {};

    return function (...args) {
        let key = JSON.stringify(args);

        if (cache[key]) {
            console.log("From Cache");
            return cache[key];
        }

        console.log("Calculated");

        let result = fn(...args);

        cache[key] = result;

        return result;
    };
}

function square(n) {
    return n * n;
}

const memoSquare = memoize(square);

console.log(memoSquare(5));
console.log(memoSquare(5));