Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const nums = [1, 2, 3];

const ans = nums.myMap((num) => num * 2);

console.log(ans);