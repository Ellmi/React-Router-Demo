var React = require('react');
var Home = require('./home.jsx');
var About = require('./about-our.jsx');
var Blogs = require('./blogs.jsx');

module.exports = React.createClass({
    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    },

    componentDidMount() {
        var that = this;
        window.addEventListener('hashchange', function() {
            that.setState({
                route: window.location.hash.substr(1)
            })
        })
    },
    render: function(){
        var Child = Home;
        switch (this.state.route) {
            case '/about': Child = About; break;
            case '/blogs': Child = Blogs; break;
            default:      Child = Home;
        }
        return (
            <div>
                <Child/>
            </div>
        )
    }
});