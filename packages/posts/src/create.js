import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) => {
  const date = new Date()

  return Promise.resolve(JSON.parse(event.body))
    .then(({data: {id, type, attributes}}) => {
      const params = {
        TableName: process.env.POSTS_TABLE_NAME,
        Item: {
          ...attributes,
          slug: id,
          published: false,
          created: date.toISOString(),
          updated: date.toISOString()
        },
      }
      return dynamoDbLib.call("put", params).then(() => {
        const {slug, ...attributes} = params.Item
        return success({
          data: {
            type: "posts",
            id: slug,
            ...attributes
          }
        })
      })
    })
    .catch((e) => {
      return failure({ ...e })
    })
  }
