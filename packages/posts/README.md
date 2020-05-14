## Contributing

Add your lambda function under ```/src``` using the following method signiture:

```js
export default (event, context) => {
  ...
}
```

Add your function to ```serverless.yml```

```yaml
functions:
  {FunctionName}:
    handler: src/{FunctionName}.default
    events:
      - http:
          path: {FunctionPath}
          method: {FunctionMethod}
          cors: true
          authorizer: aws_iam
```

* Replace ```{FunctionName}``` with your function name
* Replace ```{FunctionPath}``` with your function filename
* Replace ```{FunctionMethod}``` with the HTTP method you would like to access your function with
