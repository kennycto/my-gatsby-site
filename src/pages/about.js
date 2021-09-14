import * as React from 'react';
import Layout from '../components/layout';
const title = 'About Me';

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle={title}>
                <p>Hi there! I'm the proud creator of this site!</p>
            </Layout>
        </main>
    );
};

export default AboutPage;
