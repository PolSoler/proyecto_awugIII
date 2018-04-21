const MovieDetailsTemplate = {props: ['idm'], 
  data: function() {
          return {
            id3: this.idm,
            movie:[{
              "backdrop_path":"img/loading.gif",
              "genres":"",
              "release_date":"",
              "runtime":"",
              "overview":"Loading...",
              "vote_average":"",
              "homepage":"",
              "poster_path":"img/loading.gif",
              "title":"",
            }],
          }
        },
        methods:{
          getDetails: function(){//load movie details
              var mov=[];
               var request = $.ajax({
                    url: "https://api.themoviedb.org/3/movie/"+id+"?api_key="+moviedbapi,
                    method: "GET"
                  });
                  request.done(function( result ) {
                    mov.push({
                                "backdrop_path":"http://image.tmdb.org/t/p/w500//"+result.backdrop_path,
                                "genres":result.genres,
                                "release_date":result.release_date,
                                "runtime":result.runtime,
                                "overview":result.overview,
                                "vote_average":result.vote_average,
                                "homepage":result.homepage,
                                "poster_path":"http://image.tmdb.org/t/p/w342//"+result.poster_path,
                                "title":result.original_title,
                                
                              });
                      });
                  request.fail(function( jqXHR, textStatus ) {
                    alert( "Request failed: " + textStatus );
                  });
                  this.movie=mov;
              }
        },
        created: function () {
          //alert(id);
            this.getDetails();
          
        },
        template:`
        <div>
          <div id="main">
          <img id='backdrop' :src='movie[0].backdrop_path'>
            <div id='maindata'>
              <md-button id='favbutton' class="md-fab md-primary">
                <md-icon>favorite_border</md-icon>
              </md-button>
              <img id='poster' :src='movie[0].poster_path'>
              <div id="lateral">
                <h2 id='title'>{{movie[0].title}}</h2>
                <p id='vote' title='vote average'><md-icon>stars</md-icon> {{movie[0].vote_average}}</p>
                <p id='release' title='release date'><md-icon>event</md-icon> {{movie[0].release_date}}</p>
                <p id='runtime' title='runtime'><md-icon>access_time</md-icon> {{movie[0].runtime}} min.</p>
                
              </div>
              <div id='genres'>
                <md-chip class="md-primary" v-for="chip in movie[0].genres" :key="chip.id">{{ chip.name }}</md-chip>
              </div>
              <p id='overview'>{{movie[0].overview}}</p>
            </div>
          </div>
        </div>
        `
                     };
