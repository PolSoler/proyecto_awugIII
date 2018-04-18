const FindTemplate = {props: [], 
        data: () => ({ }),
        methods: { },
        template:`
        <div>
            <div id="main">
                <h1 class="md-title">Find<br>The<br>Movie</h1>
                <md-field>
                  <label>Find by text</label>
                  <md-input v-model="type"></md-input>
                </md-field>
                <div id="fimage">
                  <md-button class="md-fab md-primary">
                     <md-icon>camera_alt</md-icon>
                  </md-button>
                  <br>
                  <small>Find by image</small>
                </div>
            </div>     
        </div>
`
                     };
