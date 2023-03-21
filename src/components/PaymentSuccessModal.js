import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import './SuccessStyle.css'

export default function PaymentSuccessModal({ isOpen, openModal, closeModal, transactionID, success }) {


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-9 text-left align-middle shadow-xl transition-all Image bg-cover">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        <p className="font-semibold text-gray-500">
                                            Your Tansaction ID: <span className='text-red-500 font-semibold'>{transactionID}</span>
                                        </p>
                                        <p className="text-sm pt-2 text-indigo-700">
                                            {success}
                                        </p>
                                        {/* <img 
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55MkxxMa5bGyU6-L2ZbVSXRyEx_3TE8UmhA&usqp=CAU'
                                        className=' rounded-xl'
                                        /> */}
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
