import * as dynamoDbLib from './libs/dynamodb'
import { success, failure } from './libs/response'

export default (event, context) => {
  return dynamoDbLib
    .call('scan', {
      TableName: process.env.POSTS_TABLE_NAME,
      FilterExpression: "published = :published AND attribute_not_exists(internal)",
      ExpressionAttributeValues: {
        ":published": true,
      },
    })
    .then((result) => success(result.Items))
    .catch((e) => failure({ ...e }))
}
