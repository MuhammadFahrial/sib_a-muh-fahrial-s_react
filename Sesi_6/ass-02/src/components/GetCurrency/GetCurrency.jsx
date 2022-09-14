import React from "react";

const GetCurrency = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          "https://api.currencyfreaks.com/latest?apikey=a17ba626be574d47b33d00aed3a310ff&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
        );

        const response = await request.json();

        setData(response);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return { data };
};

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th className="p-2">Currency</th>
//             <th className="p-2">We Buy</th>
//             <th className="p-2">Exchange</th>
//             <th className="p-2">We Sell</th>
//           </tr>
//         </thead>
// <tbody>
//   {data.rates &&
//     Object.keys(data.rates).map((key, index) => (
//       <>
//         <tr key={index}>
//           <td className="p-2 px-6">{key}</td>
//           <td className="p-2  px-6">{data.rates[key]}</td>
//           <td className="p-2  px-6">
//             {(
//               parseFloat(data.rates[key]) +
//               (data.rates[key] / 100) * 5
//             ).toFixed(6)}
//           </td>
//           <td className="p-2 px-6">
//             {(
//               parseFloat(data.rates[key]) -
//               (data.rates[key] / 100) * 5
//             ).toFixed(6)}
//           </td>
//         </tr>
//       </>
//     ))}
// </tbody>
//       </table>
//     </>
//   );
// };

export default GetCurrency;
