import React from "react";
import { Link } from "react-router-dom";

const GatewayRow = ({ id, name, address }) => {
  return (
    <tr key={id}>
      <td>
        <Link to={`/details/${id}`}>{name}</Link>
      </td>
      <td>{address}</td>
    </tr>
  );
};

export default GatewayRow;
