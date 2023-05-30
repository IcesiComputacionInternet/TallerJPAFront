interface HomeProps {
    welcome: string;
}

function Home ({welcome}: HomeProps) {
    return (
        <>
            <h1>{welcome}</h1>
        </>
    );
}

export default Home;