import React from 'react'
import './Form.css'

import { Card, Form as AntdForm, Radio } from 'antd'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Form = ({ setFormValues }) =>
  <Card title="Choose letter" bordered={false}>
    <AntdForm onValuesChange={setFormValues} >
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
    </AntdForm>
  </Card>

export default Form
