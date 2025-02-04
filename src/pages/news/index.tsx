import React, { useState } from "react";
import List from "../../components/news/List.tsx";
import CreateModal from "../../components/news/CreateModal.tsx";
import { Button } from "@mui/material";
import { useAppSelector } from "../../redux/hooks.ts";
import { authSelector } from "../../redux/slices/authSlice.ts";

const News: React.FC = () => {
    const [open, setOpen] = useState(false);
        const isAuth = useAppSelector(authSelector)


    return (
        <div style={{width:'500px', padding: "20px" , display: "flex", flexDirection: "column", alignItems: "center", gap:'20px',marginTop:'60px'}}>
            {isAuth && <Button variant="contained" onClick={() => setOpen(true)}>Add News</Button>}
            {!isAuth && <p>Login to add news</p>}
            <CreateModal open={open} onClose={() => setOpen(false)} />
            <List />
        </div>
    );
};

export default News;
