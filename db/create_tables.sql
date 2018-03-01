CREATE TABLE IF NOT EXISTS peddlers(
    peddler_id SERIAL PRIMARY KEY,
    auth_id TEXT,
    peddler_first_name VARCHAR(60),
    peddler_last_name VARCHAR(60),
    -- peddler_email VARCHAR(60),
    -- peddler_address VARCHAR(60),
    -- peddler_city VARCHAR(60),
    -- peddler_state VARCHAR(60),
    -- peddler_zip INT
);

CREATE TABLE IF NOT EXISTS peddler_address(
    address_id SERIAL PRIMARY KEY,
    address_peddler_id INT,
    address_description TEXT,
    address_name TEXT,
    company_name TEXT,
    street_1 TEXT,
    street_2 TEXT,
    city TEXT,
    state_province TEXT,
    postal_code TEXT,
    country TEXT,
    phone TEXT,
    email TEXT
);

CREATE TABLE IF NOT EXISTS product_groups(
    product_group_id SERIAL PRIMARY KEY,
    product_group_name TEXT,
    product_group_img TEXT
);

CREATE TABLE IF NOT EXISTS bike_models(
    bike_model_id SERIAL PRIMARY KEY,
    bike_model_product_group_id INT,
    bike_model_name TEXT,
    bike_model_img TEXT
);

CREATE TABLE IF NOT EXISTS bike_types(
    bike_type_id SERIAL PRIMARY KEY,
    bike_type_bike_model_id INT,
    bike_type TEXT,
    bike_type_color_size TEXT,
    bike_type_price INT,
    bike_type_description TEXT,
    bike_type_specs TEXT
);