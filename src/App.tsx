import { useState } from 'react'
import './App.css'
import ExpenseTable from './components/ExpenseTable'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './components/ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './components/ui/input'


function App() {
  const [count, setCount] = useState(0)
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Shopping', amount: 100, dateCreated: new Date() },
    { id: 2, description: 'Food', amount: 50, dateCreated: new Date() },
    { id: 3, description: 'Transportation', amount: 25, dateCreated: new Date() },
  ])

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const handleAddExpense = () => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        description: description,
        amount: amount,
        dateCreated: new Date(),
      },
    ])
  }

  return (
    <main>
      <div className='flex flex-col mt-24'>
        <div className='flex justify-end mb-8'>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Add Expense</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Expense</h4>
                  <p className="text-sm text-muted-foreground">
                    Add a new expense
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="description" className='text-sm'>Description</Label>
                    <Input
                      id="description"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="amount" className='text-sm'>Total Amount</Label>
                    <Input
                      id="amount"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                      value={amount}
                      type='number'
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant={"outline"}
                  onClick={handleAddExpense}
                  className="w-full h-12 text-black rounded-md text-center"
                >
                  Add Expense
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <ExpenseTable expenses={expenses} />
      </div>
    </main>
  )
}

export default App
