import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import useLoanStore from '../store';

const PayDetail: React.FC = () => {
  const { totalDebt, interestRate, debtMonth } = useLoanStore();

  const debtByMonths = useMemo(() => {
    return [...Array(debtMonth)].map((_, index) => {
      const principal = totalDebt / debtMonth;
      let remainDebt = totalDebt - principal * index;

      const interest = remainDebt * (interestRate / 100 / 12);
      const total = interest + principal;
      remainDebt = totalDebt - principal * (index + 1);

      return {
        interest,
        principal,
        total,
        remainDebt,
      };
    });
  }, [totalDebt, debtMonth, interestRate]);

  const formatNumber = (number: number | string) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const totalPay = useMemo(() => {
    return debtByMonths.reduce((total, item) => total + item.total, 0);
  }, [debtByMonths]);

  if (totalDebt === 0 || interestRate === 0 || debtMonth === 0) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>Thông tin trả nợ</h2>
        <p>Số tiền vay: {formatNumber(totalDebt)} VND</p>
        <p>Tổng số tiền gốc và lãi phải trả: {formatNumber(totalPay)} VND</p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tháng</th>
            <th>Lãi phải trả</th>
            <th>Gốc phải trả</th>
            <th>Số tiền phải trả</th>
            <th>Số tiền còn lại</th>
          </tr>
        </thead>
        <tbody>
          {debtByMonths.map((item, index) => {
            return (
              <tr key={index}>
                <td>{formatNumber(index + 1)}</td>
                <td>{formatNumber(item.interest.toFixed(0))}</td>
                <td>{formatNumber(item.principal.toFixed(0))}</td>
                <td>{formatNumber(item.total.toFixed(0))}</td>
                <td>{formatNumber(item.remainDebt.toFixed(0))}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PayDetail;
