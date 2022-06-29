async function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)]
}

module.exports = {getRandomValue}