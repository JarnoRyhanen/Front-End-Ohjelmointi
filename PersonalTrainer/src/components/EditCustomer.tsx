import {     EditCustomerProps } from "../Types";

const EditCustomer = ({ updatedCustomer, setUpdatedCustomer, handleFormClose, handleFormSubmit }: EditCustomerProps) => {

  const labelClasses = "block text-gray-700";
  const inputClasses = "w-full border border-gray-300 rounded px-3 py-2";

  return (
    <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(updatedCustomer); }}>
          <div className="mb-4">
            <label className={labelClasses}>First Name</label>
            <input
              type="text"
              value={updatedCustomer.firstname}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, firstname: e.target.value })}
              className={inputClasses}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Last Name</label>
            <input
              type="text"
              value={updatedCustomer.lastname}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, lastname: e.target.value })}
              className={inputClasses}
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Street Address</label>
            <input
              type="text"
              value={updatedCustomer.streetaddress}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, streetaddress: e.target.value })}
              className={inputClasses}
              placeholder="Enter street address"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Postal Code</label>
            <input
              type="text"
              value={updatedCustomer.postcode}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, postcode: e.target.value })}
              className={inputClasses}
              placeholder="Enter postal code"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>City</label>
            <input
              type="text"
              value={updatedCustomer.city}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, city: e.target.value })}
              className={inputClasses}
              placeholder="Enter city"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              value={updatedCustomer.email}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, email: e.target.value })}
              className={inputClasses}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Phone</label>
            <input
              type="text"
              value={updatedCustomer.phone}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, phone: e.target.value })}
              className={inputClasses}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleFormClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#4CAF50] text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;