import React, { useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

const TodosPage = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleNewTodoSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>할일목록</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleNewTodoSubmit}>
            <Form.Group controlId='newTodo'>
              <Form.Label>새 할일 추가</Form.Label>
              <Form.Control type='text' value={newTodo} onChange={handleNewTodoChange} />
            </Form.Group>
            <Button variant='primary' type='submit'>
              추가
            </Button>
          </Form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default TodosPage