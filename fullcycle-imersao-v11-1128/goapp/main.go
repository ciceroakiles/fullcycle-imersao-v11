package main

import (
	"database/sql"
	"net/http"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(mysql:3306)/imersaoFC11")
	if (err != nil) {
		panic(err.Error())
	}
	defer db.Close()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Testando insert no banco
		insert(db)

		w.Write([]byte("<h1>Hello World!</h1>"))
	})

	http.ListenAndServe(":8081", nil)
}

func insert(db *sql.DB) {
	db.Exec("INSERT INTO Users(nome) VALUES ('Anonymous')")
}
