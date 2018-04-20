    Vue.use(VueMaterial.default);
    Vue.use(VueRouter);
 /*   Vue.material.registerTheme('principal', {
          primary: {
            color: 'orange',
            hue: 'A200'
          },
          accent: {
            color: 'grey',
            hue: 'A200'
          }
        });

Vue.material.setCurrentTheme('principal');*/


function init(){
    
    
    const routes = [
                {path: '/find', name: 'find',  component: FindTemplate}
            ,{path: '/settings', name: 'settings',  component: SettingsTemplate}
            ,{path: '/simplelist', name: 'simplelist', component: SimpleListTemplate}
            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
                movies: []
            },
        methods: {
            goToFind: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'find'});
                },
            goToSettings: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'settings'})
                },
            goToSimpleList: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('simplelist');
                },
            
        },
        components: { 'find': FindTemplate }
        
            
      }).$mount('#app');
    
    //router.push('settings');
    router.push({ name: 'find'})
    //FindTemplate.getMoviesListAndDrawList();
}

/*function {//load list by popularity
    var theList = $("#popularlist");
    
     var request = $.ajax({
          url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+moviedbapi,
          method: "GET"
        });

        request.done(function( moviesList ) {
            
            for (i=0;i<9;i++){
                  theList.append( `<md-card md-with-hover>
                        <md-ripple>
                          <md-card-media>
                            <img class='poster' src='http://image.tmdb.org/t/p/w342//` + moviesList.results[i].poster_path + `'>
                          </md-card-media>

                          <md-card-header>
                            <div class="md-title">` + moviesList.results[i].original_title + `</div>
                          </md-card-header>
                      </md-ripple>
                    </md-card>
                    `);
                    
                }
            
            });
        request.fail(function( jqXHR, textStatus ) {
          alert( "Request failed: " + textStatus );
    });
}*/
        

