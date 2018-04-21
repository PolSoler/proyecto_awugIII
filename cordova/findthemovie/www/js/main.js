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
            ,{path: '/movie_details:idm', name: 'moviedetails', component: MovieDetailsTemplate}
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
                movies: [],
                id: 0
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
            clickedShowDetailModal: function(idm){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    console.log("id: "+idm);
                    id=idm;
                    router.push({ name: 'moviedetails', params: {'idm': id}});
                }
        }
            
      }).$mount('#app');
        
    
    router.push({ name: 'find'})
}


        

