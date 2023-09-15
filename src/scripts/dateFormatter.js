export function formatDate(date) {
    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'short' })
    console.log(formatter.format(new Date(date)))
    return formatter.format(new Date(date))
}

export function formatCurrentDate(date) {
    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "medium" })
    return formatter.format(new Date(date))
}