/*
 * @Description: router.js
 * @Autor: kangpeng
 * @Date: 2020-03-04 14:16:07
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 16:17:20
 */
import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Home from '@/views/home/home'
import Table from '@/views/components/table'
import UserInfo from '@/views/setting/userInfo'
import ModifyPwd from '@/views/setting/modifyPwd'
import Layout from '@/layout/layout'
export default class BasicRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/components/table' component={Table} />
                <Route path='/setting/userInfo' component={UserInfo} />
                <Route path='/setting/modifyPwd' component={ModifyPwd} />
                <Redirect from="/*" to="/" />
            </Switch>
        )
    }

}