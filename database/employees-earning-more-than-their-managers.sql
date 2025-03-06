/* Write your T-SQL query statement below */
SELECT name AS employee
FROM Employee a
WHERE 
salary > (SELECT salary FROM Employee b WHERE a.managerId = b.id)