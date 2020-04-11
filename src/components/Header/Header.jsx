import React from 'react'
import './Header.css'

import { Layout, Typography } from 'antd'

const { Title } = Typography

const Header = () =>
  <Layout.Header className="header">
    <Title level={3} className="title">
      Stop Answer Generator
      <span role="img" aria-label="pencil" className="emoji">✏️</span>
    </Title>
  </Layout.Header>

export default Header
