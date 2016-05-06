import React from 'react';
import ReactDom from 'react-dom';

class Portal extends React.Component {
  componentWillMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this.renderLayer();
  }

  componentDidUpdate() {
    this.renderLayer();
  }

  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }

  renderLayer() {
    ReactDom.unstable_renderSubtreeIntoContainer(this, this.props.children, this.popup);
  }

  render() {
    return null;
  }
}

Portal.propTypes = {
  children: React.PropTypes.node,
};

export default Portal;
