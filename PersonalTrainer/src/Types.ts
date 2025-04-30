
export type Customer = {
    firstname: string;
    lastname: string;
    streetaddress: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
    _links: {
        self: {
            href: string,
        }
        customer: {
            href: string,
        }
        trainings: {
            href: string,
        }
    };
};

export type AddCustomerProps = {
    newCustomer: Customer;
    setNewCustomer: React.Dispatch<React.SetStateAction<Customer>>;
    handleFormClose: () => void;
    handleFormSubmit: (e: React.FormEvent) => void;
}

export type EditCustomerProps = {
    updatedCustomer: Customer;
    setUpdatedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
    handleFormClose: () => void;
    handleFormSubmit: (updatedCustomer: Customer) => void;
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

export type AddTraining = {
    date: string;
    duration: number;
    activity: string;
    customer: string;
};

export type AddTrainingProps = {
    newTraining: AddTraining;
    setNewTraining: React.Dispatch<React.SetStateAction<AddTraining>>;
    handleFormClose: () => void;
    handleFormSubmit: (e: React.FormEvent) => void;
}

export type CalendarEvent = {
    title: string;
    start: string;
    end: string;
};
