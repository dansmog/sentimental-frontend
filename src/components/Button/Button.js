import React, { PureComponent } from 'react'

import "./styles.css"

class Button extends PureComponent {
  render(){
    const {title } = this.props;
    return(
      <button>
        {title}
      </button>
    )
  }
}

export default Button;