/*
 * @Description: layout.js
 * @Autor: kangpeng
 * @Date: 2020-03-04 11:15:46
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 14:49:28
 */
import React from 'react'
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';
import SideItem from './sideBar/sideItem'
import Logo from './sideBar/Logo'
import { Link } from 'react-router-dom';
import './layout.less'
import menuListInfo from '../router/menuList'
import BasicRouter from '../router/router'
import DropDownMenu from '@/layout/navBar/dropDownMenu'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
export default class MyLayout extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	componentWillMount() {
		this.handleDefaultSelect();
		const menuList = this.renderMenu(menuListInfo)
		this.setState({
			menuList
		})
	}
	componentDidMount(){
		console.log(this.state)
	}
	handleDefaultSelect() {
		let menuConfigKeys = []
		menuListInfo.map(item => {
			menuConfigKeys.push(item.key)
		})
		const pathname = window.location.pathname;
		const currentKey = '/' + pathname.split('/')[1];
		console.log(pathname,currentKey)
		if (menuConfigKeys.indexOf(currentKey) !== -1) {
			this.setState({
				defaultOpenKeys: [currentKey],
				defaultSelectedKeys: [pathname]
			})
		}
		
	}
	renderMenu = (data) => {
		return data.map(item => {
			if (item.children) {
				return (
					<SubMenu key={item.key} title={<SideItem item={item} collapsed={this.state.collapsed} />}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			} else {
				return (
					<MenuItem key={item.key} title={item.title} >
						<Link to={item.key}>
							<SideItem item={item} collapsed={this.state.collapsed} ></SideItem>
						</Link>
					</MenuItem>
				)
			}
		})
	}
	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<Link to={'/home'}>
						<div className="logo" >
							<Logo collapsed={this.state.collapsed} />
						</div>
					</Link>

					<Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultSelectedKeys} defaultOpenKeys={this.state.defaultOpenKeys}>
						{this.state.menuList}
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background nav-wrap">
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.toggle,
						})}
						<DropDownMenu />
					</Header>
					<Content
						className="app-main-wrap"
					>
						<BasicRouter />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

