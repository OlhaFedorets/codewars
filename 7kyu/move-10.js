function moveTen(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = []
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        let index = alphabet.findIndex((item) => { return item === arr[i] })
        let newIndex = index + 10
        if (newIndex > 25) {
            newIndex -= 26
        }
        arr[i] = alphabet[newIndex]
        result.push(arr[i])
    }
    return result.join('')
}