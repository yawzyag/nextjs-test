import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    console.log("🚀 ~ file: date.js ~ line 4 ~ Date ~ dateString", dateString)

    const getDate = () => {
        try {
            return format(date, 'LLLL d, yyyy')
        } catch (error) {
            console.log("🚀 ~ file: date.js ~ line 18 ~ getDate ~ error", error)
        }
        return ""
    }
    return <time dateTime={dateString}>{getDate()}</time>
}
