import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Car } from './Carlist';

type EditCarProps = {
    currentCar: Car;
    fetchData: () => void;
};

const EditCar: React.FC<EditCarProps> = ({ currentCar, fetchData }) => {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState(currentCar);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    const updateCar = () => {
        fetch(car._links.self.href, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        })
            .then(() => {
                fetchData();
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <Button onClick={handleClickOpen}>Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="brand"
                        name="brand"
                        label="Car brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        value={car.brand}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="color"
                        name="color"
                        label="Car color"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        value={car.color}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="model"
                        name="model"
                        label="Car model"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        value={car.model}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="fuel"
                        name="fuel"
                        label="Car fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        value={car.fuel}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="year"
                        name="modelYear"
                        label="Manufacturing year"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange} 
                        value={car.modelYear}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="price"
                        name="price"
                        label="Car price"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        value={car.price}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateCar}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EditCar;