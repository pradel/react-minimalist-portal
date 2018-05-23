import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

const useCreatePortal = typeof ReactDom.createPortal === 'function';
const isBrowser = typeof window !== 'undefined';

class Portal extends Component {
  componentWillMount() {
    if (isBrowser) {
      if (!this.props.container) {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
      } else {
        this.container = this.props.container;
      }
      this.renderLayer();
    }
  }

  componentDidUpdate() {
    this.renderLayer();
  }

  componentWillUnmount() {
    if (!useCreatePortal) {
      ReactDom.unmountComponentAtNode(this.container);
    }
    if (!this.props.container) {
      document.body.removeChild(this.container);
    }
  }

  renderLayer() {
    if (!useCreatePortal) {
      ReactDom.unstable_renderSubtreeIntoContainer(this, this.props.children, this.container);
    }
  }

  render() {
    if (useCreatePortal) {
      return ReactDom.createPortal(this.props.children, this.container);
    }
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
  container: PropTypes.object, // eslint-disable-line
};

export default Portal;
