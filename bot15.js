// on a essayé de faire comme lui, et ça a marché, mais son bot est inintéressant
// https://stackoverflow.com/questions/39008784/node-reply-script-for-twitter-does-not-actually-reply

console.log('The bot 15 is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
    var reply_to = tweet.in_reply_to_screen_name;
    var text       = tweet.text;
    var from       = tweet.user.screen_name;
    var nameID     = tweet.id_str;
    // params just to see what is going on with the tweets
    var params     = {reply_to, text, from, nameID};
    console.log(params);

    if (reply_to === 'true_newz_') {
        var new_tweet = '@' + from + ' Hello!';
        var tweet = {
            status: new_tweet,
            in_reply_to_status_id: nameID
        }

        T.post('statuses/update', tweet, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log("Something went wrong!");
            } else {
                console.log("It worked!");
            }
        }
    }
}