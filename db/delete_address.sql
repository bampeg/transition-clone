DELETE FROM peddler_address
WHERE address_id = $1;

SELECT address_id, address_description, address_name, company_name, street_1, street_2, city, state_province, postal_code, country, phone, email
FROM peddler_address
JOIN peddlers ON address_peddler_id = $2;