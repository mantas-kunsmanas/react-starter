'use strict';

var RootComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
});

React.render(<RootComponent />, document.getElementById('app'));