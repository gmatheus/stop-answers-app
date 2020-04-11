import React, { useState } from 'react'
import './Answers.css'

import { Row, Col, Card, Input, Typography, Empty } from 'antd'

import { CategoryText } from '../.'

import CATEGORIES from '../../utils/categories'

const { Search } = Input
const { Text } = Typography

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
      <Text copyable>{answer}</Text>
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
  const [searchText, setSearchText] = useState('')
  
  if (!letter) return null

  const isLoading = answers.length === 0
  const answersByCategory = groupAnswersByCategory(answers)
  const filteredAnswers = answersByCategory.filter(({ category }) =>
    categories.includes(category.name) &&
    new RegExp(searchText, 'i').test(category.name)
  )

  return (
    <Card
      title={`Answers for "${letter}"`}
      extra={<Search placeholder="Quick search" onChange={e => setSearchText(e.target.value)} />}
      bordered={false}
      loading={isLoading}
    >
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
