import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { ReactNode, useContext, useState } from "react"
import Login from "../components/Login"
import type userState from '../features/user/userSlice'
import "./Header.less"
import { ConfigProvider, Divider, Input } from "antd"
import Search from "antd/es/input/Search"

function Header() {
  const counter = useSelector<{ counter: { value: number } }>(state => state.counter)
  const nickname = useSelector<userState>(state => state.user.nickname)
  const id = useSelector<userState>(state => state.user.id)

  return (<>
    <ConfigProvider
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary:"#E68D8D"
        },
      }}
    >
    <div className="container">
        <a href="`">
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1065" width="120" height="50">
            <path className="s0"
              d="m18 160c0 0-216 12.4-248 120-32 107.6 84 412.4 300 644 280 163.6 356-236 356-236 168 235.6 236 192 236 192 176 3.6 192-720 192-720-74.7-73.5-172-72-172-72l-106.8 453.1c0 0-161.2-206.2-253.2-190.5-92 15.6-98.2 462.3-193.3 272.2-95.1-190.1-62.7-458.4-110.7-462.8z" />
            <path className="s0"
              d="m1310.1 552.2c0 0-226.5-293.6-365-68-127.5 293.7-16 364-16 364 0 0 199 125.7 286 44 87.1-81.6 87.1 10.9 87.1 10.9 0 0 131 38.5 152.4-21.7 21.5-60.3 0.5-24.9-51.5-128.2-51.9-103.2-117.3-89.6-172-24 22.1 86.8-301.6 89.1-214.8-57.5 86.8-146.6 103.8-103.5 103.8-103.5 0 0 136.6 63.5 128 93 154.8-30.3 62-109 62-109zm346 160" />
            <path className="s1"
              d="m1663 451.9c-124.9 7.8-208.4 183.9-108.8 323.3 99.6 139.3 374.3 29.7 334.5-117.4-39.8-147.1-100.8-213.8-225.7-205.9z" />
          </svg>
        </a>


        <span className="center">
          <Link to={""}>首页</Link>
          <Link to={""}>前端小游戏</Link>
          <Link to={""}>笔记</Link>
          <Link to={""}>工具网站</Link>
        </span>
        <Search  placeholder="输入关键字" onSearch={() => { }} enterButton />
        {
          nickname ?
            <span>
              欢迎回来,
              <b>{nickname as ReactNode}</b>
              <img></img>
            </span>
            :
            <div><Login></Login></div>
        }

      </div>

    </ConfigProvider>

  </>
  )
}

export default Header
