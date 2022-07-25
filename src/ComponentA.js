import React from 'react'
import {MyContext} from './App';
export default function ComponentA() {
  return (
    <div>
        <h1>hello</h1>
        <MyContext.Consumer>
            {
                (user) => <h1>{user}</h1>
            }
        </MyContext.Consumer>
    </div>
  )
}
