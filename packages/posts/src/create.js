import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) => {
  const date = new Date()

  return Promise.resolve(JSON.parse(event.body))
    .then((body) => {
      const params = {
        TableName: process.env.POSTS_TABLE_NAME,
        Item: {
          ...body,
          createdAt: date.toISOString(),
          updatedAt: date.toISOString()
        },
      }
      return dynamoDbLib.call("put", params).then(() => success(params.Item))
    })
    .catch((e) => {
      return failure({ ...e })
    })
  }
