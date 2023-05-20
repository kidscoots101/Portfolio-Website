import React, { useState } from "react";
import "./Terminal.css";

export default function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      executeCommand();
    }
  };

  const executeCommand = () => {
    // Process the input value and generate the output
    // For simplicity, this example just echoes the input value
    const commandOutput = inputValue;
    setOutputValue(commandOutput);

    // Add the command and output to the history
    const commandHistoryEntry = {
      command: inputValue,
      output: commandOutput,
    };
    setCommandHistory((prevHistory) => [...prevHistory, commandHistoryEntry]);

    // Clear the input field
    setInputValue("");
  };
  return (
    <div className="terminal">
      <div className="terminal-header">About Me</div>
      <div className="terminal-body">
        {commandHistory.map((entry, index) => (
          <pre key={index} className="terminal-output">
            <span className="terminal-prompt">$</span>
            <span>{entry.command}</span>
            <br />
            {entry.output}
          </pre>
        ))}
        <pre className="terminal-output">
          <span className="terminal-prompt">$</span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKey}
          />
        </pre>
      </div>
    </div>
  );
}
