# Datastructures in Go, The right way
> Chennai Golang Meetup : April 2018

---

## Who am I?
- Mohanarangan Muthukumar
- github.com/extrasalt
- extrasalt.org

---

How do you "use" Datastructures in other languages?

---

### You can do that in Go
[https://github.com/emirpasic/gods](https://github.com/emirpasic/gods)

---

### The end?

---

Uh, we have a problem.

---

No Generics, lol.

---

Now that forces you to rethink the way you do OOP

---

No generics = No futures, promises.

---

> Old habits die hard, and people tend to bring bad habits from other paradigms when they come to golang
>
> <small>Psst, python concurrency primitives</small>
> <small>Pssst, Node.js after promises</small>

---

## Reusablity Fairytale

---

You create your own version of dll hell

---

## Wirth's law
Software is getting slower more rapidly than hardware becomes faster

---

One of the primary reasons is using bad data structures
> N is small, almost always

---

Optimizations are dependent on the data
> You have to make it less generic, eventually.

---

## The Right Way
So, what should you do now?

---

Write your structs yourself
> You might have to copy-paste a few line sometimes, or use templates

---

Maps and slices are mostly good enough

---

## []byte
> and unbox it back

---

# 簡素
> simplicity is elimination

Thank you.

---

twitter: @extrasaltorg
github: @extrasalt
