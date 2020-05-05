import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) => Promise.resolve(JSON.parse(event.body))
    .then((body) => {
      const params = {
        TableName: process.env.POSTS_TABLE_NAME,
        Item: {
          ...body,
          slug: event.pathParameters.slug,
        },
      }
      return dynamoDbLib.call("put", params).then(() => success(params.Item))
    })
    .catch((e) => {
      return failure({ ...e })
    })
