import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getNews, removeNews, selectNewsList, selectNewsLoading } from "../../redux/slices/newsSlice";
import { Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { authSelector } from "../../redux/slices/authSlice";

const NewsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const newsList =useAppSelector(selectNewsList)|| [];
    const loading =useAppSelector(selectNewsLoading)
    const [visibleNews, setVisibleNews] = useState(3);
    const isAuth = useAppSelector(authSelector);
    const reversedNewsList = newsList.slice().reverse();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const handleDelete = async (id: number) => {
        await dispatch(removeNews(id));
    };

    const loadMore = () => {
        setTimeout(() => {
            setVisibleNews((prev) => prev + 3);
        }, 500);
    };

    if (loading) return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
        </Box>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}
        >
            <InfiniteScroll
                dataLength={visibleNews}
                next={loadMore}
                hasMore={visibleNews < newsList.length}
                loader={<CircularProgress />}
                style={{
                    width: '600px',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}
            >
                {reversedNewsList.slice(0, visibleNews).map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            width: '100%',
                            margin: "20px 10px",
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            padding: '20px',
                            alignItems: 'center'
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: '100%', sm: '200px' },
                                height: { xs: 'auto', sm: '140px' },
                                objectFit: 'cover'
                            }}
                            image={item.image}
                            alt={item.title}
                            loading="lazy"
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h5" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                {item.description}
                            </Typography>
                            <Typography color="primary" variant="body2">
                                Fibonacci: {item.fibonacci} {item.isPrime ? "(Prime)" : ""}
                            </Typography>
                            {isAuth && (
                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => handleDelete(item.id)}
                                    sx={{ mt: 2 }}
                                >
                                    Delete
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </InfiniteScroll>
        </Box>
    );
};

export default NewsList;