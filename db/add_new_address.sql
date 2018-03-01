INSERT INTO peddler_address (address_peddler_id, address_description, address_name, company_name, street_1, street_2, city, state_province, postal_code, country, phone, email)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
SELECT * FROM peddler_address
WHERE address_peddler_id = $1;