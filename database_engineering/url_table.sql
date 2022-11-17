This table is used in index.js file :
CREATE TABLE URL_TABLE (
    id serial not null primary key,
    URL text,
    URL_ID character(5)
)


Creating a table (students) :
create table students (
id serial primary key, 
g int,
firstname text, 
lastname text, 
middlename text,
address text,
bio text,
dob date,
id1 int
); 

Insert bulk data in the table(students) :
insert into students (g,
firstname, 
lastname, 
middlename,
address ,
bio,
dob,
id1
) 
select 
random()*100,
substring(md5(random()::text ),0,floor(random()*31)::int),
substring(md5(random()::text ),0,floor(random()*31)::int),
substring(md5(random()::text ),0,floor(random()*31)::int),
substring(md5(random()::text ),0,floor(random()*31)::int),
substring(md5(random()::text ),0,floor(random()*31)::int),
now(),
random()*100000
from generate_series(0, 50000000);