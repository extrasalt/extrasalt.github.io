import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Verticals = [
  {
    title: 'Design',
    description: (
      <>
        Built several REST services in Golang, Node.js and a React frontend
      </>
    ),
  },
  {
    title: 'Distributed Systems',
    description: (
      <>
       Have experience building complex distributed systems using Kafka streams and Cadence/Temporal workflows
      </>
    ),
  },
  {
    title: 'Devops',
    description: (
      <>
       Manage the Infra Ops for services on AWS/Kubernetes with a good CI/CD setup.
      </>
    ),
  },
];

var boxStyle = {
width: "400px",
height: "208px",
margin: 20,
padding: 20,
color: "white",

background: "linear-gradient(180deg, #5C4EFF 0%, #8E31D8 100%)",
borderRadius: "20px"
}

function Feature({title, description}) {
  return (
   <div style={boxStyle}>
    <h2>{title}</h2>
    {description}
   </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Verticals.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
