import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectOptions = () => {
  const [hobbies, setHobbies] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState('');

  useEffect(async () => {
    const res = await axios.get('/hobbies');
    setHobbies(res.data);
  }, []);

  const handleChange = async (e) => {
    if (e.target.value === 'Select') {
      setSelectedHobby([]);
      return;
    }
    const res = await axios.post('/users/age', {
      hobbyToLookup: e.target.value,
    });

    setSelectedHobby(res.data);
  };

  return (
    <div className="sub-component">
      <h2>Age Demographic of Users with hobby</h2>
      {hobbies.length ? (
        <select onChange={handleChange} className="select-input">
          <option>Select</option>
          {hobbies.map((hobby, index) => {
            return (
              <option key={index} value={hobby}>
                {hobby}
              </option>
            );
          })}
        </select>
      ) : null}
      {selectedHobby.length ? (
        <table className="general-table">
          <thead>
            <tr>
              <th>age</th>
              <th>count</th>
            </tr>
          </thead>

          <tbody>
            {selectedHobby.map((el) => {
              return (
                <tr key={el.age}>
                  <td>{el.age}</td>
                  <td>{el.count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default SelectOptions;
