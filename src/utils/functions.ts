export const capitalizeFirstLetter = (str: string) => {
    str = Array.isArray(str) ? str[0] : str

    if (str == null) throw new Error(`str is null: [${str}]`)

    if (str === '') throw new Error(`str is empty: [${str}]`)

    return str.charAt(0).toUpperCase() + str.slice(1)
}
