function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((data) => {
                    results[index] = data;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

myPromiseAll([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
]).then(console.log);