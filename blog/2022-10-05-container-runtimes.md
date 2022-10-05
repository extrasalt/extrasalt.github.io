---
slug: container-runtimes
title: A Survey of Different Container Runtimes for Kubernetes
authors:
  name: Mohan Muthukuamr
tags: [kubernetes]
---

### Little bit of history
When Kubernetes first came out, it was using Docker as it was. But Docker had a lot of other parts that kubernetes did not need. As a result of the fallout between coreos and Docker, Kubernetes was also forked as rktnetes: A version of Kubernetes that used rkt instead of Docker. This was a lose-lose situation for everyone. So, CRI was created. 

CRI which stood for Container Runtime Interface established a contract between the kubelet and the container runtime engine. Any new container runtime, for as long as it's CRI compatiable should work with kubernetes easily. This enabled a wide variety of container runtime to come to the market. 

Also stemming from the same event was OCI and the runc specification

### containerd
As a result of these developments, Docker themselves re-architected their codebase to make it more modular. Everything that was specific to running the container was inside containerd. However, containerd wasn't CRI compliant. 

So, an adapter: cri-containerd actually connects kubelet with containerd. This is the way vanilla Kubernetes has been working for a couple of years now. 

### CRI-O
CRI-O was a project spearheaded by RedHat for their Openshift Kubernetes Distribution OKD. Since containerd wasn't specifically written for kubernetes and required the cri-containerd shim, RedHat decided that would make a container runtime that was both CRI and OCI compatiable (Hence the name)

### Firecracker
Firecracker is not really a container runtime. Firecracker is a light weight VMM developed by Amazon. It has the impermeability of a VM and startup speed of a container. There are several projects that use Firecracker VMs that also implement the CRI interface. 

### gVisor
gVisor is a project from Google with a focus on security. It uses a userspace Kernel to intercept syscalls from the application running inside the container. But since it's an emulated Kernel essentially, it's naturally slow.

### Kata Containers
This project uses qemu-kvm to spin help Kubernetes spin actual VMs and treat them as containers. 

<!-- ### Lima
### lxd
### rkt
### runc
### Singularity
### SmartOS
### Sysbox
### Inclavare Containers
### WasmEdge Runtime -->