const express = require('express');
const app = express();

// Middleware to serve static files
app.use(express.static('public'));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Blog data
const blogs = [
    { title: 'First Blog', content: 'This is the content of the first blog.' },
    { title: 'Second Blog', content: 'Here is some content for the second blog.' },
    { title: 'Third Blog', content: 'This is the content of the third blog.' },
];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/blog', (req, res) => {
    res.render('blog', { blogs });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
