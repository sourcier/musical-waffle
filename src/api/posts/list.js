import * as dynamoDbLib from '../../lib/dynamodb-lib'
import { success, failure } from '../../lib/response-lib'

export default async (event, context) => {
  const params = {
    TableName: process.env.POSTS_TABLE_NAME,
  }

  try {
    const result = await dynamoDbLib.call('scan', params)
    return success(result.Items)
  } catch (e) {
    return failure({ status: false })
  }
}
