import * as dynamoDbLib from "./libs/dynamodb"
import { success, failure } from "./libs/response"

export default (event, context) => {
  return dynamoDbLib
    .call("scan", {
      TableName: process.env.POSTS_TABLE_NAME,
      FilterExpression:
        "published = :published AND (attribute_not_exists(internal) OR internal = :internal)",
      ExpressionAttributeValues: {
        ":published": true,
        ":internal": false,
      },
    })
    .then((result) =>
      success({
        items: result.Items,
        count: result.Count,
      })
    )
    .catch((e) => failure({ ...e }))
}
