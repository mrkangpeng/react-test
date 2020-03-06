/*
 * @Description: logo.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 10:35:36
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-05 10:35:36
 */

import React from 'react'
export default class Logo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { collapsed } = this.props
        return (
            <div>
                <img className="img" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                <span style={{ display: collapsed ? 'none' : 'inline' }}>React-Test</span>
            </div>
        )
    }
}