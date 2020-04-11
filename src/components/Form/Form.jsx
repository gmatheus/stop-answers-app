import React from 'react'
import './Form.css'

import { Row, Col, Card, Radio, Checkbox } from 'antd'
import { CategoryText } from '../.'

import CATEGORIES from '../../utils/categories'

const ALL_CATEGORIES_NAMES = CATEGORIES.map(c => c.name)
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const LetterSelect = ({ value, onChange }) =>
  <Radio.Group
    value={value}
    onChange={onChange}
    buttonStyle="solid"
    size="middle"
    className="letters-group"
  >
    {
      LETTERS.map(letter =>
        <Radio.Button key={`letter-${letter}`} value={letter} className="letter-button">
          {letter}
        </Radio.Button>
      )
    }
  </Radio.Group>

const AllCategories = ({ checked, onChange }) =>
  <Row>
    <Col xs={12}>
      <Checkbox checked={checked} onChange={onChange}>
        All Categories
      </Checkbox>
    </Col>
  </Row>

const CategoriesSelect = ({ value, onChange }) =>
  <Checkbox.Group value={value} onChange={onChange}>
    <Row>
      {
        CATEGORIES.map(({ name, emoji }) =>
          <Col key={`category-${name}`} xs={12} sm={8} md={6}>
            <Checkbox value={name}>
              <CategoryText name={name} emoji={emoji} />
            </Checkbox>
          </Col>
        )
      }
    </Row>
  </Checkbox.Group>

const Form = ({ formValues, setFormValues }) => {
  const onLetterChange = (e) => {
    const letter = e.target.value
    setFormValues({ ...formValues, letter })
  }

  const onAllCategoriesChange = (e) => {
    const checked = !!e.target.checked
    const categories = checked ? ALL_CATEGORIES_NAMES : []
    setFormValues({ ...formValues, allCategories: checked, categories })
  }
  
  const onCategoriesChange = (categoriesSelected) => {
    const allCategoriesChecked = categoriesSelected.length === CATEGORIES.length
    setFormValues({
      ...formValues,
      allCategories: allCategoriesChecked,
      categories: categoriesSelected
    })
  }

  return (
    <Card title="Filters" bordered={false}>
      <LetterSelect value={formValues.letter} onChange={onLetterChange} />
      <AllCategories checked={formValues.allCategories} onChange={onAllCategoriesChange} />
      <CategoriesSelect value={formValues.categories} onChange={onCategoriesChange} />
    </Card>
  )

}

export default Form
