# Mediator

## Intentions:

* Reduce dependency between objects
* Communication between objects are not direct, they are forced to collaborate only via a mediator object 

Object -> Mediator <- Object

## My example:

Its a coffee e-commerce made up of coffee sellers.

Each coffee seller has a list of coffees to sell.

The buyer can look over the list of coffees available and buy it.

The communication between the seller and the buyer is not direct, it happens through a mediator.

In this case, using mediator design pattern, we can add as many sellers and buyers as we want, because there is no dependency between those objects.

