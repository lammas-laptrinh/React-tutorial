import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data:any, actions:any, err:any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value: 100.0,
                },
              },
            ],
          });
        },
        onApprove: async (data:any, actions:any) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err:any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}