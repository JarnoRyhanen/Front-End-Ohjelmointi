export type Customer = {
    firstname: string;
    lastname: string;
    streetaddress: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
    _links: {
        self: string;
        customer: string;
        trainings: string;
    };
};

export type AddCustomerProps = {
    newCustomer: Customer;
    setNewCustomer: React.Dispatch<React.SetStateAction<Customer>>;
    handleFormClose: () => void;
    handleFormSubmit: (e: React.FormEvent) => void;
}

export type Training = {
    id: string;
    date: string;
    duration: number;
    activity: string;
    customer: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
    };
};

