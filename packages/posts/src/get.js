import * as dynamoDbLib from './libs/dynamodb'
import { success, failure } from './libs/response'

export default (event, context) =>
  dynamoDbLib
    .call('query', {
      TableName: process.env.POSTS_TABLE_NAME,
      KeyConditionExpression: 'slug = :slug',
      FilterExpression:
        'published = :published AND (attribute_not_exists(internal) OR internal = :internal)',
      ExpressionAttributeValues: {
        ':slug': event.pathParameters.slug,
        ':published': true,
        ':internal': true
      }
    })
    .then(({ Items: [first, ...rest] }) => {
      const { slug, ...attributes } = first
      return first ? success({
        data: {
          type: 'posts',
          id: slug,
          ...attributes
        }
      }) : failure({ error: 'Item not found.' }, 404)
    })
    .catch((e) => failure({ ...e }))
