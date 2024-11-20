import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import useLoanStore from '../store';

const LoanDetail: React.FC = () => {
  const { totalDebt, setTotalDebt, interestRate, setInterestRate, debtMonth, setDebtMonth } =
    useLoanStore();

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Số tiền vay</Form.Label>

        <InputGroup>
          <Form.Control value={totalDebt} onChange={(e) => setTotalDebt(e.target.value)} />
          <InputGroup.Text>VND</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Lãi suất</Form.Label>
        <InputGroup>
          <Form.Control value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Thời gian vay</Form.Label>
        <InputGroup>
          <Form.Control value={debtMonth} onChange={(e) => setDebtMonth(e.target.value)} />
          <InputGroup.Text>Tháng</InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default LoanDetail;
