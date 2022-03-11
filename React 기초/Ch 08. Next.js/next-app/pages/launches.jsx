// CSR vs SSR -> Next.js로 둘다 가능
// SSG vs SSR -> getStaticProps vs getServerSideProps
// 깃허브에 여러 예제가 많음 : https://github.com/vercel/next.js/tree/canary/examples

// import React, { useState, useEffect } from "react";

export default function Launches({ data }) {
    // CSR
    // const [data, setDate] = useState(null);

    // useEffect(() => {
    //     const fetchLaunches = async () => {
    //         const res = await fetch("https://api.spacexdata.com/v3/launches");
    //         const data = await res.json();

    //         setDate(data);
    //     };

    //     fetchLaunches();
    // }, []);

    if (data == null) {
        return null;
    }

    return (
        <div>
            <ol>
                {data.map((launch, index) => (
                    <li key={index}>{launch.mission_name}</li>
                ))}
            </ol>
        </div>
    );
}

// SSG
// 빌드할때 한번만 불린다.(.next 어딘가에 저장되어있음) (차이: 서버사이드는 클라이언트가 요청할때마다 API를 요청하고 그걸 받아아 그린다.)
// export async function getStaticProps() {
//     const res = await fetch("https://api.spacexdata.com/v3/launches");
//     const data = await res.json();

//     console.log("getStaticProps");

//     return {
//         props: { data }, // will be passed to the page component as props
//     };
// }

// server side props (disable js 해도 사라지지 않는다.) SSR
// fetch는 어디서 되냐 -> 터미널 서버
export async function getServerSideProps() {
    const res = await fetch("https://api.spacexdata.com/v3/launches");
    const data = await res.json();

    console.log("getServerSideProps");

    return {
        props: { data }, // will be passed to the page component as props
    };
}
