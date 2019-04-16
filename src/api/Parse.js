import Parse from "parse/node"

Parse.initialize(
    process.env.REACT_APP_PARSE_ID,
    process.env.REACT_APP_PARSE_KEY
)

Parse.serverURL = process.env.REACT_APP_PARSE_URL

export default Parse
