---
slug: container-runtimes
title: A Survey of Different Container Runtimes for Kubernetes
authors:
  name: Mohan Muthukuamr
tags: [kubernetes]
---

### A little bit of history
When Kubernetes first came out, it was using Docker as it was. But Docker had a lot of other parts that kubernetes did not need. As a result of the fallout between coreos and Docker, Kubernetes was also forked as rktnetes: A distribution of Kubernetes that used rkt instead of Docker. This was untenable as with any fork, you would need a dedicated team to keep it in sync with upstream. This was a lose-lose situation for everyone. So, CRI was created. 

CRI which stood for Container Runtime Interface established a contract between the kubelet and the container runtime engine. Any new container runtime, for as long as it's CRI compatiable should work with kubernetes easily. This enabled a wide variety of container runtime to come to the market. 

Also stemming from the same Docker/rkt showdown was OCI specification and runc

### OCI and CRI
CRI specifies that the kubelet expects from a container runtime
OCI specifies what a low level container creation engine like runc should respond with

### containerd
You're likely already using this runtime because this is the one that comes with both Docker and the main Kubernetes distribution. 
As a result of the aforementioned developments, the Docker team re-architected their codebase to make it more modular. Everything that was specific to running the container was inside containerd. So, all that Kubernetes needed to run containers was containerd. However, containerd wasn't CRI compliant. 

So, a shim, cri-containerd, actually connects kubelet with containerd. For sometime, cri-containerd co-existed with the dockershim based runtime with dockershim being used by default. Eventually cri-containerd was made the default in 2020 and dockershim was deprecated to the confusion of everyone who wasn't already familiar with this. cri-containerd has been the way the main Kubernetes distribution has been working for a couple of years now. 

### CRI-O
CRI-O was a project spearheaded by RedHat for their Openshift Kubernetes Distribution OKD. Since containerd wasn't specifically written for kubernetes and required the cri-containerd shim, RedHat decided that would make a container runtime that was both CRI and OCI compatiable (Hence the name)

Unlike containerd, cri-o didn't run as a daemon and didn't require superuser priveleges to create a container. This meant that it was much more secure and stable

If you use podman instead of Docker, this is the container runtime that you would be getting.

### Kata Containers
Running containers on a shared kernel came with its own set of problems. 
- For one, since these containers are just namespaced processes, they still behave like real processes and have free access to disk and the network. If one container decides to excessively use the disk or the network, it is going to affect all the other containers running on that node.
- Secondly, in a multi-tenant environment where the cluster operator doesn't control what containers run on these nodes, this poses a significant security risk since any kernel exploit can be leverged by a malicious container to harm other containers 

This is the problem that kata containers aims to solve. This project uses qemu-kvm to help Kubernetes spin actual virtual machines and treat them as containers. The Katacontainers project was the result of a merger of Intel's clearcontainers and hyper.sh's runV projects.

Kata containers projects provides an OCI compliant low-level container creation engine that is more a replacement for runc used by containerd and cri-o. This means that you would typically want to use CRI-O with Kata containers

### Firecracker
Firecracker is not really a container runtime. Firecracker is a light weight VMM developed by Amazon. It has the impermeability of a VM and startup speed of a container. There are several projects that use Firecracker VMs that also implement the CRI interface. 

### gVisor
gVisor is a project from Google with a focus on security. It uses a userspace Kernel to intercept syscalls from the application running inside the container. But since it's an emulated Kernel essentially, it's naturally slow.


<!-- todos: 
- Add years
- group the topics properly to avoid OCI vs CRI confusion. 
- Expand further on Firecracker
- Add References. -->