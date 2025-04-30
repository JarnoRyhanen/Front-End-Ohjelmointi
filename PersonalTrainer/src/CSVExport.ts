import { saveAs } from 'file-saver';
import { Customer } from './Types';

export const CSVExport = (customerData: Customer[]) => {
    if (customerData == null) {
        console.error("No customer data available for export.");
        return;
    }

    const headers = [
        "First Name",
        "Last Name",
        "Street Address",
        "Postal Code",
        "City",
        "Email",
        "Phone",
    ];

    const rows = customerData.map((customer) => [
        customer.firstname,
        customer.lastname,
        customer.streetaddress,
        customer.postcode,
        customer.city,
        customer.email,
        customer.phone,
    ]);

    const csvContent =
        [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    saveAs(blob, "customers.csv");
};