import React from "react";
import GetCurrency from "../GetCurrency/GetCurrency";

const TableBody = () => {
  const { data } = GetCurrency();
  return (
    <>
      <tbody>
        {data.rates &&
          Object.keys(data.rates).map((key, index) => (
            <>
              <tr key={index}>
                <td className="p-2 px-6">{key}</td>
                <td className="p-2  px-6">{data.rates[key]}</td>
                <td className="p-2  px-6">
                  {(
                    parseFloat(data.rates[key]) +
                    (data.rates[key] / 100) * 5
                  ).toFixed(6)}
                </td>
                <td className="p-2 px-6">
                  {(
                    parseFloat(data.rates[key]) -
                    (data.rates[key] / 100) * 5
                  ).toFixed(6)}
                </td>
              </tr>
            </>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
