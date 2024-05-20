import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { Form, InputGroup } from "react-bootstrap";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
        <Form>
            <InputGroup>
                <InputGroup.Text id="searchIcon">
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Type to Search"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </InputGroup>
        </Form>
    );
}
