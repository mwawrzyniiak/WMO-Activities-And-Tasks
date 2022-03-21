import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import './App.css';

interface FormState {
  disciplines: number,
  projectSize: number
}

function App() {

  const [state, setState] = useState<FormState>({ disciplines: 0, projectSize: 1 });

  function handleDyscyplineChange(event: any) {
    const target = event.target;
    let value = Number(target.value)

    var currentState: FormState = { ...state };

    if (target.checked && !(currentState.disciplines & value)) {
      currentState.disciplines += value
    }

    if (!target.checked && (currentState.disciplines & value)) {
      currentState.disciplines -= value
    }
    setState(currentState)

  }

  function handleInputChange(event: any) {
    const target = event.target;
    let value = Number(target.value)
    let name = target.name

    var currentState: any = { ...state };
    currentState[name] = value;
    setState(currentState)
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    axios.post("http://localhost:4000/api/v1/schedule", state)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 className='my-4'>Proszę wybrać dyscypliny</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Check
                label={`Business Modelling`}
                value={1}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Requirements`}
                value={2}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Analysis And Design`}
                value={4}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Implementation`}
                value={8}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Test`}
                value={16}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Deployment`}
                value={32}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Analysis And Design`}
                value={64}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Configuration And Change Management`}
                value={128}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Project Management`}
                value={256}
                onChange={handleDyscyplineChange}
              />
              <Form.Check
                label={`Environment`}
                value={512}
                onChange={handleDyscyplineChange}
              />
              <h4 className='my-4'>Wielkość projektu</h4>
              <Form.Select name="projectSize" className='my-4' onChange={handleInputChange}>
                <option value="1">Ganimedes</option>
                <option value="2">Pluton</option>
                <option value="3">Mars</option>
                <option value="4">Jowisz</option>
              </Form.Select>
              <Button type="submit">Zatwierdź</Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>


  );
}

export default App;
