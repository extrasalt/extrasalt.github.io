# What is docker?

Since a lot of you are here to learn about Kubernetes,
we'll have a quick introduction to Docker and Kubernetes just to get everybody on the same page. Containers are a way to achieve process isolation. A good albeit lame analogy would be Tupperware boxes. You put your food inside the boxes and keep it inside the fridge. Not only would you not have to worry about the smell from different food items getting mixed together, it's also easier to move it across, let's say, you wake up in the morning, take the box out of the fridge, heat it in the microwave and take to the office without ever having to open it. 

Containers give you this pristine environment, devoid of any state interference. And Docker also lets you save containers are images so that they are reproducible. So, what works on your computer must work on the server. 

Before containers, people still used to ship boxes. But these boxes were VMs. With VM, you were shipping an entire machine. And it also has to do with all the hardware emulation. Docker simplied all this by a great deal because it shares the kernel and Copy on write file system means you only have to maintain copies of layers that are different from others. 

# Kubernetes 101

Containers are nice. But how would you manage that in scale. Managing 1000s of containers across machines, individually would become a tedious process. You would need a container orchestrator. That's what Kubernetes, swarm and Mesos+Marathon do.  



-----------------
-----------------------
# Kubernetes revolutionized distributed systems


# Kubernetes is an operating system. 
- Manages resources bla bla
- Luis


# What do data processing frameworks do?

- Hadoop circa 2010
- Spark = Efficient cuz DAG.

# Ontogeny Recapitulates Phylogeny
- Tannenbaum
- Cluster + DS/OS

# Running Hadoop on top of Kubernetes doesn't sound right

# What should you do instead?
- At what cost?
- Pachyderm

# Pachyderm
- PFS
- PPS
- Commits. 

# Reproducibility
- Provenance
- Consistent 
- Data versioning. 

For Collaboration, Compliance and unique insights. 

# Demo



