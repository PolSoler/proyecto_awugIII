const FindTemplate = {props: {}, 
        data(){
          return{
            type: null,
            movies:[]
          }
        },
        methods:{
          getMoviesListAndDrawList: function(){//load list by popularity
              var mo=[];
               var request = $.ajax({
                    url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+moviedbapi,
                    method: "GET"
                  });
                  request.done(function( moviesList ) {
                      for (i=0;i<9;i++){
                              mo.push({
                                "id":moviesList.results[i].id,
                                "poster":"http://image.tmdb.org/t/p/w342//"+moviesList.results[i].poster_path,
                                'title':moviesList.results[i].original_title
                              });
                          }
                      });
                  request.fail(function( jqXHR, textStatus ) {
                    alert( "Request failed: " + textStatus );
                  });
                  this.movies=mo;
              },
              emitDetail(id){
                //this.$emit('clicked-show-detail', id);
                this.$parent.$options.methods.clickedShowDetailModal(id)
              }
              
        },
        created: function () {
          this.getMoviesListAndDrawList();
        },
        template:`
        <div>
            <div id="main">
                <h1 class="md-title maintitle">Find<br>The<br>Movie</h1>
                <div id="searchfield">
                <md-field>
                  <label>Find movie by text</label>
                  <md-input v-model="type"></md-input>
                </md-field>
                <md-button class="md-icon-button md-dense md-primary search">
                  <md-icon>search</md-icon>
                </md-button>
                </div>
                <div id="fimage">
                  <md-button class="md-fab md-primary">
                     <md-icon>camera_alt</md-icon>
                  </md-button>
                  <br>
                  <small>Find by image</small>
                </div>
                <div id='popularmovies'>
                  <p>Popular Movies</p>
                  <div id="popularlist">
                      <md-card md-with-hover v-for="movie in movies" :key="movie.id" @click.native="emitDetail(movie.id)">
                          <md-ripple>
                            <md-card-media>
                              <img class='poster' :src='movie.poster'>
                            </md-card-media>

                            <md-card-header>
                              <div class="md-title">{{movie.title}}</div>
                            </md-card-header>
                        </md-ripple>
                      </md-card>
                  </div>
                </div>
            </div>     
        </div>
`
                     };

/**/