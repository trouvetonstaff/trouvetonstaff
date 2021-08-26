package config

import (
	"os"

	"github.com/joho/godotenv"
)

var Config *configstruct = new(configstruct)

type configstruct struct {
	token string
}

func (config *configstruct) LoadConfig() {
	//
	var token_loaded bool
	
	//
	godotenv.Load(".envprod")

	//
	config.token, token_loaded = os.LookupEnv("token")
	if !token_loaded {
		// panic
	}
}
func (config *configstruct) GetToken() string {
	return config.token
}