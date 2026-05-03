function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function search(value) {
    console.log("Searching:", value);
}

const optimizedSearch = debounce(search, 1000);

optimizedSearch("JavaScript");