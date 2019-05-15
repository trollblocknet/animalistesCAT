/* Setting things up. */
var path = require('path'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */      
      twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      }
    },
    Twitter = new Twit(config.twitter);


app.use(express.static('public'));

/* You can use cron-job.org, uptimerobot.com, or a similar site to hit your /BOT_ENDPOINT to wake up your app and make your Twitter bot tweet. */

app.all("/" + process.env.BOT_ENDPOINT, function (req, res) {
  
  //////////////
  //CATALUNYA//
  ////////////
  
  // #XarxaAnimalistaCat
  
   var XarxaAnimalistaCat = function () {
    
    var params = {
        q: '#XarxaAnimalistaCat', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaDesplaçatsCat
  
    var XarxaDesplaçatsCat = function () {
    
    var params = {
        q: '#XarxaDesplaçatsCat', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  //////////////
  //BARCELONA//
  ////////////
  
  // #XarxaBarcelonaPerduts
 
  var XarxaBarcelonaPerduts = function () {
    
    var params = {
        q: '#XarxaBarcelonaPerduts', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaBarcelonaTrobats
  
  var XarxaBarcelonaTrobats = function () {
    
    var params = {
        q: '#XarxaBarcelonaTrobats', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaBarcelonaAdopcions
  
   var XarxaBarcelonaAdopcions = function () {
    
    var params = {
        q: '#XarxaBarcelonaAdopcions', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaBarcelonaDonacions
  
    var XarxaBarcelonaDonacions = function () {
    
    var params = {
        q: '#XarxaBarcelonaDonacions', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  
  // #XarxaBarcelonaALERTA
  
  var XarxaBarcelonaALERTA = function () {
    
    var params = {
        q: '#XarxaBarcelonaALERTA', // Hashtags to search tweets within
        result_type: 'recent',
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  //////////////
  //TARRAGONA//
  ////////////
  
  // #XarxaTarragonaPerduts
  
  var XarxaTarragonaPerduts = function () {
    
    var paramsTP = {
        q: '#XarxaTarragonaPerduts', // Hashtags to search tweets within
        result_type: 'mixed',
        /*lang: 'en'*/
    }
    console.log("SEARCHING TWEETS FOR HT -> #XarxaTarragonaPerduts\n");
    Twitter.get('search/tweets', paramsTP, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("#XarxaTarragonaPerduts - SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaTarragonaTrobats
  
  var XarxaTarragonaTrobats = function () {
    
    var params = {
        q: '#XarxaTarragonaTrobats', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaTarragonaAdopcions
  
  var XarxaTarragonaAdopcions = function () {
    
    var params = {
        q: '#XarxaTarragonaAdopcions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaTarragonaDonacions
  
  var XarxaTarragonaDonacions = function () {
    
    var params = {
        q: '#XarxaTarragonaDonacions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaTarragonaALERTA
  
  var XarxaTarragonaALERTA = function () {
    
    var params = {
        q: '#XarxaTarragonaALERTA', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  ///////////
  //LLEIDA//
  /////////
  
  // #XarxaLleidaPerduts  
  
  var XarxaLleidaPerduts = function () {
    
    var params = {
        q: '#xarxalleidaperduts', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaLleidaTrobats
  
  var XarxaLleidaTrobats = function () {
    
    var params = {
        q: '#XarxaLleidaTrobats', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaLleidaAdopcions
  
  var XarxaLleidaAdopcions = function () {
    
    var params = {
        q: '#XarxaLleidaAdopcions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaLleidaDonacions
  
  var XarxaLleidaDonacions = function () {
    
    var params = {
        q: '#XarxaLleidaDonacions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaLleidaALERTA
  
  var XarxaLleidaALERTA = function () {
    
    var params = {
        q: '#XarxaLleidaALERTA', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  ///////////
  //GIRONA//
  /////////
  
  // #XarxaGironaPerduts  
  
  var XarxaGironaPerduts = function () {

    var params = {
        q: '#xarxagironaperduts', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaGironaTrobats
  
  var XarxaGironaTrobats = function () {
    
    var params = {
        q: '#XarxaGironaTrobats', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaGironaAdopcions
  
   var XarxaGironaAdopcions = function () {
    
    var params = {
        q: '#XarxaGironaAdopcions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaGironaDonacions
  
  var XarxaGironaDonacions = function () {
    
    var params = {
        q: '#XarxaGironaDonacions', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  // #XarxaGironaALERTA
  
  var XarxaGironaALERTA = function () {
    
    var params = {
        q: '#XarxaGironaALERTA', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
    var XarxaGironaALERTA = function () {
    
    var params = {
        q: '#XarxaGironaALERTA', // Hashtags to search tweets within
        result_type: 'recent',
        /*lang: 'en'*/
    }
    Twitter.get('search/tweets', params, function (err, data) {
        var n = 0;
                  while (n < data.statuses.length){

              console.log("SEARCH RESULT #"+n+" --> "+data.statuses[n].id_str);
        if (!err) {
                
          var retweetId = data.statuses[n].id_str;
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function (err, response) {
              if (err) {
                //console.error(err);
                console.error('Problem when retweeting. Possibly already retweeted this tweet!');
              }
              else { console.log('Retweeted!!!'); }
          });
        }
        else {
            console.log('Error during tweet search call');
        }
                                  n++;
          }
          console.log("TOTAL TWEETS --> "+n);
    });
  };
  
  ///////////////////
  //FUNCTION CALLS// 
  /////////////////
  
  XarxaAnimalistaCat();
  XarxaDesplaçatsCat();
  
  XarxaBarcelonaPerduts();
  XarxaTarragonaPerduts();
  XarxaLleidaPerduts();
  XarxaGironaPerduts();
  
  XarxaBarcelonaTrobats();
  XarxaTarragonaTrobats();
  XarxaLleidaTrobats();
  XarxaGironaTrobats();
  
  XarxaBarcelonaAdopcions();
  XarxaTarragonaAdopcions();
  XarxaLleidaAdopcions();
  XarxaGironaAdopcions();
  
  XarxaBarcelonaDonacions();
  XarxaTarragonaDonacions();
  XarxaLleidaDonacions();
  XarxaGironaDonacions();
  
  XarxaBarcelonaALERTA();
  XarxaTarragonaALERTA();
  XarxaLleidaALERTA();
  XarxaGironaALERTA();  
  
  Tweets_Nil_Cat1();
  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your bot is running on port ' + listener.address().port);
});