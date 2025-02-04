import React, { useState } from "react";
import { createNews } from "../../redux/slices/newsSlice";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { generateFibonacci, isPrime } from "../../utils/fibonacci";
import {useAppDispatch} from "../../redux/hooks.ts";

const AddNewsModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = () => {
        const fibonacci = generateFibonacci(Math.floor(Math.random() * 10) + 1);
        dispatch(createNews({ title, description, image, fibonacci, isPrime: isPrime(fibonacci) }));
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add News</DialogTitle>
            <DialogContent>
                <TextField label="Title" fullWidth onChange={(e) => setTitle(e.target.value)} />
                <TextField label="Description" fullWidth multiline rows={3} onChange={(e) => setDescription(e.target.value)} />
                <TextField label="Image URL" fullWidth onChange={(e) => setImage(e.target.value)} />
                <Button onClick={handleSubmit} variant="contained">Add</Button>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewsModal;
