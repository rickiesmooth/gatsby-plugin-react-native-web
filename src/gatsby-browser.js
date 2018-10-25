const React = require('react')
const { AppRegistry } = require('react-native')

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    class Root extends React.Component {
      render() {
        return element
      }
    }
    AppRegistry.registerComponent('App', () => Root)
    AppRegistry.runApplication('App', {
      initialProps: {},
      rootTag: container,
      callback,
    })
  }
}
