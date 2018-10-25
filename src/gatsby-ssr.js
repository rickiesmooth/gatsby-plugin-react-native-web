const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { AppRegistry } = require('react-native')

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  class App extends React.Component {
    render() {
      return bodyComponent
    }
  }

  // See https://github.com/necolas/react-native-web/blob/master/website/guides/getting-started.md#server-side-rendering
  AppRegistry.registerComponent('App', () => App)
  const { element, getStyleElement } = AppRegistry.getApplication('App')

  const html = ReactDOMServer.renderToString(element)
  const styleElement = getStyleElement()

  replaceBodyHTMLString(html)
  setHeadComponents([styleElement])
}
