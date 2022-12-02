import React, { useEffect } from "react";
import { connect } from "react-redux";
import GatewayActionBar from "./GatewayActionBar";
import GatewayTable from "./GatewayTable";
import HeaderBar from "./HeaderBar";
import { get_gateways } from "../redux/actions/gateway";

const ManagingGatewayTable = ({ gateways, get_gateways }) => {
  useEffect(() => {
    return () => {
      get_gateways();
    };
  }, [gateways.length]);

  return (
    <>
      <HeaderBar />
      <GatewayTable gateways={gateways} />
      <GatewayActionBar />
    </>
  );
};

const mapStateToProp = (state) => ({
  gateways: state.Gateway.gateways,
});

export default connect(mapStateToProp, {
  get_gateways,
})(ManagingGatewayTable);
