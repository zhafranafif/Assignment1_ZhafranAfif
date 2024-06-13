function emotify(str){
    const splitStr = str.split(' ')
    const lastIdx = splitStr[splitStr.length - 1]
    const emote = {
        smile: ':D',
        grin: ':)',
        sad: ':(',
        mad: ':P'
    }
    return `Make me ${emote[lastIdx]}` ?? "Not Emoticon"
}
console.log(emotify("Make me smile")) // expected "Make me :D"
console.log(emotify("Make me grin")) // expected "Make me :)"
console.log(emotify("Make me sad")) // expected "Make me :("
console.log(emotify("Make me smile")) // expected "Make me :D"
console.log(emotify("Make me grin")) // expected "Make me :)"
console.log(emotify("Make me sad")) // expected "Make me :("
console.log(emotify("Make me mad")) // expected "Make me :P"
