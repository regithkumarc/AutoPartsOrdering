import React from 'react'
import { MyContext, TestContext } from './context'

export default (props) => {
    return (
        <MyContext.Consumer>
            {(context) => {
                return (
                    <TestContext.Consumer>
                        {(testContext => {
                            return (
                                <>
                                    <p>{context.count} {testContext.name}</p>
                                    <button onClick={context.increment}>Increment</button>
                                    <button onClick={context.decrement}>Decrement</button>
                                </>
                            )
                        })
                        }
                    </TestContext.Consumer>
                )
            }
            }
        </MyContext.Consumer>
    )
}