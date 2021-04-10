# Mohan Muthukumar

Mohan is a Senior Software Engineer at Avalara R&D building distributed no-code tools to automate sales tax changes. He was previously with Indix, the largest product database company later acquired by Avalara. At Indix, he worked with large datasets, building and maintaining large distributed systems that crawled and parsed 2 billion products.

Mohan has also been heavily involved with the Cloud Native Communities in Chennai since 2016. He's given several talks in the space including: Containerization, Container internals, Kubernetes Internals, Data processing in Kubernetes, Terraform and AWS firecracker microVMs. Mohan is also the lead organizer of Chaos Carnival: Cloud Native Chaos Engineering Conference.

# Skills

- Built several REST services in Golang, Node.js and a React frontend
- Built Kafka streams in both Scala and Typescript.
- Worked extensively with AWS and Terraform
- Kubernetes: Containerized several workloads. 
- DevRel: Hosted and Presented at several tech events. Involved with Docker, Kubernetes and Go community since 2015.
- Distributed Systems

# Professional Experience

### Senior Software Engineer, Avalara

March 2021 - Present

Building internal no-code tools to enable non-technical people to scrape unstructured content from official websites, transform them and build cadence / temporal workflows to reduce the manual effort involved in responding to tax law changes.


### Software Engineer II , Avalara

Feb 2019 - March 2021 

Avalara is a cloud-based compliance provider with a stated goal of being part of every transaction. This involves helping our customers respond to changes in tax rates, laws and levies.

I was part of the team that builds internal tooling to help automate sourcing tax law changes from official sources. I interacted with product managers and tax researchers to define and implement solutions for automation and integrate ML models into the workflow. I also mentored engineers as an added responsibility. 

### Software Engineer, Indix

June 2017 - Feb 2019 

Indix was a product intelligence platform offering services like product categorization, brand identification, standardized attribute extraction and product clustering for over two billion products.

My team built and maintained a distributed crawler-parser responsible for processing 20 million pages per day. The team had a very strong Devops culture with a strong emphasis on CI/CD.

One of my responsibilities was to ensure that the crawler-parser system stayed up and running. I also worked extensively with Kafka streams to add several improvements to the crawl-parse system including:

- Ability to fetch product information spanning multiple pages
- On-demand crawling infrastructure to find products across multiple sites in parallel.
- Increasing proxy efficiency
- Built several services with modern application frameworks on JVM and Node.js with a ReactJS frontend.

I worked with product managers and also directly with the customers on feature requests and to understand pain points and fixed them. I also worked across teams to deliver many of these features.

# Education

### Anna University

Bachelor of Engineering, Computer Science | 2013 - 2017

# OSS and Community

## Chaos Carnival: Cloud Native Chaos Engineering Conference

I helped organize [Chaos Carnival](https://chaoscarnival.io) a virtual conference for Chaos Engineering. The conference had a great speaker line up with several well-known names sharing their perspectives. 

## podcast.yaml - Kubernetes Podcast

I hosted a podcast with several others from the Chennai CNCF community highlighting different cloud native projects and various aspects of the cloud native ecosystem, emerging practices and transformations in the space and the industries' reaction to it. 


## Talk: From VMs to containers and Back again

MicroVMs have been gaining traction since AWS released [Firecracker](https://github.com/firecracker-microvm/firecracker).
In this talk, I explained how virtual machines fit into the modern Kubernetes bound infrastructure. I spoke about the evolution of VMs while comparing Linux containers to traditional VMs and to microVMs

## Podder

[Podder](http://github.com/extrasalt/podder) (2016) is a multi-tenant baremetal PaaS that runs on top of Kubernetes. It can deploy any go binary that is dropped into it, as a service if it exposes the HTTP port. Podder is an attempt at being the userspace of a distributed operating system.

### Talk: Building a baremetal Go PaaS with Kubernetes

_Chennai Go meetup, March 2017_  
Deploying a fully packaged go binary still involves a lot of boilerplate. Presented an alternative where a simple Kubernetes service can deploy any go binary dropped into it and explained how it can be recreated to fit particular needs.

## Talk: Docker internals

_Chennai Docker meetup, June 2017_  
Explored how docker works internally and built a self-isolated go program to demonstrate system-call interface used to create linux containers.
