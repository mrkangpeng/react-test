/*
 * @Description: navBar.js
 * @Autor: kangpeng
 * @Date: 2020-03-04 11:40:37
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 13:59:06
 */
import React from 'react'
import { Menu, Dropdown } from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
class DropDownMenu extends React.Component {
    render() {
        return (
            <Dropdown overlay={
                <Menu>
                    <Menu.Item key="0">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            基本信息
                        </a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                            修改资料
                        </a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="3">
                        退出登录
                    </Menu.Item>
                </Menu>
            }>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <UserOutlined /> kangpeng <DownOutlined />
                </a>
            </Dropdown>
        )
    }
}
export default DropDownMenu