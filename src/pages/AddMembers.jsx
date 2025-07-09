import React, { useState } from 'react';

const AddMembers = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [members, setMembers] = useState([]);

  const handleAdd = () => {
    if (name && phone) {
      setMembers([...members, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  return (
    <div>
      <h2>Add Members to {localStorage.getItem('chamaName')}</h2>

      <input
        type="text"
        placeholder="Member Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAdd}>Add Member</button>

      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name} - {member.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddMembers;
