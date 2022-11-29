import psycopg2
import time as t

con = psycopg2.connect(host="localhost", 
                        port="5432", 
                        database="grades",
                        user="postgres",
                        password="postgres")

cur = con.cursor()
for i in range(0, 1000000):
    cur.execute("insert into grades(g , name) values(%s, %s) ", (i, f"test{i}"))

con.commit()
cur.close()

#client side cursor
s = t.time()
clientCur = con.cursor()
e = (t.time() - s)*1000 
print(f"Client Cursor established in {e}ms")

s = t.time()
clientCur.execute("select * from grades")
e = (t.time() - s)*1000 
print(f"Client execute query {e}ms")

s = t.time()
rows = clientCur.fetchmany(50)
e = (t.time() - s)*1000 
print(f"Client fetching first 50 rows {e}ms")

clientCur.close()

#server side cursor
s = t.time()
curServer = con.cursor("sandi")
e = (t.time() - s)*1000 
print(f"Server Cursor established in {e}ms")

s = t.time()
curServer.execute("select * from grades")
e = (t.time() - s)*1000 
print(f"Server execute query {e}ms")

s = t.time()
rows = curServer.fetchmany(50)
e = (t.time() - s)*1000 
print(f"Server fetching first 50 rows {e}ms")

curServer.close()

#close connetion
con.close()