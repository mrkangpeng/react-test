/*
 * @Description: changePwd.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 15:57:56
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 11:31:37
 */
import React from 'react'
export default class ModifyPwd extends React.Component {

    state = {
        pageInfo:'this is modifyPwd page'
    }
    render() {
        return (
        <div>{this.state.pageInfo}</div>
        )
    }
}