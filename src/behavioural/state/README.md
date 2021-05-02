# State

## Intentions:

* It allows an object to change its behaviour based on its internal state. 
* It'll look like this object has changed its class.
* The object can have a different behaviour depending on its actual internal state
* Using this pattern, you can avoid using conditional. So, it makes sense to use it when there is a lot of them.

** State classes -> same interface
** Context -> stores the reference to one of the state classes, which can change.

## My example:

In a coffee e-commerce, there is an order system.
This order can have different statuses; it can be pending, or paid, or rejected, or cancel, or finish.
Depending on the state, the methods on the object order has different behaviours.


order

status:
- pending
- paid
- rejected
- canceled
- approved
- sent
- finished