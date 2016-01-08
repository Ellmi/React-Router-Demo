var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

    render: function () {
        return (
            <div>
                <h1>CASA BLOGS WEBSITE</h1>
                <ul>
                    <li><Link to="/blogs">blogs</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        )
    }
});