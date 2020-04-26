import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) =>
  dynamoDbLib
    .call("get", {
      TableName: process.env.POSTS_TABLE_NAME,
      Key: {
        slug: event.pathParameters.slug,
      }
    })
    .then((result) => result.Item ? success(result.Item) : failure({ status: false, error: "Item not found." }))
    .catch(() => failure({ status: false }))
