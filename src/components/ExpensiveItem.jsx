import './ExpensiveItem.css'

const ExpensiveItem = () => {
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expense-item__price'>Price</div>
            </div>
        </div>
    )
}

export default ExpensiveItem