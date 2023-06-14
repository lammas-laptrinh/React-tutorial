import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


export default function ButtonCheckOut() {

    return <div>   
   <PayPalScriptProvider options={{"client-id":
         "ASost9DLBhwwufF1z_1il7qxU-TV1dzvks_DmhczqHGEHicFql4NpEBiXCK3n3wzhwXz8KIvgN2L1IDy" }}>
    <PayPalButtons 
        createOrder={(data, actions):any=>{
            return actions.order.create({
                purchase_units:[
                    {   
                        amount:{
                            value:"100.", 
                        }
                    }
                ]
            })
        }
    }
   
    onApprove={(data, actions)=>{
        return actions.order?.capture().then(function (details){
          alert("Hoàn thành thanh toán bởi Mr:  " + details.payer.name?.given_name);
        })
    }} 
    
    />
    
   </PayPalScriptProvider>
  
   
    </div>;
  }
  