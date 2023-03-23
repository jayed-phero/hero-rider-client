import React from 'react';

const some = () => {
    function renderTable(data) {
        // Render the table header
        // ...
      
        // Render each row with a checkbox
        data.forEach((row) => {
          const checkbox = `<input type="checkbox" name="select[]" value="${row._id}">`;
          // Render the row with the checkbox
          // ...
        });
      
        // Render the "Select All" checkbox and "Bulk Action" button
        const selectAllCheckbox = `<input type="checkbox" id="select-all-checkbox">`;
        const bulkActionBtn = `<button id="bulk-action-btn">Block Selected Users</button>`;
        // Render the checkboxes and button
        // ...
      
        // Handle the "Bulk Action" button click
        document.getElementById("bulk-action-btn").addEventListener("click", () => {
          // Get the selected checkboxes
          const checkboxes = document.querySelectorAll("input[name='select[]']:checked");
          const selectedIds = Array.from(checkboxes).map((checkbox) => checkbox.value);
      
          // Send an AJAX request to the backend API to block the selected users
          fetch("/api/block-users", {
            method: "POST",
            body: JSON.stringify({ ids: selectedIds }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              // Handle the success or error response
              // ...
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }

      // Create a new API endpoint to block users
      app.post("/api/block-users", async (req, res) => {
        try {
          // Verify that the logged-in user has permission to perform the block action
          if (!req.user.isAdmin) {
            return res.status(403).json({ message: "You are not authorized to perform this action." });
          }
      
          // Get the IDs of the users to block
          const ids = req.body.ids;
      
          // Block the selected users by updating their records in the MongoDB database
          await User.updateMany({ _id: { $in: ids } }, { $set: { isBlocked: true } });
      
          // Return a success response
          res.json({ message: "Users blocked successfully." });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: "Something went wrong." });
        }
      });
    //   second 

function TableRow({ data, onToggleCheck }) {
  const handleCheck = (event) => {
    onToggleCheck(data._id, event.target.checked);
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={data.checked} onChange={handleCheck} />
      </td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.role}</td>
    </tr>
  );
}

function Table({ data, onBulkAction }) {
  const [checkedRows, setCheckedRows] = useState([]);

  const handleToggleCheck = (id, isChecked) => {
    const newData = data.map((item) =>
      item._id === id ? { ...item, checked: isChecked } : item
    );
    setCheckedRows(newData.filter((item) => item.checked));
  };
// 
  const handleBlockUsers = () => {
    const idsToBlock = checkedRows.map((item) => item._id);
    onBulkAction(idsToBlock);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item._id} data={item} onToggleCheck={handleToggleCheck} />
          ))}
        </tbody>
      </table>
      <button onClick={handleBlockUsers}>Block users</button>
    </div>
  );
}

    return (
        <div>
            
        </div>
    );
};

export default some;

// make a table each table row have a checkbox . if admin want he can add a new object property like action: true some of this table row  by checked this  checkbox. this action will happen with calling a mongdoDB with node and express api calling. now make this two types of code  by using react and node express and mongodb



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleCheckBoxChange = (e, id) => {
    const checked = e.target.checked;
    axios.put(`/api/items/${id}`, { action: checked })
    .then((res) => {
      setItems((prevItems) =>
        prevItems.map((item) => (item._id === id ? res.data : item))
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.action}
                  onChange={(e) => handleCheckBoxChange(e, item._id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};