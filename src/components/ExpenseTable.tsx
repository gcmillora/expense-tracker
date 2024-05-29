import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Props = {
    expenses: Expense[]
}

type Expense = {
    id: number
    description: string
    amount: number
    dateCreated: Date
}



const ExpenseTable = ({ expenses }: Props) => {
    const total: number = expenses.reduce((acc: number, expense: Expense) => acc + expense.amount, 0)
    return (
        <Table>
            <TableCaption>List of Expenses</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    expenses.map((expense) => (
                        <TableRow key={expense.id}>
                            <TableCell>{expense.id}</TableCell>
                            <TableCell>{expense.description}</TableCell>
                            <TableCell>{expense.dateCreated.toDateString()}</TableCell>
                            <TableCell className="text-right">{expense.amount}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className='text-left'>Total</TableCell>
                    <TableCell className="text-right">{`Php ${total.toString()}`}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default ExpenseTable