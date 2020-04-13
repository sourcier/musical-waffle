import * as dynamoDbLib from '../../lib/dynamodb'
import { success, failure } from '../../lib/response'

export default (event, context) => {
  return dynamoDbLib
    .call('scan', {
      TableName: process.env.POSTS_TABLE_NAME,
    })
    .then((result) => success(result.Items))
    .catch(() => failure({ status: false }))
}
