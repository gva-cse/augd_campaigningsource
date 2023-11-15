import { useState } from 'react';
import qrCodeImageUrl from '../assets/qr.jpg'
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/Layout';
function Payment() {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const handleTonTransfer = () => {
    // Implement TON transfer logic here
    // For example:
    // Call an API to transfer TON from sender to receiver

    // Open TonKeeper extension link
    window.open('https://wallet.tonkeeper.com/', '_blank');
  };

  return (
    <>
      <Head>
        <title>TON Cryptocurrency Transfer</title>
        <meta name="description" content="TON Cryptocurrency Transfer" />
      </Head>
      <Layout>
        <div className="bg-blue-200 p-3 rounded-lg my-3">
          <h2 className="title text-black">TON Cryptocurrency Transfer</h2>
          <form className="w-1/3 mx-auto flex flex-col justify-center items-center mt-12">
            <div>
              <label className="text-black">Receiver Address:</label>
              <input
                type="text"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                className="input-form"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="text-black">Amount (TON):</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-form"
                placeholder="0.00"
              />
            </div>
            <button
              onClick={handleTonTransfer}
              className="bg-orange-500 px-4 py-2 w-1/2 md:w-1/3 mx-auto rounded-full text-secondaryText transition duration-200 ease-in-out hover:bg-secondaryText hover:text-bg hover:scale-95"
            >
              Submit
            </button>
          </form>


          <div className="mt-12 text-center flex flex-col items-center">
            <h3 className="title text-black">OR</h3>
            <h4>Make Payment using QR Code:</h4>
            <Image src={qrCodeImageUrl} alt="QR Code" className="w-1/3"/>
          </div>
        </div>
      </Layout>

    </>

  );
}

export default Payment;
