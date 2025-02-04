import React, { useState } from "react";
import { createNews, selectNewsList } from "../../redux/slices/newsSlice";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { findFibonacciSequence, isPrime } from "../../utils/fibonacci";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";

const AddNewsModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("https://picsum.photos/id/17/200/300");
        const newsList =useAppSelector(selectNewsList)|| [];
        const fibonacciLastIndex = newsList[newsList.length-1]?.fibonacci || 2;



    const handleSubmit = () => {
        const fibonacci = findFibonacciSequence(fibonacciLastIndex);
        dispatch(createNews({ title, description, image, fibonacci, isPrime: isPrime(fibonacci) }));
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add News</DialogTitle>
            <DialogContent style={{width:'500px', display: "flex", flexDirection: "column", gap: "20px" }}>
                <TextField label="Title" fullWidth onChange={(e) => setTitle(e.target.value)} />
                <TextField label="Description" fullWidth multiline rows={3} onChange={(e) => setDescription(e.target.value)} />
                <TextField label="Image URL" fullWidth onChange={(e) => setImage(e.target.value)}  value={image}/>
                <Button onClick={handleSubmit} variant="contained">Add</Button>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewsModal;
