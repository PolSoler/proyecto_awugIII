    Vue.use(VueMaterial.default);
    Vue.use(VueRouter);

//    Vue.material.registerTheme('about', {
//          primary: {
//            color: 'indigo',
//            hue: 'A200'
//          },
//          accent: {
//            color: 'grey',
//            hue: 300
//          }
//        });

//Vue.material.setCurrentTheme('about');


function init(){
    
    
    const routes = [
                //{path: '/inbox', name: 'inbox', component: MailListTemplate},
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
              message: 'Hola!'},
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
                }
        }
            
      }).$mount('#app');
    
    //router.push('settings');
    router.push({ name: 'find'})
}

        

