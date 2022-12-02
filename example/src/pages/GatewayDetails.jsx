import { useState } from "react";
import GatewayActionBar from "../components/GatewayActionBar";
import GatewayTable from "../components/GatewayTable";

const GatewayDetails = () => {
  const [gateways, setGateways] = useState([
    {
      _id: 1,
      name: "Gateway nombre",
      address: [10, 25, 160, 1],
    },
  ]);
  return (
    <>
      <GatewayTable gateways={gateways} />
      <GatewayActionBar handleClick={setGateways} />
    </>
  );
};

export default GatewayDetails;
