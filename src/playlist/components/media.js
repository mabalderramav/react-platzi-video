import React, {Component} from 'react';

class Media extends Component {
  constructor() {
    super();
  }
  render() {
    const styles = {
      container: {
        color: '#44536b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (<div >
      <div style={styles.container}>
        <img src="" alt="" width={260} height={160}/>
        <h3>Why do we need to learning React?</h3>
        <p>AldoBalderrama</p>
      </div>
    </div>)
  }
}

export default Media;
