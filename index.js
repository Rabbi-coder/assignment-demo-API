const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            "title": "Book 1",
            "author": "Author 1",
            "description": "Description 1",

        },
        {
            "title": "Book 2",
            "author": "Author 2",
            "description": "Description 2",
        },
        {
            "title": "Book 3",
            "author": "Author 3",
            "description": "Description 3",
        },
        {
            "title": "Book 4",
            "author": "Author 4",
            "description": "Description 4",
        },
        {
            "title": "Book 5",
            "author": "Author 5",
            "description": "Description 5",
        },
    ]);
})



app.listen(8000, () => {
    console.log("server running on port 8000");
})