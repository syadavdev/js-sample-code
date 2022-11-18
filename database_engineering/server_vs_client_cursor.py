import psycopg2

con = posycopg2.connect(host="localhost", 
                        port="5432", 
                        database="grades", 
                        password="postgres")

cur = con.cursor()
for i in range(0, 1000000):
    cur.execute("insert into grades(g , name) value(%s, %s) ", (i, f("test{i}"))

#commit
con.commit()

#close connetion
con.close()
