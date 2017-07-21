console.log('The 14 bot is starting');

var Twit = require('twit');

var config = require ('./config');
// console.log(config);
var T = new Twit(config);

// Setting up a user stream (T c'est ma connexion au twitter package, à l'API)
// track c'est tiens toi aux aguets pour réagir dès que le truc est tweeté contrairement à search
var stream = T.stream('statuses/filter', { track: 'supercallifragilistoc' });

stream.on('tweet', function (tweet) {
	// console.log(tweet)
	var newTweet = "@" + tweet.user.screen_name + " C'est toi l'toc";
	var nameID = tweet.id_str ;
	tweetIt(newTweet);
	
	function tweetIt(txt) {
	console.log(nameID);
	
	var tweet = {
		status: txt,
		in_reply_to_status_id : nameID 
		// pour répondre à un tweet en particulier dont l'id est le suivant :
		// in_reply_to_status_id : "869643416560381953"
	};

	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) {
		if (err) {
			console.log("something went wrong");
		} else {
			console.log("It worked");
		}
	}
};
});

// twitter.post('statuses/update', {
//       status: status,
//       in_reply_to_status_id : tweet.id_str
//     }, function(err, reply) {
//       if(err) {
//         log(err);
//       } else {
//         log('reply sent to ' + handle);
//       }
// });




// ESSAI : FAIRE COMME LE PROGRAMMEUR
// function tweetIt(txt) {
// 	T.post('statuses/update', {
// 		status: txt,
// 		in_reply_to_status_id : tweet.id_str
// 	}, function(err, data, response) {
// 			if(err) {
// 				console.log("something went wrong");
// 			} else {
// 				console.loglog("It worked");
// 			}
// 	}
// });


