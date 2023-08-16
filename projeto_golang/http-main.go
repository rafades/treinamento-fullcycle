package main

import (
	"fmt"
	"net/http"
)

func omain() {
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(rw, "O mundão!")
	})
	http.ListenAndServe(":8080", nil)
}
