import React, { useState, useEffect } from 'react'
import './Content.css'

import { Layout, Row, Col } from 'antd'

import { Form, Answers } from '../.'

import CATEGORIES from '../../utils/categories'

const INITIAL_FORM_VALUES = {
  letter: null,
  allCategories: true,
  categories: CATEGORIES.map(c => c.name)
}

const Content = ({ fetchAnswers }) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)
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
          <Form formValues={formValues} setFormValues={setFormValues} />
        </Col>
        <Col xs={24}>
          <Answers filters={formValues} answers={answers} />
        </Col>
      </Row>
    </Layout.Content>
  )
}

export default Content
