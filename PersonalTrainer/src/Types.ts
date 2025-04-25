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

