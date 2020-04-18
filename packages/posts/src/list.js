import * as dynamoDbLib from './libs/dynamodb'
import { success, failure } from './libs/response'

export default (event, context) => {
  return dynamoDbLib
    .call('scan', {
      TableName: process.env.POSTS_TABLE_NAME,
    })
    .then((result) => success(result.Items))
    .catch(() => failure({ status: false }))
}
