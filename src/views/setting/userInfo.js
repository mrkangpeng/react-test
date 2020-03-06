/*
 * @Description: setting.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 14:34:39
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 11:48:06
 */
import React from 'react'
export default class UserInfo extends React.Component {

    state = {
        pageInfo:'this is userInfo page'
    }
    render() {
        return (
        <div>{this.state.pageInfo}</div>
        )
    }
}