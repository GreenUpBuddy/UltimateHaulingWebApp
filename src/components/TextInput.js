import React, { Component } from "react";
import { render } from "react-dom";
import "/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/App.css";export default class TextInput extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          active: (props.locked && props.active) || false,
          value: props.value || "",
          error: props.error || "",
          label: props.label || "Label",
          id: props.id || 1
        };
      }
    
      changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
      }
    
      handleKeyPress(event) {
        if (event.which === 13) {
          this.setState({ value: this.props.predicted });
        }
      }
    
      render() {
        const { active, value, error, label, id } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
          "active"} ${locked && !active && "locked"}`;
    
        return (
          <div className={fieldClassName}>
            {active &&
              value &&
              predicted &&
              predicted.includes(value) && <p className="predicted">{predicted}</p>}
            <input
              id={id}
              type="text"
              value={value}
              placeholder={label}
              onChange={this.changeValue.bind(this)}
              onKeyUp={this.handleKeyPress.bind(this)}
              onFocus={() => !locked && this.setState({ active: true })}
              onBlur={() => !locked && this.setState({ active: false })}
            />
            <label htmlFor={1} className={error && "error"}>
              {error || label}
            </label>
          </div>
        );
      }
    }
    
    render(
      <TextInput
        id={1}
        label="Field label"
        predicted="California"
        locked={false}
        active={false}
      />,
      document.getElementById("root")
    );