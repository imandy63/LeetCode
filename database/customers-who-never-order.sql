# Write your MySQL query statement below
SELECT name as Customers
FROM CUSTOMERS
WHERE id != ALL (SELECT customerId FROM ORDERS)