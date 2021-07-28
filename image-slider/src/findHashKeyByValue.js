const findHashKeyByValue = (function(hash, value) {
    return Object.keys(hash).find(key => hash[key] == value);
});

export default findHashKeyByValue;