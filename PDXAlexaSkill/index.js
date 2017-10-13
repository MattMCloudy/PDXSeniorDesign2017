import Alexa from 'alexa-sdk'
import handlers from 'handlers'

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};