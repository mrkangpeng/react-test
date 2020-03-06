/*
 * @Description: menuList.js
 * @Autor: kangpeng
 * @Date: 2020-03-04 14:35:04
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-06 11:28:01
 */
 const menuList = [{
        'title': '首页',
        'key': '/home',
        'icon':'icon-Home'
    },
    {
        'title': '组件',
        'key': '/components',
        'icon':'icon-component',
        'children': [{
            'title': 'table',
            'key': '/components/table'
        }]
    },
    {
        'title': '设置',
        'key': '/setting',
        'icon':'icon-setting',
        'children': [{
                'title': '修改密码',
                'key': '/setting/modifyPwd'
            },
            {
                'title': '基本资料',
                'key': '/setting/userInfo'
            }
        ]
    },
]
export default menuList