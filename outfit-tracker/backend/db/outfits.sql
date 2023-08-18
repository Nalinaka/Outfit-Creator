CREATE TABLE outfits(
  outfits_id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  top TEXT NOT NULL,
  bottom TEXT NOT NULL,
  shoes TEXT NOT NULL,
  date_added DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT,
  favorite BOOLEAN
);