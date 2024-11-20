import { create } from 'zustand';

interface LoanState {
  totalDebt: number;
  setTotalDebt: (totalDebt: number | string) => void;

  interestRate: number;
  setInterestRate: (interestRate: number | string) => void;

  debtMonth: number;
  setDebtMonth: (debtMonth: number | string) => void;
}

const useLoanStore = create<LoanState>((set) => ({
  totalDebt: 0,
  setTotalDebt: (totalDebt: number | string) => {
    try {
      if (typeof totalDebt === 'string') {
        totalDebt = parseInt(totalDebt);
      }
      set({ totalDebt: totalDebt || 0 });
    } catch (error) {
      console.error(error);
      set({ totalDebt: 0 });
    }
  },

  interestRate: 0,
  setInterestRate: (interestRate: number | string) => {
    try {
      if (typeof interestRate === 'string') {
        interestRate = parseFloat(interestRate);
      }
      set({ interestRate: interestRate || 0 });
    } catch (error) {
      console.error(error);
      set({ interestRate: 0 });
    }
  },

  debtMonth: 0,
  setDebtMonth: (debtMonth: number | string) => {
    try {
      if (typeof debtMonth === 'string') {
        debtMonth = parseInt(debtMonth);
      }
      set({ debtMonth: debtMonth || 0 });
    } catch (error) {
      console.error(error);
      set({ debtMonth: 0 });
    }
  },
}));

export default useLoanStore;
