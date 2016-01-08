var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <h5>This is header</h5>
                <RouteHandler/>
                <h5>This is footer</h5>
            </div>
        )
    }
});