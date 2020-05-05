const buildResponse = (statusCode, body) => ({
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: statusCode === 204 ? null : JSON.stringify(body),
})

export const success = (body, statusCode = 200) => buildResponse(statusCode, body)

export const failure = (body, statusCode = 500) => buildResponse(statusCode, body)
