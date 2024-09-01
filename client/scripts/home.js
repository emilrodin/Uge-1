async function getCustomers() {
  try {
    const response = await fetch('http://localhost:3000/customers');
    const customers = await response.json();
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '<h3>Kundeliste:</h3>' +
      customers.map(customer => `<p>${customer.name} - ${customer.email}</p>`).join('');
    console.log(customers);
  } catch (error) {
    console.error('Fejl ved hentning af kunder:', error);
  }
}

async function createCustomer() {
  const name = document.getElementById('customerName').value;
  const email = document.getElementById('customerEmail').value;
  try {
    const response = await fetch('http://localhost:3000/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    const result = await response.json();
    document.getElementById('createResult').textContent = 'Kunde oprettet: ' + JSON.stringify(result);
    console.log(result);
  } catch (error) {
    console.error('Fejl ved oprettelse af kunde:', error);
  }
}