-- Sort items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT price FROM items
WHERE price >= 80
ORDER BY price DESC;