import React from 'react'
import './Answers.css'

import { Row, Col, Card, Typography, Empty } from 'antd'
import { CategoryText } from '../.'

import CATEGORIES from '../../utils/categories'

const MAX_ANSWERS = 6

const groupAnswersByCategory = (answersList = []) => {
  return CATEGORIES.map(category => { 
    const filteredAnswers = answersList.filter(a => a.category === category.name).map(a => a.answer) || []
    const answers = [...new Set(filteredAnswers)].slice(0, MAX_ANSWERS)
    return { category, answers }
  })
}

const CategoryCardContent = ({ answers = [] }) => {
  if (answers.length === 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  return answers.map(answer => 
    <div key={`answer-${answer}`} className="category-card-content">
      <Typography.Text type="secondary">
        {answer}
      </Typography.Text>
    </div>
  )
}

const CategoryCard = ({ category, answers = [] }) =>
  <Card
    size="small"
    bordered
    title={<CategoryText name={category.name} emoji={category.emoji} />}
    className="category-card"
  >
    <CategoryCardContent answers={answers} />
  </Card>

const Answers = ({ filters = {}, answers = [] }) => {
  const { letter, categories = [] } = filters
  if (!letter) return null
  const isLoading = answers.length === 0
  const answersByCategory = groupAnswersByCategory(answers)
  const filteredAnswers = answersByCategory.filter(a => categories.includes(a.category.name))

  return (
    <Card title={`Answers for "${letter}"`} bordered={false} loading={isLoading}>
      <Row gutter={[8, 8]} type="flex">
        {
          filteredAnswers.map(({ category, answers }) => 
            <Col key={`category-${category.name}`} xs={24} sm={12} md={8} lg={4}>
              <CategoryCard category={category} answers={answers} />
            </Col>
          )
        }
      </Row>
    </Card>
  )
}

export default Answers
