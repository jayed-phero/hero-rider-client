import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthProvider } from '../../Context/AuthContext';
import { toast } from 'react-hot-toast';
import PaymentSuccessModal from '../../components/PaymentSuccessModal';

const CheckoutForm = ({ courseData }) => {
    const { user } = useContext(AuthProvider)
    const [cardError, setCardError] = useState(' ')
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [transactionID, setSTransactionID] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, title, image } = courseData

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError(" ")
        }
        setSuccess(' ')

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        console.log(paymentIntent)
        if (paymentIntent.status === "succeeded") {
            toast.success("Congrats! your payment completed")
            setSuccess("Congrats! your payment completed")
            setSTransactionID(paymentIntent.id)
            openModal()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    class="w-full px-6 py-3 text-sm mt-7 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Pay
                </button>
            </form>
            <p className='text-red-500 pt-5'>{cardError}</p>
            <PaymentSuccessModal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
                transactionID={transactionID}
                success={success}
            />
        </div>
    );
};

export default CheckoutForm;