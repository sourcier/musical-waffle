import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) =>
  Promise.resolve(JSON.parse(event.body))
    .then((body) => {
      const params = {
        TableName: process.env.POSTS_TABLE_NAME,
        Item: {
          slug: body.slug,
          title: body.title,
          content: body.content,
          summary: body.summary,
        },
      }
      dynamoDbLib.call("put", params).then(() => success(params.Item))
    })
    .catch((e) => {
      return failure({ status: false })
    })
