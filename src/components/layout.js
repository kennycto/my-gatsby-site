import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';

const pages = [
    { value: 'Home', to: '/' },
    { value: 'About', to: '/about' },
    { value: 'Blog', to: '/blog' }
];
const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const title = `${pageTitle} |
                ${data.site.siteMetadata.title}`;

    return (
        <div className={container}>
            <title>{title}</title>
            <header className={siteTitle}>
                {data.site.siteMetadata.title}
            </header>
            <nav>
                <ul className={navLinks}>
                    {pages.map((page) => (
                        <li key={page.value} className={navLinkItem}>
                            <Link to={page.to} className={navLinkText}>
                                {page.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
