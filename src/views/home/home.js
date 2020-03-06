/*
 * @Description: home.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 11:34:09
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-05 11:37:35
 */
import React from 'react'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        pageInfo:'this is home page'
    }
    render() {
        return (
            <div>
                {this.state.pageInfo}
            </div>
        )
    }
}