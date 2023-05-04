function getObj(obj){
    let onlyKeys = [];

    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            onlyKeys.push(key);
            console.log(`Key: ${key}, value: ${obj[key]}`);
        }
    }
    return onlyKeys
}
