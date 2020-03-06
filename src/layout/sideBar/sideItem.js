/*
 * @Description: Item.js
 * @Autor: kangpeng
 * @Date: 2020-03-05 10:02:30
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 09:38:52
 */
import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1671335_3g6qmha1ie8.js',
});
export default class SideItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { item, collapsed } = this.props
        return (
            <span>
                <IconFont style={{ fontSize: 20 }} type={item.icon}></IconFont>
                <span style={{ display: collapsed ? 'none' : 'inline' }}>{item.title}</span>
            </span>
        )
    }
}