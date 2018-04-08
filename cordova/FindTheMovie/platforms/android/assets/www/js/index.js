/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        init();
    },

    bindEvents: function() { 
        document.addEventListener('deviceready', this.onDeviceReady, false); 
    },

    onDeviceReady: function() {
        init();

        app.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();

var db;
var mov=[];


function init(){//load list by popularity
    /*for (i=0;i<9;i++){
                theList.append(`<md-card>
                  <md-card-media>
                    <img src="http://image.tmdb.org/t/p/w342//` + moviesList.results[i].poster_path + `" alt="Poster">
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">`+ api +`</div>
                  </md-card-header>
                </md-card>`);
                  //theList.append( "<li><a href='#' class='movie' onclick='goToPageThree(" + moviesList.results[i].id + ",0);'><img class='poster' src='http://image.tmdb.org/t/p/w342//" + moviesList.results[i].poster_path + "'>" + moviesList.results[i].original_title + "</a></li>");
                }*/
    var theList = $("#popular");
    
    var api='2e0b88a584333cb7ce48d309f7c10dd7';
     var request = $.ajax({
          url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+api,
          method: "GET"
        });

        request.done(function( moviesList ) {
            
            for (i=0;i<9;i++){
                theList.append(`<md-card>
                  <md-card-media>
                    <img src="http://image.tmdb.org/t/p/w342//` + moviesList.results[i].poster_path + `" alt="Poster">
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">`+ moviesList.results[i].original_title +`</div>
                  </md-card-header>
                </md-card>`);
                  //theList.append( "<li><a href='#' class='movie' onclick='goToPageThree(" + moviesList.results[i].id + ",0);'><img class='poster' src='http://image.tmdb.org/t/p/w342//" + moviesList.results[i].poster_path + "'>" + moviesList.results[i].original_title + "</a></li>");
                }
            
            //theList.listview("refresh");
            
            });
        request.fail(function( jqXHR, textStatus ) {
          alert( "Request failed: " + textStatus );
    });
}