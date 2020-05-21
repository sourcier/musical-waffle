import * as dynamoDbLib from './libs/dynamodb'
import { success, failure } from './libs/response'

export default (event, context) => Promise.resolve(JSON.parse(event.body))
  .then(({ data: { id, type, attributes } }) => {
    if (id !== event.pathParameters.slug) return failure({ error: 'Bad request' }, 404)

    const params = {
      TableName: process.env.POSTS_TABLE_NAME,
      Item: {
        ...attributes,
        slug: event.pathParameters.slug,
        updated: (new Date()).toISOString()
      }
    }
    return dynamoDbLib.call('put', params).then(() => success(params.Item))
  })
  .catch((e) => {
    return failure({ ...e })
  })
