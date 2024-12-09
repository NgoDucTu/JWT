import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';



const Header = () => {
    const items = [
        {
        label: <Link to={"/"}>Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
        },

        {
        label: <Link to={"/user"}>User</Link>,
        key: 'uesr',
        icon: <UserOutlined />,
        },

        {
        label: 'Tài khoản',
        key: 'account',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Đăng nhập',
                key: 'login',
                },
                {
                label: 'Đăng xuất',
                key: 'logout',
                },
        ],
        },
        
        ];
const [current, setCurrent] = useState('mail');
const onClick = (e) => {
console.log('click ', e);
setCurrent(e.key);
};
return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;