/*
 * @Description: components.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 14:04:21
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-05 14:58:14
 */
import React from 'react'
export default class Compons extends React.Component {
    state = {
        pageInfo :'this is components page'
    };
    render() {
        return (
        <div>{this.state.pageInfo}</div>
        )
    }
}