/* Setting things up. */

var exclusion_list = ["AnimalistesCAT","Eduard_Font","carquinyolista"];
      
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    format = require('date-format'),
    moment = require('moment'),
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
  

  //////////////////////////

  
  //CATALUNYA
  
  var catalunyaForward = function () {
      
      var retweetId = null;
      var retweetDate = null; 
      var currentDate = null;
      var currentScreenName = null;
      var latest_since_id = fs.readFileSync('./.data/since_id.txt','utf8');
      var next_cursor = null; //RETRIEVE LATEST RT FROM FILESYSTEM 
      var i = 0;
    
      var params = {
          q: '(#XarxaAnimalistaCat OR #XarxaDesplaçatsCat)-(#XarxaCatCentral OR #XarxaCatcentralPerduts) -filter:retweets', // Hashtags to search tweets within
          result_type: 'mixed',
          count: '100',
          since_id: latest_since_id,
      }
      
      console.log("\n***********************************************************\n");
      console.log("SEARCH QUERY :: "+params.q+"\n\nRESULTS PAGE# "+((i/100)+1)+"\n");    
      console.log("Latest RT Id: "+ latest_since_id);
      
      Twitter.get('search/tweets', params, function getList(err, data) {

          if (err) {console.error('Error during tweet search call :: ' + err);}
        
          else if ( data.statuses.length == 0 ) {

            console.log("\n"+"no new tweets found.");
            return;
          }

          else {
            
            var n = 0;
            
            //SAVE NEWEST TWEET (SINCE_ID) IN FILESYSTEM, SO OLDER TWEETS WILL BE EXCLUDED FROM SEARCH THE NEXT TIME THE PROGRAM EXECUTES
            
            setSinceId(data.statuses[0].id_str);
            
            //ITERATE THE RESULTS SET IN ORDER TO RETWEET ALL THE TWEETS FOUND IN THE RESULTS SET
            
            while (n < data.statuses.length) {

              retweetId = data.statuses[n].id_str;
              retweetDate = data.statuses[n].created_at; 
              currentDate = format(new Date());  
              next_cursor = data.statuses[n].id_str;
              currentScreenName = data.statuses[n].user.screen_name;

              console.log("SEARCH RESULT #" + i + " :: " + retweetId + " :: "+currentScreenName + " :: " + retweetDate);

              // IF SCREEN_NAME IS IN THE EXCLUSION LIST ARRAY, THEN SKIP RT 

              if (exclusion_list.includes(currentScreenName)==true) { 
                console.error('ERROR: This tweet ('+retweetId+') belongs to an excluded user ('+currentScreenName+'). Skipping... '); 
              }            
              else {
                Twitter.post('statuses/retweet/'+retweetId, function (err, response) {

                    if (err) { console.error('ERROR: Problem when retweeting :: '+err); }
                    else { console.log(params.q + ' Retweeted!! '+ response.retweeted_status.user); }

                });
              }

            i++;
            n++;

          }
          //SAVE LATEST RT IN THE PAGE IN NEXT_CURSOR VAR INTO FILESYSTEM
        }
        console.log("\nTOTAL TWEETS IN CURRENT PAGE --> "+n);

        console.log("\nNEXT CURSOR --> "+next_cursor);
        
        params.max_id = next_cursor;

        //Twitter.get('search/tweets', params, getList);
      });
      
  };
  
  //FUNCTIONS

  function parseTwitterDate(aDate) {   
    return new Date(Date.parse(aDate.replace(/( \+)/, ' UTC$1')));
    //sample: Wed Mar 13 09:06:07 +0000 2013 
  }
  
  function setSinceId(id_str) {
    var fs = require('fs');
    const path = './.data/since_id.txt';
    let exists = fs.existsSync(path);
    var output;
    fs.writeFile(path, id_str, (err) => {
      if (err) throw err;
    });
    return;
  }
  
  ///////////////////
  //FUNCTION CALLS// 
  /////////////////
  
  catalunyaForward();
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your bot is running on port ' + listener.address().port);
});
