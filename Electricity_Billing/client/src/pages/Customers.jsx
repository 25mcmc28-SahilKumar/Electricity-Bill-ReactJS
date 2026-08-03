  import { useState } from "react";
  import { useEffect} from "react";
  import api from "../services/api";

  function Customers() {
    const [customer, setCustomer] = useState({
      name: "",
      address: "",
    });

    const [customers, setCustomers] = useState([]);

    function handleChange(e) {
      const { name, value } = e.target;

      setCustomer({
        ...customer,
        [name]: value,
      });
    }

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        const response = await api.post("/customers", customer);

        alert(response.data.message);
        fetchCustomers();

        setCustomer({
          name: "",
          address: "",
        });
      } catch (error) {
        console.error(error);

        alert("Failed to add customer");
      }
    }

    async function fetchCustomers() {
  try {
    const response = await api.get("/customers");

    setCustomers(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  fetchCustomers();
}, []);

    return (
      <div className="container">
        <h2>Add Customer</h2>

        <form onSubmit={handleSubmit}>
          <label>Customer Name</label>

          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />

          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Customer</button>
        </form>
        <hr />

<h2>Customer List</h2>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
  </thead>

  <tbody>
    {customers.map((customer) => (
      <tr key={customer.customer_id}>
        <td>{customer.customer_id}</td>
        <td>{customer.name}</td>
        <td>{customer.address}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    );
  }

  export default Customers;
  