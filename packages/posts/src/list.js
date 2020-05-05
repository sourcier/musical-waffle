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
        meta: {
          totalItems: result.Count
        },
        data: result.Items.map(({slug, ...attributes}) => ({
          type: "posts",
          id: slug,
          ...attributes
        }))
      })
    )
    .catch((e) => failure({ ...e }))
}
