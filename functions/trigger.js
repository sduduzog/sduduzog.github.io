const request = require('request')
exports.handler = function (event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    return callback(null, {
      statusCode: 200,
      body: '',
    })
  }
  try {
    const { data } = JSON.parse(event.body)
    if (!data) {
      return callback(null, {
        statusCode: 500,
        body: 'Something funky happened',
      })
    }
    const { type, attributes } = data
    if (type !== 'webhook_event') {
      return callback(null, {
        statusCode: 400,
        body: 'Bad request',
      })
    }
    const { event_type } = attributes
    if (event_type !== 'article_updated' && event_type !== 'article_created') {
      return callback(null, {
        statusCode: 400,
        body: 'Bad request',
      })
    }
    request.post(process.env.HOOK_URL, function () {
      callback(null, {
        statusCode: 200,
        body: 'Ok',
      })
    })
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: 'Error',
    })
  }
}
