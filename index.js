// const income = parseFloat(document.getElementById('income-input').value);
//     const softwareCost = parseFloat(document.getElementById('software-cost-input').value);
//     const courseCost = parseFloat(document.getElementById('course-cost-input').value);
//     const internetCost = parseFloat(document.getElementById('internet-cost-input').value);

document.getElementById('calculate-btn').addEventListener('click',function(){
    let income = parseFloat(document.getElementById('income-input').value) || 0;
    let softwareCost = parseFloat(document.getElementById('software-cost-input').value) || 0;
    let courseCost = parseFloat(document.getElementById('course-cost-input').value) || 0;
    let internetCost = parseFloat(document.getElementById('internet-cost-input').value) || 0;

    errorMassage(income, 'error-massage-income');
    errorMassage(softwareCost, 'error-massage-software-cost');
    errorMassage(courseCost, 'error-massage-course-cost');
    errorMassage(internetCost, 'error-massage-internet-cost')

    const totalExpenseCost = softwareCost + courseCost + internetCost;
    if(income < totalExpenseCost || income <softwareCost || income < courseCost || income <internetCost){
        alert('your income is less than cost');
        return;
    }
    const balance = income - totalExpenseCost;

    document.getElementById('total-expense').innerText = totalExpenseCost;
    document.getElementById('balance').innerText = balance;

    console.table({income,softwareCost,courseCost,internetCost});

    document.getElementById('income-input').value = '';
    document.getElementById('software-cost-input').value = '';
    document.getElementById('course-cost-input').value = '';
    document.getElementById('internet-cost-input').value = '';


});

document.getElementById('saving-calculate-btn').addEventListener('click', function() {
    const savingsPercent = parseFloat(document.getElementById('savings-input').value) || 0;
    const balance = parseFloat(document.getElementById('balance').innerText);

    const savingsAmount = (balance * savingsPercent) / 100;
    const remainingBalance = balance - savingsAmount;

    document.getElementById('saving-amount').innerText = savingsAmount.toFixed(2);
    document.getElementById('remain-amount').innerText = remainingBalance.toFixed(2);

    document.getElementById('savings-input').value = '';
});

function errorMassage(type,id){
    if(type < 0 ){
        const error = document.getElementById(id);
        error.classList.remove('hidden');
        return;
    }
}

const assistanceBtn = document.getElementById('assistance-btn');
const historyBtn = document.getElementById('history-btn');
const calculationContainer = document.getElementById('calculation-container');

historyBtn.addEventListener('click',function(){
    assistanceBtn.classList.remove('bg-gradient-to-l', 'from-purple-600', 'to-blue-600', 'text-white');
    historyBtn.classList.add('bg-gradient-to-l', 'from-purple-600', 'to-blue-600', 'text-white');
    calculationContainer.classList.add('hidden');
})

assistanceBtn.addEventListener('click',function(){
    assistanceBtn.classList.add('bg-gradient-to-l', 'from-purple-600', 'to-blue-600', 'text-white');
    historyBtn.classList.remove('bg-gradient-to-l', 'from-purple-600', 'to-blue-600', 'text-white');
    calculationContainer.classList.remove('hidden');
})