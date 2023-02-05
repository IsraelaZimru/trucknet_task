export const dateFormatter = (date) => {
    return date ? date.toISOString()
        .replace("T", ", ")
        .substring(0, 20) : ""
}