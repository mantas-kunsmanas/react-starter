'use strict';

var RootComponent = React.createClass({displayName: "RootComponent",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello")
            )
        );
    }
});

React.render(React.createElement(RootComponent, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map