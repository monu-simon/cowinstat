export function getDate() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}

export function getDateinYYYY() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
