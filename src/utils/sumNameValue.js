const sumName = (name) =>{
    let sum = 0
    for (let i = 0; i < name.length; i++) {
        if (name[i].match(/[a-z]/i)) {
            if(name[i] === name[i].toLowerCase())
                sum += (name[i].charCodeAt(0) - 96)
            else
                sum += (name[i].charCodeAt(0) - 64)
        } else
            return 0 // not a valid name
    }
    return sum
}
module.exports = sumName