import { Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';

import { UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/problems')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT'
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category'
    },
    {
      title: 'Content',
      dataIndex: 'Content',
      key: 'Content'
    },
    {
      title: 'Requirement',
      dataIndex: 'Requirement',
      key: 'Requirement',
      render: (requirement) => (
        <div>
          <p>Name: {requirement.Name}</p>
          <p>Type: {requirement.Type}</p>
          <p>Storage: {requirement.Storage}</p>
        </div>
      )
    },
    {
      title: 'Link',
      dataIndex: 'Link',
      key: 'Link'
    },
    {
      title: "Submit",
      key: "submit",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleButtonClick(record)}>
          Submit
        </Button>
      )
    }
  ];


  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (record) => {
    setIsLoading(true);
    // make API call with record data
    console.table(record)
    setIsLoading(false);
  }

  return (
    <div className="App">
      <Table columns={columns} dataSource={data} loading={isLoading} pagination={false}/>
    </div>
  );
}

export default App;