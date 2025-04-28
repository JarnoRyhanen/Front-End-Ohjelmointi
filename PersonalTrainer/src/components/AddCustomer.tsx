import { AddCustomerProps } from "@/Types";

const AddCustomer = ({ newCustomer, setNewCustomer, handleFormClose, handleFormSubmit }: AddCustomerProps) => {

    const labelClasses = "block text-gray-700";
    const inputClasses = "w-full border border-gray-300 rounded px-3 py-2";

    return (
        <div className="fixed z-20 inset-0 bg-black/80 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">

                <h2 className="text-xl font-bold mb-4">Add Customer</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className={labelClasses}>First Name</label>
                        <input
                            type="text"
                            value={newCustomer.firstname}
                            onChange={(e) => setNewCustomer({ ...newCustomer, firstname: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter first name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>Last Name</label>
                        <input
                            type="text"
                            value={newCustomer.lastname}
                            onChange={(e) => setNewCustomer({ ...newCustomer, lastname: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter last name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>Street Address</label>
                        <input
                            type="text"
                            value={newCustomer.streetaddress}
                            onChange={(e) => setNewCustomer({ ...newCustomer, streetaddress: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter street address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>Postal Code</label>
                        <input
                            type="text"
                            value={newCustomer.postcode}
                            onChange={(e) => setNewCustomer({ ...newCustomer, postcode: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter postal code"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>City</label>
                        <input
                            type="text"
                            value={newCustomer.city}
                            onChange={(e) => setNewCustomer({ ...newCustomer, city: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>Email</label>
                        <input
                            type="email"
                            value={newCustomer.email}
                            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={labelClasses}>Phone</label>
                        <input
                            type="text"
                            value={newCustomer.phone}
                            onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                            className={inputClasses}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleFormClose}
                            className="bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-300 px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCustomer;