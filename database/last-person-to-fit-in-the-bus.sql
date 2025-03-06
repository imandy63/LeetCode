# Write your MySQL query statement below
WITH TotalWeightByPerson
AS
(
    SELECT 
    turn, person_name, SUM(weight) OVER (ORDER BY Turn) AS 'sum'
    FROM
    Queue 
    ORDER BY turn DESC
)
SELECT person_name FROM TotalWeightByPerson
WHERE sum<=1000
LIMIT 1