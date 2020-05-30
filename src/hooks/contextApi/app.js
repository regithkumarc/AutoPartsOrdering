import React from 'react'
import {MyContext} from './context'

class App extends React.Component {
    static contextType = MyContext;
    
    constructor(){
        super();
        //console.log("contextType",MyContext)
        console.log("")
    }
    render () {
        return(
            <div>
               App Component{this.context.count}
            </div>
        )
    }
}

export default App;