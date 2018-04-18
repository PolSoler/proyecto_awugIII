
const SimpleListTemplate = {props: [], 
  data: function() {
          return {
            favouriteMovies: [
              {name: 'Avengers: Infinity War', val: '8'},
                {name: 'Kingsman', val: '4'},
                {name: 'Coco', val: '9'},
                {name: 'Minions', val: '6'},
                {name: 'Beauty and the Beast', val: '7'},
                {name: 'Zootropia', val: '8'},
              {name: 'Frozen', val: '4'}
            ]
          }
        },
  template:`
  <ul>
    <li v-for="item in favouriteMovies">
      {{ item.name }} - {{ item.val }}
    </li>
  </ul>

`
                     };
