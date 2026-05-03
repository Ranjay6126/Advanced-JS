function throttle(func, limit) {
    let flag = true;

    return function (...args) {
        if (!flag) return;

        func.apply(this, args);
        flag = false;

        setTimeout(() => {
            flag = true;
        }, limit);
    };
}

function scrollHandler() {
    console.log("Scrolling...");
}

const optimizedScroll = throttle(scrollHandler, 2000);

optimizedScroll();