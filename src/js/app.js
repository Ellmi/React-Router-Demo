var $ = require('jquery');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute=Router.DefaultRoute;

var CASABlogsApp = require('./components/casa-blogs-app.jsx');
var Home = require('./components/home.jsx');
var About = require('./components/about-our.jsx');
var Blogs = require('./components/blogs.jsx');

$(function() {
    var routes = (
        <Route name="app" path="/" handler={CASABlogsApp}>
            <DefaultRoute handler={Home}/>
            <Route path="about" handler={About} />
            <Route path="blogs" handler={Blogs} />
        </Route>
    );

    Router.run(routes, function (Handler) {
        React.render(<Handler/>, document.getElementById('container'));
    });
});