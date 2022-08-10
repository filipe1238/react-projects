import React, { useEffect } from 'react'

const Alert = ({ show, type, msg, disableAlert, productList }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      disableAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [productList, disableAlert]);

  return <>
    {show && <h2 className={`alert alert-${type}`}>{msg}</h2>}
  </>
}

export default Alert
