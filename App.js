

const parent  = React.createElement('div',
    {id:"parent"},
   [React.createElement('div',{id:'child1'},
   [React.createElement('h1',{},'I am child1 H1 tag'),
   React.createElement('h2',{},"Im H2"),
]),
React.createElement('div',{id:'child2'},
   [React.createElement('h1',{},'I am child2 H1 tag'),
   React.createElement('h2',{},"Im H2"),
])
  
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)