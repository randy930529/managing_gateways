const express = require("express");

const useValidateData = (req) => {
  const { peripheral_devices } = req;

  let isError = false;
  let message = "This address may save successfully!";

  if (peripheral_devices.length > 10) {
    isError = true;
    message =
      "This throws an error, because is not a valid array length, the max length is 10 [ArrayPeripheralDevices]";
  }

  return isError
    ? {
        error: isError,
        message: message,
      }
    : {
        error: isError,
        message: message,
      };
};

module.exports = useValidateData;
