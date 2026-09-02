import './ExpensiveItem.css'

const ExpensiveItem = (props) => {
    const date = new Date(2026, 8, 2)
    const title = "New book"
    const price = 30.99

    console.log(props)

    return (
        <div className='expense-item'>
            <div>{props.date.to.String()}</div>
            <div className='expense-item__title'>
                <h2>{props.title}</h2>
                <div className='expense.item__price'>{props.price}</div>
            </div>
        </div>
    )
}

export default ExpensiveItem