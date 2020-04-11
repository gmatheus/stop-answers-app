import React from 'react'
import './Form.css'

import { Row, Col, Card, Form as AntdForm, Radio, Checkbox } from 'antd'
import { CategoryText } from '../.'

import CATEGORIES from '../../utils/categories'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const LetterSelect = () =>
  <AntdForm.Item name="letter">
    <Radio.Group buttonStyle="solid" size="middle" className="letters-group">
      {
        LETTERS.map(letter =>
          <Radio.Button key={`letter-${letter}`} value={letter} className="letter-button">
            {letter}
          </Radio.Button>
        )
      }
    </Radio.Group>
  </AntdForm.Item>

const CategoriesSelect = () =>
  <AntdForm.Item name="categories">
    <Checkbox.Group>
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
  </AntdForm.Item>

const Form = ({ setFormValues }) =>
  <Card title="Filters" bordered={false}>
    <AntdForm onValuesChange={(values, allValues) => setFormValues(allValues)} >
      <LetterSelect />
      <CategoriesSelect />
    </AntdForm>
  </Card>

export default Form
