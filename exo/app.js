const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const btnCancel = document.querySelector("#btn-cancel");
const btnAdd = document.querySelector("#btn-add");

const expensesList = document.querySelector("#expenses-list");

const totalExpenses = document.querySelector("#total-expenses");

const alert = document.createElement('ion-alert')

let totalAmountExpenses = 0;

function clear() {
    reasonInput.value = "";
    amountInput.value = "";
}
// Je capte l'élément click sur le bouton d'ajout
btnAdd.addEventListener("click", function() {

        // Je récupère les valeurs des champs
        const enteredReason = reasonInput.value;
        const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 || enteredAmount.trim().length <= 0 || enteredAmount <= 0){
        alert.header = 'Alert';
        alert.message = 'Zut, il manque quelque chose';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        return alert.present();
    }

    // Je veux ajouter un ion-item à ma liste
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": $" + enteredAmount;
    expensesList.appendChild(newItem);

    // J'incrémente au montant total le montant que je viens de rentrer en ajoutant la dépense à la liste
    totalAmountExpenses += +enteredAmount
    totalExpenses.textContent = totalAmountExpenses;

    clear();

});

// Je capte l'élément click sur le bouton de suppression
btnCancel.addEventListener("click", function() {
    clear();
});