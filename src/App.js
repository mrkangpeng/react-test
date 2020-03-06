/*
 * @Description: a
 * @Autor: kangpeng
 * @Date: 2020-03-03 15:04:24
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 16:09:57
 */
import React from 'react';
import MyLayout from './layout/layout'
import { BrowserRouter ,Redirect,Route} from 'react-router-dom'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyLayout/>
            </BrowserRouter>
        </div>
    );
}

export default App;
