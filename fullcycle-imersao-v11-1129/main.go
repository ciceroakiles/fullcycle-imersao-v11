package main

import (
  "encoding/json"
	"net/http"
)

type Product struct {
	Name string `json:"name"`
	Price float64 `json:"price"`
}

func main() {
	// API simples: lista de produtos
	products := [] Product {
		Product { Name: "Produto 1", Price: 10.00 },
		Product { Name: "Produto 2", Price: 20.00 },
		Product { Name: "Produto 3", Price: 30.00 },
	}

  http.HandleFunc("/products", func (w http.ResponseWriter, r *http.Request) {
    jsonProducts, err := json.Marshal(products)
    if err != nil {
      w.WriteHeader(http.StatusInternalServerError)
      return 
    }
    w.Write(jsonProducts)
  })

	http.ListenAndServe(":8080", nil)
}
