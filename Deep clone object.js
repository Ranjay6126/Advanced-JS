function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}

const user = {
    name: "Dhanush",
    address: {
        city: "Delhi"
    }
};

const cloned = deepClone(user);

cloned.address.city = "Mumbai";

console.log(user.address.city);
console.log(cloned.address.city);