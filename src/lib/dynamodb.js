import AWS from 'aws-sdk'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export const call = (action, params) => dynamoDb[action](params).promise()
