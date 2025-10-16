-- This is an example of an SQL SELECT command where every field is named and three other tables are related to one.

SELECT customer.customer_id as codigo,
	concat(first_name,' ',last_name) as Nome,
    address.address as Endereco,
    address.district as Bairro,
    address.postal_code as cep,
    city.city as Cidade,
    country.country as Pais
	FROM customer
	INNER JOIN address using(address_id)
    INNER JOIN city using(city_id)
	INNER JOIN country using(country_id);
