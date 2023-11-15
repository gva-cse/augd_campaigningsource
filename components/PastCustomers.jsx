import { Montserrat } from "next/font/google";
// import aap from "@/assets/pastCustomers/aap.png"
// import bjp from "@/assets/pastCustomers/bjp.png"
// import inc from "@/assets/pastCustomers/inc.png"
// import rjd from "@/assets/pastCustomers/rjd.png"
import aastha from "@/assets/pastCustomers/aastha.png"
import fabnic from "@/assets/pastCustomers/fabnic.png"
import saviralFoods from "@/assets/pastCustomers/saviralFoods.png"
import Image from "next/image";

const customers = [
    // {
    //     id: 1,
    //     img: aap,
    // },
    // {
    //     id: 2,
    //     img: bjp,
    // },
    // {
    //     id: 3,
    //     img: inc,
    // },
    // {
    //     id: 4,
    //     img: rjd,
    // },
    {
        id: 5,
        img: aastha,
    },
    {
        id: 6,
        img: fabnic,
    },
    {
        id:7,
        img: saviralFoods,
    }
]

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700]
})

const PastCustomers = () => {
    return (
        <div className="text-center bg-white rounded-md py-2 my-3 outline">
            <h1 className="title py-3"><span className={montserrat.className}>Our Collaborations</span></h1>
            <div className="flex justify-evenly items-center py-3">
                {customers.map((customer) => (
                    <div key={customer.id}>
                        <Image src={customer.img} alt="customer" className="w-40" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PastCustomers;