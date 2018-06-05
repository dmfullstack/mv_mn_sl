
/**
 * module dependencies
 */
var qs       = require('querystring');
// /*var url      = require('url');
// var http     = require('http');*/

// var https = require('https');

var router   = require('express').Router();
var Promise  = require('bluebird');
var request  = Promise.promisify(require("request"));
var _        = require('underscore');

var  backend = require('./config.json');



function getTrendingMovies(req, res, next) {
   try {
     var url = backend.movieDBBaseURL + '/' + backend.trendingMoviesPath;
     var method = "GET";
     var queryParams = {};
     queryParams.api_key=backend.apiKey;
     queryParams.language=backend.language;
     queryParams.page=1;
     getMovies(method, url, queryParams).then(function (results) {
       res.json(results);
     },function (error) {
       res.json(error);
     })
  } catch (err) {
    next(err);
  }
}

function getUpcomingMovies(req, res, next) {
  try {
    var url = backend.movieDBBaseURL + '/' + backend.upcomingMoviesPath;
    var method = "GET";
    var queryParams = {};
    queryParams.api_key=backend.apiKey;
    queryParams.language=backend.language;
    queryParams.page=1;
    getMovies(method, url, queryParams).then(function (results) {
      res.json(results);
    },function (error) {
      res.json(error);
    })
  } catch (err) {
    next(err);
  }
}

function getRecommendedMovies(req, res, next) {
  try {
    var url = backend.movieDBBaseURL + '/' + backend.recommendationMoviesPath;
    var method = "GET";
    var queryParams = {};
    queryParams.api_key=backend.apiKey;
    queryParams.language=backend.language;
    queryParams.page=1;
    getMovies(method, url, queryParams).then(function (results) {
      res.json(results);
    },function (error) {
      res.json(error);
    })
  } catch (err) {
    next(err);
  }
}

function getMovies(method, url, queryParams) {
  return new Promise(function (resolve, reject) {
    var options = {
      method: method,
      url: url,
      json: true,
      qs: queryParams
    };

    request(options).then(function (result) {

      if(result[0].statusCode){
        if(result[0].statusCode == 200){
          resolve(result[0].body.results);
        }
        else{
          reject({
            statusCode : result[0].statusCode,
            status_message : result[0].body.status_message
          });
        }
      }
      else{
        reject({
          statusCode :500,
          status_message : "Internal Server Error"
        });
      }

    })

  });
}




/**
 * setup routes
 */

 router.get('/trendingMovies', getTrendingMovies);
 router.get('/upcomingMovies', getUpcomingMovies);
 router.get('/recommendedMovies', getRecommendedMovies);
// router.get('*', routeRequests);





/**
 * expose `router`
 */

module.exports = router;
