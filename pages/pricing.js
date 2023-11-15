import Layout from "@/components/Layout";
import Head from "next/head";


const data = [
    {
        id: 1,
        name: "Political and Election Promotion",
        price: "Connect to our sales team"
    },
    {
        id: 2,
        name: "Business Development",
        price: "Connect to our sales team"
    },
    {
        id: 3,
        name: "Web Development",
        price: "Starting from ₹9,999"
    },
    {
        id: 4,
        name: "App Development",
        price: "Starting From ₹14,999"
    },
    {
        id: 5,
        name: "Graphics",
        price: "₹1199 for 1 year"
    },
    {
        id: 6,
        name: "Videos and Reels",
        price: "Starting from ₹100"
    },
    {
        id: 7,
        name: "Flags and Custom Printing",
        price: "Connect to our sales team"
    },
    {
        id: 8,
        name: "Camera and Drone Shooting",
        price: "Starting at ₹2500/day"
    },
    {
        id: 9,
        name: "Event Management",
        price: "Connect to our sales team"
    },
    {
        id: 10,
        name: "Social Media Handling",
        price: "Starting from ₹5000/month"
    },
    {
        id: 11,
        name: "Media PR and Articles",
        price: "Connect to our sales team"
    },
    {
        id: 12,
        name: "Twitter Trending",
        price: "As low as ₹15000/hashtag"
    },
    {
        id: 13,
        name: "Funnels and Ads Placement",
        price: "Strategise Now "
    },
    {
        id: 14,
        name: "Bulk Messages",
        price: "₹0.1/message"
    },
    {
        id: 15,
        name: "IVR and Bulk Calls",
        price: "₹0.13/product"
    },
    {
        id: 16,
        name: "Boost your Social Media",
        price: "Connect to our sales team"
    }
];

const Pricing = () => {
    return (
        <>
            <Head>
                <title>Pricing | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="pricing">
                    <h1 className="title text-black">Pricing</h1>
                    <div className="flex justify-center p-3 mb-3 text-black">
                        <table class="pricing-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Pricing</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr class="pricing-card" key={item.id}>
                                        <td class="pricing-card-title">{item.name}</td>
                                        <td class="pricing-card-price">{item.price}</td>
                                        <td class="pricing-card-button"><a href="tel:919811393288" className="hover:underline">Call Now</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>

    );
}

export default Pricing;