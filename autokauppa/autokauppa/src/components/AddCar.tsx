import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type AddCarProps = {
    fetchData: () => void;
};


export default function AddCar({ fetchData }: AddCarProps) {
    const [open, setOpen] = React.useState(false);

    const [car, setCar] = React.useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        fuel: "",
        price: "",
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    }

    const addCar = () => {
        fetch("https://car-rest-service-carshop.2.rahtiapp.fi/cars", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: car.brand,
                model: car.model,
                color: car.color,
                fuel: car.fuel,
                modelYear: car.year,
                price: car.price,
            })
        }).then(() => fetchData());
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new cars
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Add car</DialogTitle>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        value={car.fuel}

                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="year"
                        name="year"
                        label="Manufacturing year"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.year}
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
                        onChange={handleChange}
                        value={car.price}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={addCar}>Add</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}