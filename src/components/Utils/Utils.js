export function getDate() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}