import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {Transaction} from "@/app/api/transactions";
import {useMemo} from "react";

interface TransactionsProps {
  transactions: Transaction[]
}

export function Transactions({ transactions }: TransactionsProps) {
  const transactionsSorted = useMemo(() =>
    transactions.sort((a, b) => b.id - a.id)
  , [transactions]);
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Sender</TableColumn>
        <TableColumn>Amount</TableColumn>
        <TableColumn>Date</TableColumn>
      </TableHeader>
      <TableBody>
        {transactionsSorted.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell>{transaction.username}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}