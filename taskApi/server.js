const express = require("express"),
         bp   = require("body-parser"),
         app  = express(),
     db_name  = "task",
        port  = 8888;

app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));


require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});