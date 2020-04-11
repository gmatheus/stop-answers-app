import React, { useState, useEffect } from 'react'
import './Content.css'

import { Layout, Row, Col } from 'antd'

import { Form, Answers } from '../.'

const Content = ({ fetchAnswers }) => {
  const [formValues, setFormValues] = useState({})
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setAnswers([])
    fetchAnswers(formValues.letter)
      .then(setAnswers)
  }, [formValues.letter, fetchAnswers])

  return (
    <Layout.Content className="content">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Form setFormValues={setFormValues} />
        </Col>
        <Col xs={24}>
          <Answers letter={formValues.letter} answers={answers} />
        </Col>
      </Row>
    </Layout.Content>
  )
}

export default Content
