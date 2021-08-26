package main

import (
	"log"

	"github.com/bwmarrin/discordgo"
	"github.com/trouvetonstaff/trouvetonstaff/config"
)

func main() {
	//
	var discord *discordgo.Session
	var discorderr error
	//
	config.Config.LoadConfig()
	//
	discord, discorderr = discordgo.New("Bot "+ config.Config.GetToken())
	
	if discorderr != nil {
		// panic
		log.Panic(discorderr)
	}
	// test
	discorduser, err := discord.User("@me")
	if err != nil {
		log.Panic("Error when request")
	}
	log.Println(discorduser.ID)
}