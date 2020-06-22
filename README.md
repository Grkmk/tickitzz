#### node package for the ticket-master project

error classes:
  - bad request error
  - custom error
  - database connection error
  - not found error
  - request validation error
  - unauthorized error

middlewares:
  - is current user (current-user)
  - error handler
  - check auth (require-auth)
  - validate request

nats streaming server events:
  - classes:
    - publisher
    - listener
  - interfaces:
    - ticket created
    - ticket updated
    - order created
    - order cancelled
    - expiration complete
  - types:
    - subjects
    - order status