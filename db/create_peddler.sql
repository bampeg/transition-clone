INSERT INTO peddlers (peddler_first_name, peddler_last_name, auth_id)
VALUES ($1, $2, $3)
RETURNING *;