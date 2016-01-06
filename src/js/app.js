var $ = require('jquery');
var React = require('react');
//import React from 'react'
//import $ from 'jquery'
var CASABlogsApp = React.createClass({

    render: function () {
        return (
            <div>
                Hello world
            </div>
        )
    }
});
$(function() {
    React.render(<CASABlogsApp />, document.body);
});