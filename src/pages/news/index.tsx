import React, { useState } from "react";
import List from "../../components/news/List.tsx";
import CreateModal from "../../components/news/CreateModal.tsx";
import { Button } from "@mui/material";

const News: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>Add News</Button>
            <CreateModal open={open} onClose={() => setOpen(false)} />
            <List />
        </div>
    );
};

export default News;
