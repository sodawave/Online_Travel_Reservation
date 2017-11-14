let connection =  new require('./kafka/Connection');
let producer = connection.getProducer();
let login = require('./services/login');

let loginConsumer = connection.getConsumerObj("login_topic");
let singupConsumer = connection.getConsumerObj("signup_topic");

try {
    /*
     *  Example
    loginConsumer.on('message', function (message) {
        if (message.topic === "login_topic") {
            console.log('message received');
            console.log(message);
            console.log(message.value);
            console.log(JSON.stringify(message.value));
            var data = JSON.parse(message.value);

            console.log(data.replyTo);

            login.handle_request(data.data, function (err, res) {
                console.log('after handle' + res);
                var payloads = [
                    {
                        topic: data.replyTo,
                        messages: JSON.stringify({
                            correlationId: data.correlationId,
                            data: res
                        }),
                        partition: 0
                    }
                ];
                producer.send(payloads, function (err, data) {
                    // console.log(data);
                    console.log(payloads);
                });
                // return;
            });
        }
    });
    */
}
catch (e){
    console.log(e)
}

