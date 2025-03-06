# Write your MySQL query statement below
WITH Banned
AS
(
    SELECT users_id, role
    FROM Users
    WHERE banned = 'Yes'
),
TotalsPerDay
AS
(
    SELECT request_at,COUNT(*) AS total
    FROM Trips
    WHERE
    client_id != ALL (SELECT users_id FROM Banned)
    AND
    driver_id != ALL (SELECT users_id FROM Banned)
    AND
    request_at BETWEEN '2013-10-01' AND '2013-10-03'
    GROUP BY request_at
),
CancelledTrips
AS
(
    SELECT request_at, COUNT(*) AS cancelled FROM Trips
    WHERE status != 'completed'
    AND
    client_id != ALL (SELECT users_id FROM Banned)
    AND
    driver_id != ALL (SELECT users_id FROM Banned)
    AND
    request_at BETWEEN '2013-10-01' AND '2013-10-03'
    GROUP BY request_at
)
SELECT T.request_at AS 'Day',
COALESCE(ROUND((cancelled/total),2),0) AS 'Cancellation Rate'
FROM TotalsPerDay T
LEFT JOIN
CancelledTrips C
ON
T.request_at = C.request_at
UNION
SELECT T.request_at AS 'Day',
COALESCE(ROUND((cancelled/total),2),0) AS 'Cancellation Rate'
FROM TotalsPerDay T
RIGHT JOIN
CancelledTrips C
ON
T.request_at = C.request_at