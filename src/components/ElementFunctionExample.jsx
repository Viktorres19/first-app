import React from 'react'
const ElementFunctionExample = () => {
    /* (tag, props, content) */
    /*<></> means <React.Fragment></React.Fragment>*/
    return React.createElement('h2', {}, 'hello world')
}

export default ElementFunctionExample