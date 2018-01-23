var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import Test from './partials/test';

var $test =  document.getElementById('js-test');
if (typeof($test) != 'undefined' && $test != null) {
    ReactDOM.render(<Test />, document.getElementById('js-test'));
}