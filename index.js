require('dotenv')
    .config();
const express = require('express');
const routes = require('./routes');

require('./services/passport');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(3001, () =>{
    console.log('Server started listening on PORT http://localhost:3001');
});

// require('dotenv')
//     .config();
// const express = require('express');
// const routes = require('./routes');
// const path = require('path');
// require('./services/passport');
// const app = express();
// const PORT = process.env.PORT || 3001;
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get("/*", function(req, res) {
//         res.sendFile(path.join(__dirname, "./client/build/index.html"));
//     });
// }
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(routes);
// app.listen(PORT, () => {
//     console.log('Server started listening on PORT http://localhost:3001');
// });
