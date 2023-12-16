const upperFirst = (word: string) => {
    return word && word.charAt(0).toUpperCase() + word.slice(1)
}

export default upperFirst