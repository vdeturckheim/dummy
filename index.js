'use strict';
const Express = require('express');
const BodyParser = require('body-parser');

const app = Express();

const store = [];

const write = function (req, res) {

    if (req.body) {
        store.push(req.body);
    }
    return res.json({ ok: true });
};

const read = function (req, res) {

    return res.json(store);
};

app.use(BodyParser.json());

app.post('/', write);
app.put('/', write);
app.patch('/', write);
app.get('/', read);

app.listen(8080, (err) => {

    console.log('server started');
});
