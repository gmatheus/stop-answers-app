import React from 'react'
import './App.css'

import { Layout } from 'antd'
import { Header, Content } from './components'
import { fetchAnswers } from './utils/data-fetcher'

const App = () => (
  <Layout className="layout">
    <Header />
    <Content fetchAnswers={fetchAnswers} />
  </Layout>
);

export default App
