// Mock data for the line chart (balance over 12 months)
const accountBalanceData = [1000, 1200, 1500, 1800, 2000, 2300, 2500, 2700, 3000, 3200, 3500, 3800];

// Get the canvas element
const ctx = document.getElementById('accountBalanceChart').getContext('2d');

// Create the line chart
const accountBalanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Account Balance',
            data: accountBalanceData,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Get the filter select element
const filterSelect = document.getElementById('filter');

// Get all transactions
const transactions = document.querySelectorAll('.transaction');

// Function to show/hide transactions based on the selected filter
function filterTransactions() {
    const selectedValue = filterSelect.value;

    // Get the current date
    const currentDate = new Date();

    transactions.forEach(transaction => {
        const transactionDateStr = transaction.querySelector('.transaction-date').textContent;
        const transactionDate = new Date(transactionDateStr);

        switch (selectedValue) {
            case 'day':
                // Show transactions from the last day
                transaction.style.display = transactionDate > new Date(currentDate - 24 * 60 * 60 * 1000) ? 'flex' : 'none';
                break;
            case 'month':
                // Show transactions from the last month
                transaction.style.display = transactionDate > new Date(currentDate - 30 * 24 * 60 * 60 * 1000) ? 'flex' : 'none';
                break;
            case 'year':
                // Show transactions from the last year
                transaction.style.display = transactionDate > new Date(currentDate - 365 * 24 * 60 * 60 * 1000) ? 'flex' : 'none';
                break;
            default:
                // Show all transactions
                transaction.style.display = 'flex';
        }
    });
}

// Attach event listener to the filter select element
filterSelect.addEventListener('change', filterTransactions);

// Call the filterTransactions function initially to show all transactions
filterTransactions();

// savings acct

// Sample data for the savings chart (replace this with your actual data)
const savingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    amounts: [5000, 5123, 5260, 5402, 5549, 5702, 5861, 6026, 6197, 6375, 6559, 6749],
};

// Get the current amount and interest rate elements
const currentAmountElement = document.getElementById('currentAmount');

// Update the current amount in the HTML
function updateCurrentAmount(amount) {
    currentAmountElement.textContent = `$${amount.toFixed(2)}`;
}

// Function to create the savings chart
function createSavingsChart() {
    const ctx = document.getElementById('savingsChart').getContext('2d');

    const savingsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: savingsData.labels,
            datasets: [{
                label: 'Savings Amount',
                data: savingsData.amounts,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    callback: function(value) {
                        return '$' + value.toFixed(2);
                    }
                }
            },
            tooltips: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '$' + context.parsed.y.toFixed(2);
                        return label;
                    }
                }
            }
        }
    });
}

// Call the function to update the current amount (replace this with your actual savings amount)
const currentSavingsAmount = 6749;
updateCurrentAmount(currentSavingsAmount);

// Call the function to create the savings chart
createSavingsChart();
