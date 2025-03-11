import * as React from 'react'

function WithPDFAbleContent({ children, elementId, onClick }){
    return (
    <>
        <button onClick={() => onClick()}>PDF化</button>
        <div id={elementId}>
            { children }
        </div>
    </>
    )
}

export default WithPDFAbleContent;