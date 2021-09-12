import * as React from 'react';
import Layout from '../components/layout';
const title = 'Home';

const IndexPage = () => {
    return (
        <main>
            <title>Home page</title>
            <h1></h1>
            <Layout pageTitle={title}>
                <p>I'm making this by following the Gatsby Tutorial.</p>
            </Layout>
        </main>
    );
};

export default IndexPage;
