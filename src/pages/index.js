import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
const title = 'Home';

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle={title}>
                <p>I'm making this by following the Gatsby Tutorial.</p>
                <StaticImage
                    alt='Naruto'
                    src='../images/naruto-anime-inspiration.jpg'
                    placeholder='blurred'
                />
            </Layout>
        </main>
    );
};

export default IndexPage;
