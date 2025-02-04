import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { getNews, removeNews } from "../../redux/slices/newsSlice";
import { Card, CardContent, CardMedia, Typography, Button, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { newsList, loading } = useSelector((state: RootState) => state.news);
    const [visibleNews, setVisibleNews] = useState(5);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const handleDelete = async (id: number) => {
        await dispatch(removeNews(id));
    };

    const loadMore = () => {
        setTimeout(() => {
            setVisibleNews((prev) => prev + 5);
        }, 500);
    };

    if (loading) return <CircularProgress />;

    return (
        <InfiniteScroll dataLength={visibleNews} next={loadMore} hasMore={visibleNews < newsList.length} loader={<CircularProgress />}>
            {newsList.slice(0, visibleNews).map((item) => (
                <Card key={item.id} sx={{ maxWidth: 345, margin: "10px auto" }}>
                    <CardMedia component="img" height="140" image={item.image} alt={item.title} loading="lazy" />
                    <CardContent>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography variant="body2">{item.description}</Typography>
                        <Typography color="primary">Fibonacci: {item.fibonacci} {item.isPrime ? "(Prime)" : ""}</Typography>
                        <Button color="error" onClick={() => handleDelete(item.id)}>Delete</Button>
                    </CardContent>
                </Card>
            ))}
        </InfiniteScroll>
    );
};

export default NewsList;
