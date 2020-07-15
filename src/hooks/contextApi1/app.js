import React from 'react'
import Test from './test'
import { MyContext } from './commonContext'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"regith",
            count:1
        }
    }

    render() {
        return (
            <MyContext.Provider value={{count:this.state.count,name:this.state.name}}>
                <Test></Test>
            </MyContext.Provider>
        )
    }
}
export default App;