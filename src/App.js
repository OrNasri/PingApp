// App.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [hostname, setHostname] = useState('');
  const [count, setCount] = useState(4);
  const [pingOutput, setPingOutput] = useState('');
  const [topHosts, setTopHosts] = useState([]);

  // Function to make an asynchronous POST request to the server
  const runPingCommand = async () => {
    try {
      const response = await axios.post('http://localhost:'+process.env.REACT_APP_SERVER_PORT+'/ping', {
        hostname,
        count,
      });
      const {pingResult,topHosts} = response.data
      setPingOutput(pingResult);
      setTopHosts(topHosts)
    } catch (error) {
      setPingOutput('Error running ping command')
    }
  };

  // Function to reset the form fields and clear the output state.
  const handleReset = () => {
    setHostname('');
    setCount(4);
    setPingOutput('');
    setTopHosts([])
  };

  return (
    <div className="container mt-4">
      <h1>Ping Web App</h1>
      <div className="mb-3">
        <label htmlFor="hostname" className="form-label" style={{ fontWeight: 'bold' }}>
          Host:
        </label>
        <input
          type="text"
          className="form-control"
          id="hostname"
          value={hostname}
          onChange={(e) => setHostname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="count" className="form-label" style={{ fontWeight: 'bold' }}>
          Count:
        </label>
        <div className="d-flex align-items-center">
          <input
            type="range"
            className="form-range"
            id="count"
            value={count}
            min="1"
            max="100"
            onChange={(e) => setCount(e.target.value)}
          />
          <span className="ms-2">{count}</span>
        </div>
      </div>
      <button className="btn btn-primary me-2" onClick={runPingCommand}>
        Run
      </button>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset
      </button>
      <div className="mt-3">
        <label className="form-label" style={{ fontWeight: 'bold' }}>Output:</label>
        <pre
          className="form-control"
          style={{
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            height: '400px',
            overflowY: 'auto',
          }}
        >
          {pingOutput}
        </pre>
      </div>
      <div className="mt-3">
        <label className="form-label" style={{ fontWeight: 'bold' }}>Top Ping Sites:</label>
        <table className="table">
          <tbody>
            {topHosts.map((host, index) => (
              <tr key={index}>
                <td>{host.hostname}</td>
                <td>{host.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
