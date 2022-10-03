import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

var colorText = {
  fontSize: 60,
  fontWeight: 600,
  textAlign: "left",
  background: "linear-gradient(180deg, #5C4EFF 0%, #8E31D8 100%)",
"-webkit-background-clip": "text",
"-webkit-text-fill-color": "transparent",
"background-clip": "text",
"text-fill-color": "transparent",
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container" style={colorText}>
        <>
        I am Mohan. <br />
        And I Build Things.
        </>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
