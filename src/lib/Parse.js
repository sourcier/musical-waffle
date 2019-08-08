import parseNode from 'parse/node'
import parse from 'parse'

const Parse =
    navigator.userAgent.includes('Node.js') ||
    navigator.userAgent.includes('jsdom')
        ? parseNode
        : parse

Parse.initialize(
    process.env.REACT_APP_PARSE_ID,
    process.env.REACT_APP_PARSE_KEY
)

Parse.serverURL = process.env.REACT_APP_PARSE_URL

export default Parse
