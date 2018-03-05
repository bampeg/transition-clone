DELETE FROM peddler_address
WHERE address_id = $1;

SELECT * FROM peddler_address
WHERE address_peddler_id = $2;