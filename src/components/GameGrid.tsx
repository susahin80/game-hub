import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import axios, { AxiosError } from 'axios';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch((err: AxiosError) => {
                console.clear();
                console.log(err.response?.data);
                setError(err.message);
            });
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
