import React from "react";
import GatewayRow from "./GatewayRow";

const GatewayTable = ({ gateways }) => {
  const rows = gateways.map((gw) => (
    <GatewayRow key={gw._id} id={gw._id} name={gw.name} address={gw.address} />
  ));

  return (
    <table className="gwTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>IPv4</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default GatewayTable;
