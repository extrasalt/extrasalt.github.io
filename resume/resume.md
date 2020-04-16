# Mohanarangan Muthukumar

Mohan is a Software Engineer at Avalara R&D. He's part of a fast-paced distributed team tasked with automating sales tax changes. He was previously with Indix, the largest product database company later acquired by Avalara. At Indix, he worked with large datasets, building and maintaining large distributed systems that crawled and parsed 2 billion products.

Mohan has also been organizing the Docker and Kubernetes Communities in Chennai since 2016. He's given several talks in the space including: Containerization, Container internals, Kubernetes Internals, Data processing in Kubernetes, Terraform and AWS firecracker microVMs.

# Skills

- Kafka: Built streaming applications with both Scala and Typescript.
- Kubernetes: Containerized several workloads. Involved with Docker, Kubernetes and Go (Golang) community since 2015.
- AWS: Worked extensively with AWS and Terraform
- APIs: Built several REST services on JVM and NodeJS.
- Public Speaking: Hosted and Presented at several tech events.
- Distributed Systems.

# Professional Experience

### Software Engineer II , Avalara

Feb 2019 - Present
Avalara is a cloud-based compliance provider with a stated goal of being part of every transaction. This involves helping our customers respond to changes in tax rates, laws and levies.

My team builds automation and tooling that would help minimize the human effort involved in responding to tax law changes. We are also responsible for integrating NLP models with the internal tooling infrastructure for the rest of the company to use.

### Software Engineer, Indix

June 2017 - Feb 2019
Indix was product intelligence platform offering services like product categorization, brand identification, standardized attribute extraction and product clustering for over two billion products.

My team built and maintained a distributed crawler-parser was responsible for processing 20 million pages per day. The team had a very strong Devops culture with a strong emphasis on CI/CD.

My responsibility was to ensure critical sites stayed crawlable. I worked extensively in Scala and Kafka to add several improvements to the crawl-parse system including:

- Ability to fetch product information spanning multiple pages
- On-demand crawling infrastructure to find products across multiple sites, parallelly.
- Increasing proxy efficiency
- Built several services with modern application frameworks on Scala and Node.js with a ReactJS frontend.

I worked with product managers and also directly with the customers on feature requests and to understand pain points and fixed them. I also worked across teams to deliver many of these features.

# Formal Education

### Anna University

Bachelor of Engineering, Computer Science | 2013 - 2017

# OSS

## Podder

[Podder](http://github.com/extrasalt/podder) is a multi-tenant baremetal PaaS that runs on top of Kubernetes. It can deploy any go binary that is dropped into it, as a service if it exposes the HTTP port. Podder is an attempt at being the userspace of a distributed operating system.

# Community Activities

Organizer of the Chennai Docker community | Since Aug 2016  
Co-Organizer of Chennai Go Community | Since Jan 2017

# Talks

### The State of the containers

_Chennai Docker meetup, November 2016_  
The sudden rise of containers has led to a lot of bad practices. The talk explained what containers were, how they work internally, how to best avoid inefficient docker setups and how persistent storage works in stateless services.

### Container Orchestration with Kubernetes and Swarm

_Chennai Docker meetup, March 2017_  
Introduction to orchestration and feature comparison of Swarm, Mesos and Kubernetes. Explained different Kubernetes Objects and demoed load balancing in a Kubernetes service. [Slides](http://slides.com/extrasalt/deck)

### Building a baremetal Go PaaS with Kubernetes

_Chennai Go meetup, March 2017_  
Deploying a fully packaged go binary still involves a lot of boilerplate. Presented an alternative where a simple Kubernetes service can deploy any go binary dropped into it and explained how it can be recreated to fit particular needs.

### Docker internals

_Chennai Docker meetup, June 2017_  
Explored how docker works internally and built a self-isolated go program to demonstrate system-call interface used to create linux containers.
