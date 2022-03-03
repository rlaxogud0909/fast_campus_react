import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher, {
        refreshInterval: 1000,
    });

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default function Page() {
    return (
        <div>
            <Profile id={124} />
            <Avatar id={124} />
        </div>
    );
}

function Profile({ id }) {
    const { user, iseLoading, isError } = useUser(id);
    console.log({ user });

    if (isError) return <div>failed to load</div>;
    if (iseLoading) return <div>loading...</div>;

    // 데이터 렌더링
    return (
        <>
            <div>hello {user.name}!</div>
            <Avatar id={123} />
        </>
    );
}

export function Avatar({ id }) {
    const { user, iseLoading, isError } = useUser(id);

    if (isError) return <div>failed to load (Avatar)</div>;
    if (iseLoading) return <div>loading... (Avatar)</div>;

    // 데이터 렌더링
    return <div>hello {user.name}! (Avatar)</div>;
}
