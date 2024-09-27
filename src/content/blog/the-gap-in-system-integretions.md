---
title: "The gap in system integretions"
description: Use tree command to quickly get the project folder and file relation
duration: "12min"
date: "2024-09-27"
---

## Background:
In a recent frontend project, we integrated several backend systems. However, the inconsistency in their API response formats led to a significant challenge.
Frontend developers had to write extensive compatibility code to handle the varying data structures.
This not only increased the workload but also added to the complexity of the codebase.

## How to solve it:
In order to solve the problem, I did those:
- Make clear about the API response formats of each backend system.
- Identify the common data structures and fields across the different systems.
- Develop a unified data model that can accommodate the variations in the API responses.

## My gains from the problem

- A good team should have a common sense about the response data structure of the system.
- A good practice is to strictly adhere to the rules of the REST API, etc.
- A team should keep the good practice with different apps.
