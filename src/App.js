import React from 'react';
import 'antd/dist/antd.css';
import { Space, Card, Row, Col, Typography, Button, Input, Form, Checkbox } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function App() {
  return (
    <div className="space-align-container" style={{width: '60%', backgroundColor: '#333', marginLeft: '20%', marginTop: '15%'}}>

      <div style={{display: 'flex'}}>
        <Title level={3} style={{color: '#fff', marginLeft: 22, fontSize: 20, height: 50, marginTop: 20}} >
          Настройка ссылок на соцсети
        </Title>
        <Button type="primary" danger style={{marginLeft: '63%', marginTop: 20}}>
          Сохранить
        </Button>
      </div>

      <div className="site-card-wrapper">
        <Row gutter={20} style={{marginBottom: 20}}>
          <Col span={12}>
            <Card  bordered={false} style={{marginLeft: 20, backgroundColor: '#161a1b', borderBottom: '#000000', color: '#fff'}}>
              <div style={{display: 'flex', marginTop: '-10px'}}>
                <Title level={5} style={{color: '#fff'}}>Telegram</Title>
                <Button type="text" ghost icon={<DeleteOutlined style={{color: '#ffffffc2', fontSize: 20}} />} style={{marginLeft: '84%', marginTop: '-8px'}}/>
              </div>
              <p style={{color: '#b5afafd1'}}>
                Вставить ссылку
              </p>
              <Form.Item>
                <Input style={{backgroundColor: '#333'}} />
              </Form.Item>

              <Checkbox onChange={onChange} style={{color: '#ffffffc2'}}>
                Видимость на сайте
              </Checkbox>
            </Card>
          </Col>
          <Col span={12}>
            <Card  bordered={false} style={{marginRight: 20, backgroundColor: '#161a1b', borderBottom: '#000000', color: '#fff'}}>
              <div style={{display: 'flex', marginTop: '-10px'}}>
                <Title level={5} style={{color: '#fff'}}>Telegram</Title>
                <Button type="text" ghost icon={<DeleteOutlined style={{color: '#ffffffc2', fontSize: 20}} />} style={{marginLeft: '84%', marginTop: '-8px'}}/>
              </div>
              <p style={{color: '#b5afafd1'}}>
                Вставить ссылку
              </p>
              <Form.Item>
                <Input style={{backgroundColor: '#333'}} />
              </Form.Item>

              <Checkbox  onChange={onChange} style={{color: '#ffffffc2'}}>
                Видимость на сайте
              </Checkbox>
            </Card>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={12}>
            <Card  bordered={false} style={{marginLeft: 20, backgroundColor: '#161a1b', borderBottom: '#000000', color: '#fff', marginBottom: 20}}>
              <div style={{display: 'flex', marginTop: '-10px'}}>
                <Title level={5} style={{color: '#fff'}}>Telegram</Title>
                <Button type="text" ghost icon={<DeleteOutlined style={{color: '#ffffffc2', fontSize: 20}} />} style={{marginLeft: '84%', marginTop: '-8px'}}/>
              </div>
              <p style={{color: '#b5afafd1'}}>
                Вставить ссылку
              </p>
              <Form.Item>
                <Input style={{backgroundColor: '#333'}} />
              </Form.Item>

              <Checkbox onChange={onChange} style={{color: '#ffffffc2'}}>
                Видимость на сайте
              </Checkbox>
            </Card>
          </Col>
          <Col span={12}>
            <Button type="dashed"  ghost style={{width: '96%', height: '89%', marginTop: 0,}}>
              <PlusCircleOutlined style={{fontSize: 35, color: 'red'}} />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;