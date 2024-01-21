import styled from "styled-components";

const StyledDropdown = styled.div`
  label {
    margin-right: 10px;
    font-weight: bold;
  }

  select {
    padding: 5px;
    font-size: 13px;
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function SkiLengthDropdown () {
  return (
    <StyledDropdown>
      <label>Välj längd</label>
      <select>
        <option value="">Ej valt</option>
        <option value="160cm">160 cm</option>
        <option value="170cm">170 cm</option>
        <option value="180cm">180 cm</option>
        <option value="190cm">190 cm</option>
      </select>
    </StyledDropdown>
  )
}

export default SkiLengthDropdown;