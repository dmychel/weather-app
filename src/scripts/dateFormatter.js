export function formatDate(date) {
    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'short' })
    return formatter.format(new Date(date))
}

export function formatCurrentDate(date) {
    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "medium" })
    return formatter.format(new Date(date))
}

export function currentDate() {
    const formatter = new Intl.DateTimeFormat('en-US', {day: '2-digit'})
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = formatter.format(date);

    let current = `${year}-${month}-${day}`
    return current
}
