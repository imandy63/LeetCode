/* Write your T-SQL query statement below */
SELECT email FROM PERSON
GROUP BY email
HAVING COUNT(email) >= 2