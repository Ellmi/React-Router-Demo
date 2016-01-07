var $ = require('jquery');
var React = require('react');
var CASABlogsApp = require('./components/casa-blogs-app.jsx');

$(function() {
    React.render(<CASABlogsApp />, document.getElementById('container'));
});