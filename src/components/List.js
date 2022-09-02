import React, { Component, createRef } from "react";

class List extends Component {
  items = [];
  refItem = createRef();
  constructor(props) {
    super(props);

    this.state = {
      items: this.items,
      empty: "",
    };
  }
  clickHandlerAdd = () => {
    let item = this.refItem.current.value;
    if (item === "") {
      this.setState({
        empty: "Please enter a character!",
      });
    } else {
      this.refItem.current.value=""
      this.items.push(item);
      this.setState({
        items: this.items,
        empty: "",
      });
    }
  };
  clickHandlerDelete = event => {
    let id=event.target.getAttribute("id")
    this.items.splice(id,1);
    this.setState({
        items: this.items,
        empty: "",
      });
  };
  render() {
    return (
      <>
        <div id="items">
          <div id="divAdd"><div>
            <input
              id="item"
              type="text"
              placeholder="Enter New Item"
              ref={this.refItem}
            />
            <button id="btnAdd" onClick={this.clickHandlerAdd}>
              Add
            </button></div>
          </div>
          {this.state.items.map((item,i) => {
            return (
              <>
                <hr />
                <div className="items">
                  <button className="cross" id={i} onClick={this.clickHandlerDelete}>
                    x
                  </button>
                  {item}
                </div>
              </>
            );
          })}
        </div>
        <p id="paraEmpty">{this.state.empty}</p>
      </>
    );
  }
}

export default List;
