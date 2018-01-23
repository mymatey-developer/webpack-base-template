var React = require('react');
this.componentDidMount = this.componentDidMount.bind(this);
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: '#f08700',
        secondary2color: '#f08700'
    }
});

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        var _this = this;
        this.serverRequest = axios
            .get("http://localhost:5000/json/test.json")
            .then(function(result) {
                _this.setState({
                    results: result.data.results
                });
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Test App</h1>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Nav;