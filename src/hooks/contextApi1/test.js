import React from 'react'
import { MyContext } from './commonContext'

export default (props) => {
    return (
        <MyContext.Consumer>
            {(context) => {
                return (
                    <p>{context.count}{context.name}</p>
                )
            }
            }
        </MyContext.Consumer>
    )
}

// export default class Test extends React.Component {
//     static myContext = MyContext;
//     render() {
//         return (
//             <p>{this.context.count} {this.context.name}</p>
//         )
//     }
// }