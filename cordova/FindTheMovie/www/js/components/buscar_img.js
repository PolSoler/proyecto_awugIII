const buscar_img = {props: [], 
        data(){
          return{
            spinner: true,
            data:'',
            results:[]
          }
        },
        methods:{
            searchvision(){
                self=this;
                    var info = `{ 
                     "requests": [ 
                       {  
                         "image": { 
                           "content":"`+image_new+`"
                         }, 
                         "features": [ 
                             { 
                               "type": "WEB_DETECTION", 
                               "maxResults": 20 
                             } 
                         ] 
                       } 
                    ] 
                    }`;

                var request = $.ajax({
                    url: "https://vision.googleapis.com/v1/images:annotate?key="+visionapi,
                    data: info,
                    contentType: 'application/json',
                    method:"POST",
                  })
                request.done(function( data ) {
                    self.showresults(data);
                });
                request.fail(function( jqXHR, textStatus, errorThrown ) {
                   alert( "Request failed: " + jqXHR.status );
                });

                },
            showresults: function(data){
                //alert("TEST");
                this.spinner=false;
                self=this;
                for (i=0;i<data.responses[0].webDetection.webEntities.length;i++){
                      self.results.push({
                        "id":i,
                        "desc":data.responses[0].webDetection.webEntities[i].description
                      });
                } 
            }  


        },
        created: function () {
          this.searchvision();
        },
        template:`
        <div>
            <div id="main">
                    <md-progress-spinner class="md-primary" md-mode="indeterminate" v-if="spinner"></md-progress-spinner>
                    <md-list>
                        <div v-for="item in results" :key="results.id">
                            <md-list-item>
                            <span class="md-list-item-text">{{item.desc}}</span>
                            </md-list-item>
                            <md-divider class="md-inset"></md-divider>
                        </div>
                    </md-list>
            </div>  
        </div>
`
                     };

/**/