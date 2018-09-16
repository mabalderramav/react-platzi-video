import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

/**
 * This class handles Media component.
 */
export default class Media extends PureComponent {
  state = {
    author: 'Aldo Balderrama'
  }

  /**
   * Initial constructor.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Gets called when the user clicks on the button.
   *
   * @param {onClick} event
   */
  handleClick = (event) => {
    console.log(this.props.title);

    this.setState({author: 'Oscar Martin Balderrama Vaca'})
  }

  /**
   * Render in the DOM.
   */
  render() {
    return (<div className="Media" onClick={this.handleClick}>
      <div className="Media-cover">
        <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    </div>)
  }
}

/** PropTypes */
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
