import React, { Component } from 'react';
import countries from './countries'; 

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }

  handleChange = (event) => {
    const input = event.target.value;

    const filteredSuggestions = countries.filter(country =>
      country.toLowerCase().startsWith(input.toLowerCase())
    );

    this.setState({
      text: input,
      suggestions: filteredSuggestions
    });
  };

  handleSuggestionClick = (suggestion) => {
    this.setState({
      text: suggestion,
      suggestions: []
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Type a country name"
        />
        {this.state.suggestions.length > 0 && (
          <ul>
            {this.state.suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => this.handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default AutoCompletedText;